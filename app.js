/* Content lives in data.js. This file is the engine. */
const $=s=>document.querySelector(s),N=POETS.length;
const stage=$('#stage'),poets=$('#poets'),sc=$('.scroller');
let focus=POETS.findIndex(p=>p.id==='mir'),mode='dial',cur=0,switchTimer;const WAH={};
const norm=a=>((a+180)%360+360)%360-180;
// Timeline x: 1253 sits at the far left; 1500-1960 fills the rest.
const yearX=y=>y<1400?.03:.1+(y-1500)/460*.88;

function flowerSVG(f){
  const R=44,x=R*f.w;
  const d=f.s==='point'?'M0 0C'+x*1.6+' '+-R*.3+' '+x*1.6+' '+-R*.7+' 0 '+-R+'C'+-x*1.6+' '+-R*.7+' '+-x*1.6+' '+-R*.3+' 0 0Z'
    :f.s==='curl'?'M0 0C'+R*.5+' '+-R*.2+' '+R*.4+' '+-R*.85+' 0 '+-R+'C'+-R*.15+' '+-R*.6+' '+-R*.2+' '+-R*.3+' 0 0Z'
    :'M0 0C'+x*2.2+' '+-R*.1+' '+x*2.2+' '+-R*.95+' 0 '+-R+'C'+-x*2.2+' '+-R*.95+' '+-x*2.2+' '+-R*.1+' 0 0Z';
  const ring=(fill,s,off)=>Array.from({length:f.n},(_,i)=>'<path d="'+d+'" fill="'+fill+'" transform="rotate('+(i*360/f.n+off)+') scale('+s+')"/>').join('');
  return '<svg viewBox="-50 -50 100 100" aria-hidden="true"><g stroke="#1b1218" stroke-width="3.5" stroke-linejoin="round">'
    +ring(f.a,1,0)+(f.b?ring(f.b,.62,180/f.n):'')+'<circle r="'+R*.2+'" fill="'+f.c+'"/></g></svg>';
}

const nodes=POETS.map((p,i)=>{
  const b=document.createElement('button');
  b.className='node';b.dataset.s=i%2?'b':'a';
  b.innerHTML='<span class="dot">'+flowerSVG(p.fl)+'</span><span class="lab">'+p.short+'<span class="yr">'+p.b+'</span></span>';
  b.setAttribute('aria-label',p.name+', '+p.y);
  b.onclick=()=>setFocus(i);stage.append(b);return b;
});

// Dial: the ring is bigger than the page, so flowers only use the part of it that is on the page.
function ringAngles(cx,cy,R,l,t,r,b){
  const ang=k=>270-k*.5,pt=k=>[cx+R*Math.cos(ang(k)*Math.PI/180),cy+R*Math.sin(ang(k)*Math.PI/180)];
  const vis=Array.from({length:720},(_,k)=>{const[x,y]=pt(k);return x>=l&&x<=r&&y>=t&&y<=b});
  const starts=vis.map((v,k)=>v&&!vis[(k+719)%720]?k:-1).filter(k=>k>=0);
  if(!starts.length)return Array.from({length:N},(_,i)=>270-i*360/N);   // whole ring fits on the page
  const k0=starts.reduce((m,k)=>pt(k)[1]<pt(m)[1]?k:m);                 // begin at the top-most visible end
  const v=[];for(let j=0;j<720;j++){const k=(k0+j)%720;if(vis[k])v.push(ang(k))}
  return Array.from({length:N},(_,i)=>v[Math.round(i*(v.length-1)/(N-1))]);
}
// Timeline: half true dates, half even steps, so no two flowers collide and nothing scrolls.
const tpos=i=>.5*(POETS[i].b-POETS[0].b)/(POETS[N-1].b-POETS[0].b)+.5*i/(N-1);

function layout(instant){
  const cw=sc.clientWidth,mob=cw<780,tl=mode==='timeline',vert=tl&&cw<640;
  if(instant)nodes.forEach(n=>n.classList.add('notrans'));
  poets.classList.toggle('stk',tl);poets.classList.toggle('tl',tl);poets.classList.toggle('v',vert);
  let H,R=0;const cx=cw/2;
  if(tl)H=vert?(N-1)*44+80:200;
  else if(mob){R=cw*.7;H=2*R+70}
  else{H=Math.min(innerHeight*.82,720);R=Math.min(cw*.36,H*.62)}
  const cy=H/2;
  stage.style.height=H+'px';
  $('#detail').style.setProperty('--hw',tl?'34rem':Math.min(544,R*1.1)+'px');
  $('#axis').style.cssText=vert?'left:40px;top:36px;width:1px;height:'+(H-72)+'px':'left:0;right:0;top:'+cy+'px';
  const arc=$('#arc');arc.setAttribute('viewBox','0 0 '+cw+' '+H);arc.style.cssText='width:'+cw+'px;height:'+H+'px';
  arc.innerHTML=tl?'':'<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'"/>';
  const A=tl?[]:ringAngles(cx,cy,R,30,30,cw-30,H-30);
  nodes.forEach((n,i)=>{
    if(tl){
      const t=tpos(i);
      n.style.transform=vert?'translate(40px,0px) rotate(0deg) translate(0px,'+(36+(H-72)*t)+'px) rotate(0deg)'
        :'translate(0px,'+cy+'px) rotate(0deg) translate('+(64+(cw-128)*t)+'px,0px) rotate(0deg)';
    }else{
      const a=norm(A[i]),r=a*Math.PI/180,s=mob?-1:1; // labels sit outside the ring (inside on phones)
      n.style.transform='translate('+cx+'px,'+cy+'px) rotate('+a+'deg) translate('+R+'px,0px) rotate('+-a+'deg)';
      n.style.setProperty('--ux',s*Math.cos(r));n.style.setProperty('--uy',s*Math.sin(r));
    }
    n.setAttribute('aria-current',i===focus);
  });
  if(instant){void stage.offsetWidth;nodes.forEach(n=>n.classList.remove('notrans'))}
}

