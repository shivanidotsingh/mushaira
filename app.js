/* Content lives in data.js. This file is the engine. */
const $=s=>document.querySelector(s),N=POETS.length;
const stage=$('#stage'),poets=$('#poets'),sc=$('.scroller');
let focus=POETS.findIndex(p=>p.id==='ghalib'),mode='mushaira',dialRot=0;
let poemIdx=0,formOpen=false;
const norm=a=>((a+180)%360+360)%360-180;

function flowerSVG(f){
  const R=44,x=R*f.w;
  const d=f.s==='point'?'M0 0C'+x*1.6+' '+-R*.3+' '+x*1.6+' '+-R*.7+' 0 '+-R+'C'+-x*1.6+' '+-R*.7+' '+-x*1.6+' '+-R*.3+' 0 0Z'
    :f.s==='curl'?'M0 0C'+R*.5+' '+-R*.2+' '+R*.4+' '+-R*.85+' 0 '+-R+'C'+-R*.15+' '+-R*.6+' '+R*.2+' '+-R*.3+' 0 0Z'
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
    const isAct=i===focus&&mode==='mushaira';
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
  const cw=sc.clientWidth,mob=cw<768,tl=!mob&&mode==='timeline';
  if(instant)nodes.forEach(n=>n.classList.add('notrans'));
  document.body.classList.toggle('is-tl',tl);
  poets.classList.toggle('stk',tl);poets.classList.toggle('tl',tl);poets.classList.remove('v');

  const tlShift=tl?(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--tl-y'))||0):0;
  let H,R=0;const cx=cw/2;
  if(tl)H=200+Math.max(0,tlShift);
  else if(mob){H=Math.min(innerHeight*.73,475);R=Math.min(cw*.40,H*.40)}
  else{H=Math.min(innerHeight*.84,740);R=Math.min(cw*.38,H*.435)}

  const cy=tl?H/2+tlShift:Math.max(R+36,H*.52);
  stage.style.height=H+'px';
  $('#detail').style.setProperty('--hw',tl?'32rem':mob?(R*1.25)+'px':Math.min(544,R*1.45)+'px');
  $('#axis').style.cssText='left:0;right:0;top:'+(cy-tlShift)+'px';
  const arc=$('#arc');arc.setAttribute('viewBox','0 0 '+cw+' '+H);arc.style.cssText='width:'+cw+'px;height:'+H+'px';
  arc.innerHTML=tl?'':'<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'"/>';

  if(!tl)alignDial(instant);
  const A=tl?[]:baseAngles().map(a=>a+dialRot);

  nodes.forEach((n,i)=>{
    if(tl){
      const t=tpos(i);
      n.style.transform='translate(0px,'+cy+'px) rotate(0deg) translate('+(64+(cw-128)*t)+'px,0px) rotate(0deg)';
      n.style.setProperty('--ux',0);n.style.setProperty('--uy',0);
    }else{
      const a=A[i],r=a*Math.PI/180;
      n.style.transform='translate('+cx+'px,'+cy+'px) rotate('+a+'deg) translate('+R+'px,0px) rotate('+-a+'deg)';
      n.style.setProperty('--ux',Math.cos(r));n.style.setProperty('--uy',Math.sin(r));
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

function coupletBlockHTML(c){
  return '<div class="cp">'
    +'<p class="tr">'+c.tr.map(renderTrLine).join('')+'</p>'
    +'<p class="u" lang="ur" dir="rtl">'+c.ur.map(l=>'<span>'+esc(l)+'</span>').join('')+'</p>'
    +'</div>';
}

function poetCouplets(){
  return COUPLETS.filter(c=>c.p===POETS[focus].id);
}

function activePoem(){
  const cs=poetCouplets();
  if(!cs.length)return null;
  if(poemIdx>=cs.length)poemIdx=0;
  return cs[poemIdx];
}

function renderPoemDotsHTML(cs){
  if(!cs||cs.length<2)return '';
  return '<div class="poem-dots" role="tablist" aria-label="Poems">'
    +cs.map((_,idx)=>'<button type="button" class="poem-dot" data-poem="'+idx+'" aria-label="Poem '+(idx+1)+'" aria-current="'+(idx===poemIdx)+'"></button>').join('')
    +'</div>';
}

function renderFormPillHTML(c){
  if(mode!=='timeline'||!c||!c.form||typeof FORMS==='undefined'||!FORMS[c.form])return '';
  const f=FORMS[c.form];
  return '<li class="form-pill"><button type="button" data-form="'+esc(c.form)+'" aria-expanded="'+formOpen+'" title="Click to learn about '+esc(f.label)+'">'+esc(f.label)+'</button></li>';
}

function renderFormNoteHTML(c){
  if(mode!=='timeline'||!formOpen||!c||!c.form||typeof FORMS==='undefined'||!FORMS[c.form])return '';
  const f=FORMS[c.form];
  return '<p class="form-note"><strong>'+esc(f.label)+':</strong> '+esc(f.desc)+'</p>';
}

function renderCouplets(isTl){
  const cs=poetCouplets();
  if(!cs.length)return '<p class="sm todo">No couplets yet.</p>';
  const cur=activePoem()||cs[0];
  if(!isTl){
    return '<div class="cps">'+coupletBlockHTML(cur)+'</div>';
  }
  const list=(cur.expand&&Array.isArray(cur.expand.couplets)&&cur.expand.couplets.length)?cur.expand.couplets:[cur];
  return '<div class="cps">'+list.map(coupletBlockHTML).join('')+'</div>'+renderPoemDotsHTML(cs);
}

function renderWorkTag(w){
  if(w&&typeof w==='object'&&w.url){
    return '<li><a href="'+esc(w.url)+'" target="_blank" rel="noopener noreferrer">'+esc(w.title)+'</a></li>';
  }
  const label=w&&typeof w==='object'?w.title:w;
  return '<li>'+esc(label)+'</li>';
}

function renderBioCard(p){
  const card=$('#bio-card');
  if(!card)return;
  const c=activePoem();
  card.innerHTML='<div class="bio-poet">'+esc(p.name)+' <span class="h-yr">'+esc(p.y)+'</span></div>'
    +(p.bio?'<p class="bio">'+esc(p.bio)+'</p>':'')
    +'<ul class="tags">'+renderFormPillHTML(c)+p.works.map(renderWorkTag).join('')+'</ul>'
    +renderFormNoteHTML(c);
}

function renderDetail(){
  const p=POETS[focus],e=ERAS[p.era];
  document.querySelectorAll('#eranav button').forEach((b,k)=>b.setAttribute('aria-current',k===p.era));
  const isTl=mode==='timeline';
  $('#detail').innerHTML=renderCouplets(isTl)
    +'<h2>'+esc(p.name)+'</h2>'
    +'<p class="mob-note">View on desktop for the full experience</p>'
    +'<ul class="tags">'+p.works.map(renderWorkTag).join('')+'</ul>'
    +'<button class="unfold" type="button" aria-expanded="'+isTl+'" aria-label="'+(isTl?'Collapse back to circle':'Expand into timeline')+'">'
    +'<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 2.5v11M3.5 9.5 8 14l4.5-4.5"/></svg>'
    +'</button>';
  renderBioCard(p);
  paint(e);
}

function setFocus(j){
  if(j===focus)return;
  focus=j;
  poemIdx=0;
  formOpen=false;
  layout(false);
  syncNodeLabels();
  renderDetail();
}
const step=d=>setFocus((focus+d+N)%N);

function setMode(v){
  if(mode===v||innerWidth<768)return;
  mode=v;
  if(sc)sc.scrollLeft=0;
  layout(false);
  syncNodeLabels();
  renderDetail();
}

$('#detail').addEventListener('click',e=>{
  if(e.target.closest('.unfold')){
    setMode(mode==='mushaira'?'timeline':'mushaira');
    return;
  }
  const dot=e.target.closest('.poem-dot');
  if(dot){
    poemIdx=+dot.dataset.poem;
    renderDetail();
  }
});

$('#arc').addEventListener('click',()=>{
  if(mode==='mushaira')setMode('timeline');
});

$('#axis').addEventListener('click',()=>{
  if(mode==='timeline')setMode('mushaira');
});

let wheelAcc=0,wheelReset,wheelLockUntil=0;
window.addEventListener('wheel',e=>{
  if(innerWidth<768||Date.now()<wheelLockUntil)return;
  const dy=e.deltaY;
  if(mode==='mushaira'){
    if(dy<=0){wheelAcc=0;return;}
    wheelAcc+=dy;
    clearTimeout(wheelReset);
    wheelReset=setTimeout(()=>wheelAcc=0,180);
    if(wheelAcc>140){
      wheelAcc=0;
      wheelLockUntil=Date.now()+450;
      setMode('timeline');
    }
  }
},{passive:true});

document.addEventListener('keydown',e=>{
  const k=e.key;
  if(k==='ArrowRight'||k==='ArrowLeft'){
    e.preventDefault();
    step(k==='ArrowRight'?1:-1);
    nodes[focus].focus();
    return;
  }
  if(k==='ArrowDown'&&mode==='mushaira'&&innerWidth>=768){
    e.preventDefault();
    setMode('timeline');
    return;
  }
  if(k==='ArrowUp'&&mode==='timeline'&&innerWidth>=768){
    e.preventDefault();
    setMode('mushaira');
  }
});

document.addEventListener('click',e=>{
  const fb=e.target.closest('.form-pill button');
  if(fb){
    formOpen=!formOpen;
    renderDetail();
    return;
  }
  const en=e.target.closest('#eranav button');
  if(en){setFocus(POETS.findIndex(p=>p.era===+en.dataset.era))}
});

addEventListener('resize',()=>layout(true));
$('#eranav').innerHTML=ERAS.map((e,k)=>'<button data-era="'+k+'">'+e.n+'</button>').join('');
layout(true);syncNodeLabels();renderDetail();
