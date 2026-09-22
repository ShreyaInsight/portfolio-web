(async () => {
  await document.fonts.ready;
  const properties = ('display visibility position top right bottom left z-index width height min-width max-width min-height max-height box-sizing padding margin gap row-gap column-gap grid-template-columns grid-template-rows grid-auto-flow flex-direction flex-wrap flex-grow flex-shrink flex-basis order align-items justify-content align-self overflow overflow-x overflow-y color background-color background-image opacity filter backdrop-filter border-top-width border-right-width border-bottom-width border-left-width border-top-style border-top-color border-right-color border-bottom-color border-left-color border-radius box-shadow font-family font-size font-weight font-style line-height letter-spacing text-transform text-decoration text-align white-space transform transition-property transition-duration transition-timing-function transition-delay animation-name animation-duration animation-timing-function animation-delay animation-iteration-count animation-fill-mode scroll-behavior').split(' ');
  function selector(el) {
    if (el === document.documentElement) return 'html';
    if (el === document.body) return 'body';
    if (el.id) return '#' + CSS.escape(el.id);
    const parent = el.parentElement;
    return selector(parent) + ' > ' + el.tagName.toLowerCase() + ':nth-child(' + (Array.from(parent.children).indexOf(el)+1) + ')';
  }
  function styles(el, pseudo) { const s = getComputedStyle(el, pseudo); return Object.fromEntries(properties.map(k => [k,s.getPropertyValue(k)])); }
  const nodes = Array.from(document.querySelectorAll('body *')).filter(el => !el.closest('script,style,noscript,svg'));
  const elements = nodes.map(el => {
    const r=el.getBoundingClientRect();
    const component=el.closest('section,header,footer,main,nav');
    const record={selector:selector(el),tag:el.tagName.toLowerCase(),class:el.className,text:(el.innerText||'').trim().slice(0,180),directText:Array.from(el.childNodes).filter(n=>n.nodeType===3).map(n=>n.textContent.trim()).join(' ').trim(),component:component?selector(component):'body',rect:{x:r.x,y:r.y,width:r.width,height:r.height},styles:styles(el)};
    record.pseudo={};
    for(const p of ['::before','::after']) {const s=getComputedStyle(el,p);if(s.content!=='none'&&s.content!=='normal')record.pseudo[p]={content:s.content,...styles(el,p)};}
    return record;
  });
  const css=[],blocked=[];
  function walk(rules,context=[],sheet='') {for(const r of rules){css.push({sheet,context,selector:r.selectorText||null,type:r.constructor.name,text:r.cssText});if(r.cssRules)walk(r.cssRules,[...context,r.conditionText||r.name||r.constructor.name],sheet);}}
  for(const s of document.styleSheets){try{walk(s.cssRules,[],s.href||'inline')}catch(e){blocked.push({href:s.href,error:e.message})}}
  const root=getComputedStyle(document.documentElement);
  return {
    url:location.href,title:document.title,capturedAt:new Date().toISOString(),viewport:{width:innerWidth,height:innerHeight,dpr:devicePixelRatio},htmlClass:document.documentElement.className,
    rootVariables:Object.fromEntries(Array.from(root).filter(k=>k.startsWith('--')).map(k=>[k,root.getPropertyValue(k)])),body:styles(document.body),elements,css,blocked,
    fonts:Array.from(document.fonts).map(f=>({family:f.family,weight:f.weight,style:f.style,status:f.status,stretch:f.stretch})),
    images:Array.from(document.images).map(i=>({selector:selector(i),src:i.src,currentSrc:i.currentSrc,alt:i.alt,naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight,width:i.width,height:i.height,loading:i.loading})),
    svg:Array.from(document.querySelectorAll('svg')).map(el=>({selector:selector(el),class:el.getAttribute('class'),viewBox:el.getAttribute('viewBox'),width:getComputedStyle(el).width,height:getComputedStyle(el).height,stroke:getComputedStyle(el).stroke,strokeWidth:getComputedStyle(el).strokeWidth,html:el.outerHTML})),
    canvas:Array.from(document.querySelectorAll('canvas')).map(el=>({selector:selector(el),width:el.width,height:el.height,styles:styles(el)})),
    links:Array.from(document.querySelectorAll('link')).map(el=>({rel:el.rel,href:el.href,as:el.as,type:el.type})),
    scripts:Array.from(document.scripts).map(el=>({src:el.src,type:el.type,inline:el.src?null:el.textContent})),
    resources:performance.getEntriesByType('resource').map(r=>({url:r.name,type:r.initiatorType,transferSize:r.transferSize})),
    runtime:{nextData:!!window.__NEXT_DATA__,nextFlight:!!window.__next_f,next:window.next?{version:window.next.version}:null,lenisVersion:window.lenisVersion,lenisWindow:window.lenis?{type:typeof window.lenis,keys:Object.keys(window.lenis),options:window.lenis.options}:null},
    animations:document.getAnimations().map(a=>({target:a.effect?.target?selector(a.effect.target):null,timing:a.effect?.getTiming(),keyframes:a.effect?.getKeyframes(),playState:a.playState}))
  };
})()
