const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const cli = 'C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
function browser(...args) { return execFileSync(process.execPath, [cli, ...args], {encoding:'utf8',maxBuffer:64*1024*1024,timeout:90000}); }
function evaluate(fn) { const s=execFileSync(process.execPath,[cli,'eval','--stdin'],{input:`(${fn.toString()})()`,encoding:'utf8',maxBuffer:64*1024*1024,timeout:90000}); let result=JSON.parse(s); return typeof result==='string'?JSON.parse(result):result; }
function inspect() {
 const props='color background-color background-image opacity filter backdrop-filter font-family font-size font-weight line-height letter-spacing text-transform display position top right bottom left width height min-width max-width min-height max-height padding-top padding-right padding-bottom padding-left margin-top margin-right margin-bottom margin-left gap row-gap column-gap grid-template-columns grid-template-rows grid-auto-flow flex-direction flex-wrap align-items justify-content order border-top-width border-right-width border-bottom-width border-left-width border-top-style border-right-style border-bottom-style border-left-style border-top-color border-right-color border-bottom-color border-left-color border-top-left-radius border-top-right-radius border-bottom-right-radius border-bottom-left-radius box-shadow transform transition-property transition-duration transition-timing-function transition-delay animation-name animation-duration animation-timing-function animation-delay animation-iteration-count overflow-x overflow-y visibility'.split(' ');
 const selector=e=>e.id?'#'+e.id:(e.parentElement?selector(e.parentElement)+' > ':'')+e.tagName.toLowerCase()+':nth-child('+(Array.from(e.parentElement?.children||[]).indexOf(e)+1)+')';
 const style=(e,pseudo)=>Object.fromEntries(props.map(p=>[p,getComputedStyle(e,pseudo).getPropertyValue(p)]));
 const elements=[...document.querySelectorAll('body,body *')].filter(e=>!['SCRIPT','STYLE','PATH','G','DEFS','CLIPPATH','STOP'].includes(e.tagName.toUpperCase())).map(e=>({selector:selector(e),tag:e.tagName,class:e.getAttribute('class'),id:e.id,text:[...e.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent).join('').trim().slice(0,220),label:e.getAttribute('aria-label'),href:e.getAttribute('href'),rect: e.getBoundingClientRect().toJSON(),style:style(e),pseudos:['::before','::after'].map(p=>({pseudo:p,content:getComputedStyle(e,p).content,style:style(e,p)})).filter(p=>!['none','normal'].includes(p.content))}));
 const sheets=[...document.styleSheets].map(s=>{try{return {href:s.href,rules:[...s.cssRules].map(r=>r.cssText)}}catch(e){return {href:s.href,error:String(e)}}});
 const root=getComputedStyle(document.documentElement);
 return JSON.stringify({url:location.href,title:document.title,viewport:{width:innerWidth,height:innerHeight,dpr:devicePixelRatio},rootVariables:Object.fromEntries([...root].filter(p=>p.startsWith('--')).map(p=>[p,root.getPropertyValue(p)])),htmlClass:document.documentElement.className,lenisGlobals:Object.keys(window).filter(k=>/lenis/i.test(k)).map(k=>({key:k,type:typeof window[k],version:window[k]?.version})),elements,sheets,fonts:[...document.fonts].map(f=>({family:f.family,weight:f.weight,style:f.style,status:f.status})),images:[...document.images].map(e=>({src:e.currentSrc||e.src,alt:e.alt,naturalWidth:e.naturalWidth,naturalHeight:e.naturalHeight,width:e.width,height:e.height})),svgs:[...document.querySelectorAll('svg')].map(e=>({selector:selector(e),html:e.outerHTML,rect:e.getBoundingClientRect().toJSON(),strokeWidth:getComputedStyle(e).strokeWidth})),canvases:[...document.querySelectorAll('canvas')].map(e=>({width:e.width,height:e.height,rect:e.getBoundingClientRect().toJSON()})),scripts:[...document.scripts].map(e=>({src:e.src,text:e.src?undefined:e.textContent})),resources:performance.getEntriesByType('resource').map(r=>({name:r.name,type:r.initiatorType}))});
}
fs.mkdirSync(__dirname,{recursive:true});
for(const route of ['','projects','work','about','resume','contact']) {
 browser('open','https://www.sunnypatel.net/'+route);
 for(const width of [1440,1024,768,390]) {
  browser('set','viewport',String(width),'1000');
  evaluate(async()=>{await document.fonts.ready;window.scrollTo(0,0);await new Promise(r=>setTimeout(r,700));return JSON.stringify(true)});
  const data=evaluate(inspect); fs.writeFileSync(path.join(__dirname,`${route||'home'}-${width}.json`),JSON.stringify(data,null,2));
  console.log(`${route||'home'} ${width}: ${data.elements.length} elements, ${data.sheets.length} stylesheets`);
 }
}