function paint(o){document.body.style.setProperty('--bg',o.c);document.body.style.setProperty('--fg',o.f)}
const lines=a=>a.map(l=>'<span>'+l+'</span>').join('');

function renderMic(){
  const cs=COUPLETS.filter(c=>c.p===POETS[focus].id),c=cs[cur];
  $('#mic').innerHTML=!c?'<p class="sm todo">No couplets yet.</p>'
    :'<div class="cp"><p class="tr">'+lines(c.tr)+'</p><p class="u" lang="ur" dir="rtl">'+lines(c.ur)+'</p>'
    +'<div class="gl sm" hidden><p>'+c.en+'</p><p class="words">'+c.w.map(w=>'<span><b>'+w[0]+'</b> '+w[1]+'</span>').join('')+'</p></div>'
    +'<div class="acts">'+(cs.length>1?'<button id="irshad">Irshad</button>':'')
    +'<button data-act="mukarrar" aria-expanded="false">Mukarrar</button>'
    +'<button data-act="wah" data-id="'+c.id+'">Wah! <span>'+(WAH[c.id]||0)+'</span></button></div></div>';
}

// Everything about the selected poet lives here, inside the ring.
function renderDetail(){
  const p=POETS[focus],e=ERAS[p.era];
  document.querySelectorAll('#eranav button').forEach((b,k)=>b.setAttribute('aria-current',k===p.era));
  $('#detail').innerHTML='<div class="flw">'+flowerSVG(p.fl)+'</div>'
    +'<p class="sm">'+e.n+(e.sub?', '+e.sub:'')+'</p><h2>'+p.name+'</h2><p class="sm">'+p.y+'</p>'
    +'<p class="ur nm" lang="ur" dir="rtl">'+p.ur+'</p><div id="mic"></div>'
    +'<div class="more"><details><summary>Notable works</summary><ul class="works sm">'+p.works.map(w=>'<li>'+w+'</li>').join('')+'</ul></details>'
    +'<details><summary>Biography</summary><p class="sm todo">Biography and links go here.</p></details>'
    +'<details><summary>The era</summary><p class="sm">'+e.span+'. '+e.desc+'</p>'
    +'<ul class="roll">'+POETS.filter(q=>q.era===p.era).map(q=>'<li><button class="who" data-p="'+q.id+'">'+flowerSVG(q.fl)+q.name+'</button></li>').join('')+'</ul></details></div>';
  renderMic();paint(e);
}

function setFocus(j){focus=j;cur=0;layout();renderDetail()}
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
  layout();
  switchTimer=setTimeout(()=>document.body.classList.remove('is-switching'),900);
}

$('#sw').onclick=()=>setMode(mode==='dial'?'timeline':'dial');
document.querySelectorAll('.sw [data-view]').forEach(b=>b.onclick=()=>setMode(b.dataset.view));
stage.addEventListener('keydown',e=>{
  const k=e.key;if(!['ArrowRight','ArrowDown','ArrowLeft','ArrowUp'].includes(k))return;
  e.preventDefault();step(k==='ArrowRight'||k==='ArrowDown'?1:-1);nodes[focus].focus();
});
document.addEventListener('click',e=>{
  const w=e.target.closest('.who');
  if(w){setFocus(POETS.findIndex(p=>p.id===w.dataset.p));scrollTo({top:0,behavior:'smooth'});return}
  const en=e.target.closest('#eranav button');
  if(en){setFocus(POETS.findIndex(p=>p.era===+en.dataset.era));return}
  if(e.target.closest('#irshad')){
    cur=(cur+1)%COUPLETS.filter(c=>c.p===POETS[focus].id).length;renderMic();return;
  }
  const b=e.target.closest('[data-act]');if(!b)return;
  if(b.dataset.act==='mukarrar'){ // repeat the couplet and show its meaning
    const cp=b.closest('.cp'),g=cp.querySelector('.gl'),t=cp.querySelector('.tr');
    g.hidden=!g.hidden;b.setAttribute('aria-expanded',!g.hidden);
    t.classList.remove('flash');void t.offsetWidth;t.classList.add('flash');
  }else{
    const id=b.dataset.id;WAH[id]=(WAH[id]||0)+1;b.querySelector('span').textContent=WAH[id];
    b.classList.remove('pop');void b.offsetWidth;b.classList.add('pop');
  }
});
addEventListener('resize',()=>layout(true));
$('#eranav').innerHTML=ERAS.map((e,k)=>'<button data-era="'+k+'">'+e.n+'</button>').join('');
layout(true);renderDetail();
