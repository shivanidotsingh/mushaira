/* Content lives in data.js. This file is the engine. */
const $=s=>document.querySelector(s),N=POETS.length;
const stage=$('#stage'),poets=$('#poets'),sc=$('.scroller');
let focus=POETS.findIndex(p=>p.id==='mir'),mode='dial',cur=0,switchTimer,dialRot=0;
const norm=a=>((a+180)%360+360)%360-180;

function flowerSVG(f){
  const R=44,x=R*f.w;
  const d=f.s==='point'?'M0 0C'+x*1.6+' '+-R*.3+' '+x*1.6+' '+-R*.7+' 0 '+-R+'C'+-x*1.6+' '+-R*.7+' '+-x*1.6+' '+-R*.3+' 0 0Z'
    :f.s==='curl'?'M0 0C'+R*.5+' '+-R*.2+' '+R*.4+' '+-R*.85+' 0 '+-R+'C'+-R*.15+' '+-R*.6+' '+-R*.2+' '+-R*.3+' 0 0Z'
    :'M0 0C'+x*2.2+' '+-R*.1+' '+x*2.2+' '+-R*.95+' 0 '+-R+'C'+-x*2.2+' '+-R*.95+' '+-x*2.2+' '+-R*.1+' 0 0Z';
  const ring=(fill,s,off)=>Array.from({length:f.n},(_,i)=>'<path d="'+d+'" fill="'+fill+'" transform="rotate('+(i*360/f.n+off)+') scale('+s+')"/>').join('');
  return '<svg viewBox="-50 -50 100 100" aria-hidden="true"><g stroke="#1b1218" stroke-width="1.6" stroke-linejoin="round">'
    +ring(f.a,1,0)+(f.b?ring(f.b,.62,180/f.n):'')+'<circle r="'+R*.2+'" fill="'+f.c+'"/></g></svg>';
}

const nodes=POETS.map((p,i)=>{
  const b=document.createElement('button');
  b.className='node';b.dataset.s=i%2?'b':'a';
  b.innerHTML='<span class="dot">'+flowerSVG(p.fl)+'</span><span class="lab"><span class="nm-short">'+p.short+'</span><span class="yr">'+p.y+'</span></span>';
  b.setAttribute('aria-label',p.name+', '+p.y);
  b.onclick=()=>setFocus(i);stage.append(b);return b;
});

function syncNodeLabels(){
  nodes.forEach((n,i)=>{
    const p=POETS[i];
    const isAct=i===focus&&mode==='dial';
    const sn=n.querySelector('.nm-short');
    if(sn)sn.textContent=isAct?p.name:p.short;
  });
}

function baseAngles(){
  return Array.from({length:N},(_,i)=>-90+i*360/N);
}

// Timeline: half true dates, half even steps, so no two flowers collide and nothing scrolls.
const tpos=i=>.5*(POETS[i].b-POETS[0].b)/(POETS[N-1].b-POETS[0].b)+.5*i/(N-1);

function alignDial(instant){
  const base=baseAngles();
  const target=-90-base[focus];
  if(instant){
    dialRot=target;
    return;
  }
  dialRot+=norm(target-dialRot);
}

function layout(instant){
  const cw=sc.clientWidth,tl=mode==='timeline'||cw<768,vert=cw<768;
  if(instant)nodes.forEach(n=>n.classList.add('notrans'));
  document.body.classList.toggle('is-tl',tl);
  poets.classList.toggle('stk',tl);poets.classList.toggle('tl',tl);poets.classList.toggle('v',vert);
  let H,R=0;const cx=cw/2;
  if(tl)H=vert?(N-1)*44+80:200;
  else{H=Math.min(innerHeight*.92,840);R=Math.min(cw*.4,H*.47)}
  const cy=tl?H/2:Math.max(R+48,H*.54);
  stage.style.height=H+'px';
  $('#detail').style.setProperty('--hw',tl?'34rem':Math.min(544,R*1.45)+'px');
  $('#axis').style.cssText=vert?'left:40px;top:36px;width:1px;height:'+(H-72)+'px':'left:0;right:0;top:'+cy+'px';
  const arc=$('#arc');arc.setAttribute('viewBox','0 0 '+cw+' '+H);arc.style.cssText='width:'+cw+'px;height:'+H+'px';
  arc.innerHTML=tl?'':'<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'"/>';

  if(!tl)alignDial(instant);
  const A=tl?[]:baseAngles().map(a=>a+dialRot);

  nodes.forEach((n,i)=>{
    if(tl){
      const t=tpos(i);
      n.style.transform=vert?'translate(40px,0px) rotate(0deg) translate(0px,'+(36+(H-72)*t)+'px) rotate(0deg)'
        :'translate(0px,'+cy+'px) rotate(0deg) translate('+(64+(cw-128)*t)+'px,0px) rotate(0deg)';
      n.style.setProperty('--ux',0);n.style.setProperty('--uy',0);
    }else{
      const a=A[i],r=a*Math.PI/180,s=1;
      n.style.transform='translate('+cx+'px,'+cy+'px) rotate('+a+'deg) translate('+R+'px,0px) rotate('+-a+'deg)';
      n.style.setProperty('--ux',s*Math.cos(r));n.style.setProperty('--uy',s*Math.sin(r));
    }
    n.setAttribute('aria-current',i===focus);
  });
  if(instant){void stage.offsetWidth;nodes.forEach(n=>n.classList.remove('notrans'))}
}

