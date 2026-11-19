/* Content lives in data.js. This file is the engine. */
const $=s=>document.querySelector(s),N=POETS.length;
const stage=$('#stage'),poets=$('#poets'),sc=$('.scroller');
let focus=POETS.findIndex(p=>p.id==='mir'),mode='dial',cur=0;const WAH={};
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
  b.className='node';
  b.innerHTML='<span class="dot">'+flowerSVG(p.fl)+'</span><span class="lab">'+p.short+'<span class="yr"> '+p.b+'</span></span>';
  b.setAttribute('aria-label',p.name+', '+p.y);
  b.onclick=()=>setFocus(i);stage.append(b);return b;
});

// The dial is a C: poets sit on a 276-degree arc, open toward the content (right on desktop, down on phones).
function layout(instant){
  const cw=sc.clientWidth,mobile=cw<780,tl=mode==='timeline',off=mobile?90:0;
  if(instant)nodes.forEach(n=>n.classList.add('notrans'));
  poets.classList.toggle('stk',mobile||tl);poets.classList.toggle('tl',tl);
  const W=tl?Math.max(cw,900):cw;let H,R,cx,cy;
  if(tl){H=340;cy=170}
  else if(mobile){R=Math.min(cw/2-60,190);H=2*R+90;cx=cw/2;cy=R+45}
  else{H=Math.min(innerHeight*.82,720);R=Math.min(H/2-36,cw*.27);cx=Math.max(R+48,cw*.28);cy=H/2}
  stage.style.width=W+'px';stage.style.height=H+'px';
  $('#axis').style.top=cy+'px';
  $('#brk').style.cssText='left:'+W*.12+'px;top:'+(cy+10)+'px';
  if(!tl){
    const P=a=>(R+2+R*Math.cos(a*Math.PI/180)).toFixed(1)+','+(R+2+R*Math.sin(a*Math.PI/180)).toFixed(1);
    $('#arc').style.cssText='left:'+(cx-R-2)+'px;top:'+(cy-R-2)+'px;width:'+(2*R+4)+'px;height:'+(2*R+4)+'px';
    $('#arc').innerHTML='<path d="M'+P(-42+off)+' A'+R+' '+R+' 0 1 0 '+P(-318+off)+'"/>';
  }
  nodes.forEach((n,i)=>{
    if(tl){
      n.style.transform='translate(0px,'+cy+'px) rotate(0deg) translate('+yearX(POETS[i].b)*W+'px,'+[-76,0,76][i%3]+'px) rotate(0deg)';
    }else{
      const a=norm(-42+off-i*276/(N-1)),r=a*Math.PI/180;
      n.style.transform='translate('+cx+'px,'+cy+'px) rotate('+a+'deg) translate('+R+'px,0px) rotate('+-a+'deg)';
      n.style.setProperty('--ux',-Math.cos(r));n.style.setProperty('--uy',-Math.sin(r));
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

// Everything about the selected poet lives here, in the opening of the C.
function renderDetail(){
  const p=POETS[focus],e=ERAS[p.era];
  document.querySelectorAll('#eranav button').forEach((b,k)=>b.setAttribute('aria-current',k===p.era));
  $('#detail').innerHTML='<div class="flw">'+flowerSVG(p.fl)+'</div>'
    +'<p class="sm">'+e.n+(e.sub?', '+e.sub:'')+'</p><h2>'+p.name+'</h2><p class="sm">'+p.y+'</p>'
    +'<p class="ur nm" lang="ur" dir="rtl">'+p.ur+'</p><div id="mic"></div>'
    +'<h3>Notable works</h3><ul class="works sm">'+p.works.map(w=>'<li>'+w+'</li>').join('')+'</ul>'
    +'<p class="sm todo">Biography and links go here.</p>'
    +'<h3>'+e.n+'</h3><p class="sm">'+e.span+'. '+e.desc+'</p>'
    +'<ul class="roll">'+POETS.filter(q=>q.era===p.era).map(q=>'<li><button class="who" data-p="'+q.id+'">'+flowerSVG(q.fl)+q.name+'</button></li>').join('')+'</ul>';
  renderMic();paint(e);
}

function setFocus(j){focus=j;cur=0;layout();renderDetail()}
const step=d=>setFocus((focus+d+N)%N);

function setMode(v){
  mode=v;document.body.classList.toggle('is-tl',v==='timeline');
  $('#sw').setAttribute('aria-checked',v==='timeline');
  document.querySelectorAll('.sw [data-view]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.view===v));
  sc.scrollLeft=0;layout();
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
