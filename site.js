(() => {
 'use strict';
 if(window.siteInitialized) return;
 window.siteInitialized=true;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 gsap.registerPlugin(ScrollTrigger,SplitText);
 const scroller=createSmoothScroller();
 // The reference Motion easing, expressed as an exact cubic-bezier evaluator.
 const revealEase=p=>{let lo=0,hi=1,t=p;for(let i=0;i<20;i++){t=(lo+hi)/2;const x=3*(1-t)*(1-t)*t*.16+3*(1-t)*t*t*.3+t*t*t;if(x<p)lo=t;else hi=t;}return 3*(1-t)*(1-t)*t+3*(1-t)*t*t+t*t*t;};
 const header=document.querySelector('.site-header'),toggle=document.querySelector('[data-menu-toggle]'),menu=document.querySelector('[data-mobile-menu]');
 let menuOpen=false;
 const content=document.createElement('div'),inner=document.createElement('div');
 content.className='mobile-menu-content';inner.className='mobile-menu-inner';
 while(menu.firstChild) content.append(menu.firstChild);
 inner.append(content);menu.append(inner);menu.hidden=false;menu.inert=true;
 function setMenu(open){menuOpen=open;header.classList.toggle('is-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');menu.inert=!open;}
 toggle.addEventListener('click',()=>setMenu(!menuOpen));
 menu.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false);});
 document.addEventListener('click',e=>{if(menuOpen&&!header.contains(e.target))setMenu(false);});
 matchMedia('(min-width:768px)').addEventListener('change',e=>{if(e.matches)setMenu(false);});
 const current=/\/(?:projects\/|research\/)/.test(location.pathname)?'projects.html':location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.nav a,.mobile-menu a').forEach(a=>{a.removeAttribute('aria-current');if(a.getAttribute('href')===current){a.setAttribute('aria-current','page');a.classList.add('is-active');}});
 function scrollState(){header.classList.toggle('is-scrolled',scrollY>12);document.querySelector('.scroll-top')?.classList.toggle('visible',scrollY>500);}
 window.addEventListener('scroll',scrollState,{passive:true});scrollState();
 document.querySelectorAll('[data-scroll-top]').forEach(b=>b.addEventListener('click',()=>scroller.scrollTo(0)));
 document.querySelector('[data-scroll-projects]')?.addEventListener('click',()=>scroller.scrollTo('#projects'));
 document.querySelector('main')?.classList.add('page-enter');
 document.querySelector('.ember-glow')?.classList.add('is-visible');
 const destinations=[['Home','index.html'],['Projects','projects.html'],['Work','work.html'],['About','about.html'],['Résumé','resume.html'],['Contact','contact.html']];
 let overlay,previousFocus;
 function closeSearch(){if(!overlay)return;overlay.remove();overlay=null;scroller.start();previousFocus?.focus();}
 function openSearch(){
  if(overlay)return closeSearch();setMenu(false);previousFocus=document.activeElement;
  overlay=document.createElement('div');overlay.className='command-overlay';
  overlay.innerHTML='<section class="command-panel" role="dialog" aria-modal="true" aria-label="Search pages"><input class="command-input" aria-label="Search pages" placeholder="Search pages…" autocomplete="off"><div class="command-results"></div><div class="command-hint">↑ ↓ navigate · enter open · esc close</div></section>';
  document.body.append(overlay);scroller.stop();
  const input=overlay.querySelector('input'),results=overlay.querySelector('.command-results');let selected=0;
  const normalize=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  function render(){const items=destinations.filter(([name,url])=>normalize(name+' '+url).includes(normalize(input.value)));selected=Math.max(0,Math.min(selected,items.length-1));results.replaceChildren(...items.map(([name,url],i)=>{const a=document.createElement('a');a.href=url;a.textContent=name;a.classList.toggle('is-selected',i===selected);return a;}));if(!items.length)results.textContent='No pages found.';}
  input.addEventListener('input',()=>{selected=0;render();});
  overlay.addEventListener('click',e=>{if(e.target===overlay)closeSearch();});
  overlay.addEventListener('keydown',e=>{const links=[...results.querySelectorAll('a')];if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();selected=(selected+(e.key==='ArrowDown'?1:-1)+links.length)%(links.length||1);render();}if(e.key==='Enter'&&e.target===input&&links[selected]){e.preventDefault();links[selected].click();}if(e.key==='Tab'){const focusable=[input,...links],i=focusable.indexOf(document.activeElement);e.preventDefault();focusable[(i+(e.shiftKey?-1:1)+focusable.length)%focusable.length].focus();}});
  render();input.focus();
 }
 document.querySelectorAll('.search').forEach(b=>b.addEventListener('click',openSearch));
 document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openSearch();}if(e.key==='Escape'){closeSearch();if(menuOpen){setMenu(false);toggle.focus();}}});
 // Fixed row heights keep the repeating terminal animation from changing scroll geometry.
 const rows=[...document.querySelectorAll('[data-typing-row]')];
 const nodes=rows.map(row=>{const node=document.createTextNode('');row.prepend(node);return node;});
 if(reduced)rows.forEach((row,i)=>nodes[i].textContent=row.dataset.typingRow);
 else if(rows.length){let row=0,character=0;const cursor=document.querySelector('.session .cursor');function type(){if(document.hidden){setTimeout(type,250);return;}if(cursor)rows[row].append(cursor);nodes[row].textContent=rows[row].dataset.typingRow.slice(0,++character);if(character>=rows[row].dataset.typingRow.length){row++;character=0;if(row===rows.length){setTimeout(()=>{row=0;nodes.forEach(n=>n.textContent='');type();},2800);return;}}setTimeout(type,34);}type();}
 if(!reduced){
  document.fonts.ready.then(()=>{
   document.querySelectorAll('h1,.work-heading,.cta-title').forEach(el=>SplitText.create(el,{type:'lines',mask:'lines',autoSplit:true,linesClass:'reveal-line',onSplit:split=>gsap.from(split.lines,{yPercent:110,opacity:0,duration:.9,ease:'power3.out',stagger:.08,scrollTrigger:{trigger:el,start:'top 85%',once:true}})}));
   const reveals=document.querySelectorAll('.project,.capability-row,.currently-content,.detail-project,.research-card,.more-work-card,.experience-entry,.credentials-grid,.profile-column,.bio-copy,.tools-grid,.resume-preview-panel,.contact-intro,.contact-form');
   const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){revealObserver.unobserve(entry.target);gsap.to(entry.target,{opacity:1,y:0,duration:.7,ease:revealEase,clearProps:'opacity,transform'});}}),{rootMargin:'-12% 0px'});
   reveals.forEach(el=>{gsap.set(el,{opacity:0,y:18});revealObserver.observe(el);});
   ScrollTrigger.refresh();
  });
  if(matchMedia('(pointer:fine)').matches){
   const dot=document.createElement('div'),ring=document.createElement('div');dot.className='cursor-dot';ring.className='cursor-ring';document.body.append(dot,ring);gsap.set([dot,ring],{xPercent:-50,yPercent:-50,x:-100,y:-100});
   const dx=gsap.quickTo(dot,'x',{duration:.12,ease:'power3.out'}),dy=gsap.quickTo(dot,'y',{duration:.12,ease:'power3.out'}),rx=gsap.quickTo(ring,'x',{duration:.4,ease:'power3.out'}),ry=gsap.quickTo(ring,'y',{duration:.4,ease:'power3.out'});
   document.addEventListener('pointermove',e=>{document.body.classList.add('cursor-active');dx(e.clientX);dy(e.clientY);rx(e.clientX);ry(e.clientY);});
   document.addEventListener('pointerover',e=>{const active=!!e.target.closest('a,button,input,textarea');gsap.to(ring,{scale:active?1.8:1,opacity:active?1:.55,duration:.3,ease:'power3.out'});});
   document.documentElement.addEventListener('pointerleave',()=>document.body.classList.remove('cursor-active'));
   document.querySelectorAll('.work-button,.touch,.cta-button,.resume-download,.send-button').forEach(el=>{const x=gsap.quickTo(el,'x',{duration:.6,ease:'elastic.out(1,.4)'}),y=gsap.quickTo(el,'y',{duration:.6,ease:'elastic.out(1,.4)'});el.addEventListener('pointermove',e=>{const r=el.getBoundingClientRect();x((e.clientX-r.left-r.width/2)*.35);y((e.clientY-r.top-r.height/2)*.35);});el.addEventListener('pointerleave',()=>{x(0);y(0);});});
  }
 }
 const count=document.querySelector('.stats-list b');
 if(count&&!reduced){const total=Number(count.textContent.replace(/,/g,''));if(Number.isFinite(total)){const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)return;observer.disconnect();const start=performance.now();function tick(now){const p=Math.min(1,(now-start)/2500);count.textContent=Math.round(total*(p===1?1:1-Math.pow(2,-12*p))).toLocaleString('en-US');if(p<1)requestAnimationFrame(tick);}requestAnimationFrame(tick);},{threshold:.35});observer.observe(count);}}
 document.querySelectorAll('.footer-control').forEach(button=>button.addEventListener('click',()=>{const name=button.getAttribute('aria-label')||'';if(name.includes('top'))scroller.scrollTo(0);else{const i=destinations.findIndex(([,url])=>url===current);location.href=destinations[(i+(name.includes('Previous')?-1:1)+destinations.length)%destinations.length][1];}}));
 document.querySelector('#contact-form')?.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);location.href=`mailto:cshreya2005@gmail.com?subject=${encodeURIComponent('Contact from '+data.get('name'))}&body=${encodeURIComponent('Name: '+data.get('name')+'\nEmail: '+data.get('email')+'\n\n'+data.get('message'))}`;});
})();