function paint(o){document.body.style.setProperty('--bg',o.c);document.body.style.setProperty('--fg',o.f)}
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');

function renderTrLine(line){
  if(typeof line==='string')return '<span>'+esc(line)+'</span>';
  const parts=Array.isArray(line)?line:[line];
  return '<span>'+parts.map(seg=>{
    if(typeof seg==='string')return esc(seg);
    return '<span class="gloss" tabindex="0" data-g="'+esc(seg.g)+'">'+esc(seg.t)+'</span>';
  }).join('')+'</span>';
}

function renderCouplets(){
  const cs=COUPLETS.filter(c=>c.p===POETS[focus].id);
  if(!cs.length)return '<p class="sm todo">No couplets yet.</p>';
  return '<div class="cps">'+cs.map(c=>
    '<div class="cp">'
    +'<p class="tr">'+c.tr.map(renderTrLine).join('')+'</p>'
    +'<p class="u" lang="ur" dir="rtl">'+c.ur.map(l=>'<span>'+esc(l)+'</span>').join('')+'</p>'
    +'</div>'
  ).join('')+'</div>';
}

function renderWorkTag(w){
  if(w&&typeof w==='object'&&w.url){
    return '<li><a href="'+esc(w.url)+'" target="_blank" rel="noopener noreferrer">'+esc(w.title)+'</a></li>';
  }
  const label=w&&typeof w==='object'?w.title:w;
  return '<li>'+esc(label)+'</li>';
}

function renderDetail(){
  const p=POETS[focus],e=ERAS[p.era];
  document.querySelectorAll('#eranav button').forEach((b,k)=>b.setAttribute('aria-current',k===p.era));
  const eraLabel=e.n+(e.sub?', '+e.sub:'');
  $('#detail').innerHTML='<div class="flw">'+flowerSVG(p.fl)+'</div>'
    +renderCouplets()
    +'<h2>'+p.name+'</h2>'
    +(p.bio?'<p class="bio">'+esc(p.bio)+'</p>':'')
    +'<ul class="tags"><li class="tag-era">'+eraLabel+'</li>'+p.works.map(renderWorkTag).join('')+'</ul>';
  paint(e);
}

function setFocus(j){
  if(j===focus)return;
  focus=j;
  cur=0;
  layout(false);
  syncNodeLabels();
  renderDetail();
}
const step=d=>setFocus((focus+d+N)%N);

function setMode(v){
  if(mode===v)return;
  mode=v;
  clearTimeout(switchTimer);
  document.body.classList.add('is-switching');
  document.body.classList.toggle('is-tl',v==='timeline');
  $('#sw').setAttribute('aria-checked',v==='timeline');
  document.querySelectorAll('.sw [data-view]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.view===v));
  sc.scrollLeft=0;
  layout(false);
  syncNodeLabels();
  switchTimer=setTimeout(()=>document.body.classList.remove('is-switching'),900);
}

$('#sw').onclick=()=>setMode(mode==='dial'?'timeline':'dial');
document.querySelectorAll('.sw [data-view]').forEach(b=>b.onclick=()=>setMode(b.dataset.view));
stage.addEventListener('keydown',e=>{
  const k=e.key;if(!['ArrowRight','ArrowDown','ArrowLeft','ArrowUp'].includes(k))return;
  e.preventDefault();step(k==='ArrowRight'||k==='ArrowDown'?1:-1);nodes[focus].focus();
});
document.addEventListener('click',e=>{
  const en=e.target.closest('#eranav button');
  if(en){setFocus(POETS.findIndex(p=>p.era===+en.dataset.era))}
});
addEventListener('resize',()=>layout(true));
$('#eranav').innerHTML=ERAS.map((e,k)=>'<button data-era="'+k+'">'+e.n+'</button>').join('');
layout(true);syncNodeLabels();renderDetail();
