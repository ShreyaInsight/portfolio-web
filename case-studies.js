/* Case-study interactions: same measured reveal/parallax timing as the reference. */
(() => {
 const main=document.querySelector('main.case-study-page');if(!main)return;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const ease=p=>{let lo=0,hi=1,t=p;for(let i=0;i<20;i++){t=(lo+hi)/2;const x=3*(1-t)*(1-t)*t*.16+3*(1-t)*t*t*.3+t*t*t;if(x<p)lo=t;else hi=t;}return 3*(1-t)*(1-t)*t+3*(1-t)*t*t+t*t*t;};
 if(!reduced){
  const metric=Array.from(main.querySelectorAll('a')).find(a=>a.textContent.includes('users served'))?.querySelector('span.relative.inline-block > span.absolute');
  if(metric){const total=Number(metric.textContent.replace(/,/g,''));if(Number.isFinite(total)){metric.textContent='0';const counter=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)return;counter.disconnect();const start=performance.now();const tick=now=>{const p=Math.min((now-start)/2500,1);metric.textContent=Math.floor((p===1?1:1-Math.pow(2,-12*p))*total).toLocaleString('en-US');if(p<1)requestAnimationFrame(tick);};requestAnimationFrame(tick);},{threshold:.35});counter.observe(metric);}}
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){observer.unobserve(e.target);gsap.to(e.target,{opacity:1,y:0,duration:.7,ease,clearProps:'opacity,transform'});}}),{rootMargin:'-12% 0px'});
  main.querySelectorAll('[data-case-reveal]').forEach(el=>{gsap.set(el,{opacity:0,y:18});observer.observe(el);});
  document.fonts.ready.then(()=>{main.querySelectorAll('[data-case-parallax]').forEach(el=>gsap.to(el,{yPercent:(1-.96)*30,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:true}}));ScrollTrigger.refresh();});
 }
 main.querySelectorAll('button[aria-label="Copy"]').forEach(button=>button.addEventListener('click',async()=>{
  const text=button.parentElement.nextElementSibling?.textContent;if(!text)return;
  const original=button.innerHTML;
  try{await navigator.clipboard.writeText(text);button.setAttribute('aria-label','Copied to clipboard');button.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m20 6-11 11-5-5"/></svg>Copied';setTimeout(()=>{button.innerHTML=original;button.setAttribute('aria-label','Copy');},1800);}catch{button.setAttribute('aria-label','Copy unavailable; select the citation text');}
 }));
})();
