/* Content lives in data.js. This file is the engine. */
const $=s=>document.querySelector(s),N=POETS.length,STEP=360/N;
const stage=$('#stage'),norm=a=>((a+180)%360+360)%360-180;
let focus=2,mode='dial',cur=-1;const WAH={};
let ang=POETS.map((_,i)=>norm((i-focus)*STEP-90));
// Timeline x: 1253 sits at the far left; 1650-1960 fills the rest.
const yearX=y=>y<1400?.04:.13+(y-1650)/310*.84;

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
  b.innerHTML='<span class="dot">'+flowerSVG(p.fl)+'</span><span class="lab">'+p.short+'</span>';
  b.setAttribute('aria-label',p.name+', '+p.y);
  b.onclick=()=>setFocus(i);stage.append(b);return b;
});

function layout(){
  const tl=mode==='timeline',cw=stage.parentElement.clientWidth,H=stage.clientHeight;
  const W=tl?Math.max(cw,900):cw;
  stage.style.width=W+'px';
  const R=Math.min(W/2-90,H/2-30);
  stage.style.setProperty('--R',R+'px');
  $('#brk').style.left=W*.1+'px';
  nodes.forEach((n,i)=>{
    if(tl){
      n.style.transform='rotate(0deg) translate('+(yearX(POETS[i].b)*W-W/2)+'px,0px) rotate(0deg)';
      n.style.setProperty('--ly',['-3em','2.6em','4.6em'][i%3]);
    }else{
      const a=ang[i];
      n.style.transform='rotate('+a+'deg) translate('+R+'px,0px) rotate('+-a+'deg)';
      n.classList.toggle('l',Math.cos(a*Math.PI/180)<-.01);
    }
    const d=Math.min((i-focus+N)%N,(focus-i+N)%N);
    n.style.setProperty('--w',Math.max(300,900-d*90));
    n.setAttribute('aria-current',i===focus);
  });
}

function paint(o){document.body.style.setProperty('--bg',o.c);document.body.style.setProperty('--fg',o.f)}
const lines=a=>a.map(l=>'<span>'+l+'</span>').join('');
const pname=id=>POETS.find(p=>p.id===id).name;

// One couplet, used by the mic (small) and the Eras view (big).
function cpl(c,big){
  return '<div class="cp'+(big?' big':'')+'">'+(big?'<p class="by"><button class="who" data-p="'+c.p+'">'+pname(c.p)+'</button></p>':'')
    +'<p class="tr">'+lines(c.tr)+'</p><p class="u" lang="ur" dir="rtl">'+lines(c.ur)+'</p>'
    +'<div class="gl" hidden><p>'+c.en+'</p><p class="words">'+c.w.map(w=>'<span><b>'+w[0]+'</b> '+w[1]+'</span>').join('')+'</p></div>'
    +'<div class="acts"><button data-act="mukarrar" aria-expanded="false">Mukarrar</button>'
    +'<button data-act="wah" data-id="'+c.id+'">Wah! <span>'+(WAH[c.id]||0)+'</span></button></div></div>';
}

function renderMic(){
  const cs=COUPLETS.filter(c=>c.p===POETS[focus].id);
  $('#mic').innerHTML=!cs.length?'<p class="todo">No couplets yet.</p>'
    :cur<0?'<p class="todo">Say irshad to invite the first couplet.</p>':cpl(cs[cur]);
  $('#irshad').disabled=!cs.length;
}

function renderDetail(){
  const p=POETS[focus];
  $('#hubName').textContent=p.name;$('#hubYears').textContent=p.y;
  $('#detail').innerHTML='<h2>'+p.name+'</h2><p>'+p.y+'</p><p>'+ERAS[p.era].n+'</p>'
    +'<p class="ur" lang="ur" dir="rtl">'+p.ur+'</p><h3>Notable works</h3><ul>'
    +p.works.map(w=>'<li>'+w+'</li>').join('')+'</ul><p class="todo">Biography and links go here.</p>'
    +'<h3>At the mic</h3><div id="mic"></div><p><button class="irshad" id="irshad">Irshad</button></p>';
  renderMic();paint(ERAS[p.era]);
}

function setFocus(j){
  let d=(j-focus+N)%N;if(d>N/2)d-=N;
  ang=ang.map(a=>a-d*STEP);focus=j;cur=-1;
  layout();renderDetail();
}
const step=d=>setFocus((focus+d+N)%N);

function renderEras(){
  $('#eras').innerHTML=ERAS.map((e,k)=>{
    const ps=POETS.filter(p=>p.era===k),cs=COUPLETS.filter(c=>ps.some(p=>p.id===c.p));
    return '<section class="era" style="--bg:'+e.c+';--fg:'+e.f+'"><div class="in"><h2>'+e.n+'</h2><p class="span">'+e.span+'</p>'
      +(e.desc?'<p>'+e.desc+'</p>':'')
      +'<ul class="roll">'+ps.map(p=>'<li><button class="who" data-p="'+p.id+'">'+flowerSVG(p.fl)+p.name+'</button></li>').join('')+'</ul>'
      +(cs.length?cs.map(c=>cpl(c,true)).join(''):'<p class="todo">Couplets coming. Poets still in copyright get short excerpts and links.</p>')
      +'</div></section>';
  }).join('');
}

function setView(v){
  document.querySelectorAll('nav button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.view===v));
  $('#eras').hidden=v!=='eras';$('#poets').hidden=v==='eras';
  if(v==='eras'){renderEras();paint(ERAS[0]);return}
  if(v!==mode){
    if(v==='timeline'){ // settle angles to the shortest path, then unwind the circle into the line
      ang=ang.map(norm);nodes.forEach(n=>n.classList.add('notrans'));layout();
      void stage.offsetWidth;nodes.forEach(n=>n.classList.remove('notrans'));
    }else{
      ang=POETS.map((_,i)=>norm((i-focus)*STEP-90));
      $('#poets .scroller').scrollLeft=0;
    }
    mode=v;stage.classList.toggle('tl',v==='timeline');
  }
  layout();renderDetail();
}

document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>setView(b.dataset.view));
$('#prev').onclick=()=>step(-1);$('#next').onclick=()=>step(1);
stage.addEventListener('keydown',e=>{
  const k=e.key;if(!['ArrowRight','ArrowDown','ArrowLeft','ArrowUp'].includes(k))return;
  e.preventDefault();step(k==='ArrowRight'||k==='ArrowDown'?1:-1);nodes[focus].focus();
});
document.addEventListener('click',e=>{
  const w=e.target.closest('.who');
  if(w){setView(mode);setFocus(POETS.findIndex(p=>p.id===w.dataset.p));scrollTo(0,0);return}
  if(e.target.closest('#irshad')){
    const n=COUPLETS.filter(c=>c.p===POETS[focus].id).length;
    cur=(cur+1)%n;renderMic();return;
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
addEventListener('resize',layout);
layout();renderDetail();
