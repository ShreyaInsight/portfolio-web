const fs=require('fs'),cp=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
const run=(...a)=>cp.execFileSync(process.execPath,[cli,...a],{encoding:'utf8',timeout:60000,maxBuffer:20e6});
const ev=code=>JSON.parse(cp.execFileSync(process.execPath,[cli,'eval','--stdin','--json'],{input:code,encoding:'utf8',timeout:60000,maxBuffer:20e6})).data.result;
const props=['color','background-color','border-color','border-width','width','height','bottom','left','padding-top','padding-bottom','gap','font-family','font-size','line-height','transform','scale','transform-origin','opacity','transition-property','transition-duration','transition-timing-function','text-decoration-line','content'];
const targets=['projects','work','about','resume','contact','search'];
const selector=id=>id==='search'?'header nav button[aria-label="Search"]':`header nav a[href="/${id}"]`;
const results=[];
for(const route of ['/','/projects','/work','/about','/resume','/contact']){
 run('open','https://www.sunnypatel.net'+route);run('snapshot','-i');
 ev('document.fonts.ready.then(()=>true)');
 for(const id of route==='/'?targets:[route.slice(1),'search']){
  const sel=selector(id);
  const capture=`(()=>{const e=document.querySelector(${JSON.stringify(sel)});const read=(x,pseudo)=>{const s=getComputedStyle(x,pseudo);return {tag:x.tagName,class:x.getAttribute('class'),rect:x.getBoundingClientRect().toJSON(),styles:Object.fromEntries(${JSON.stringify(props)}.map(p=>[p,s.getPropertyValue(p)]))}};return {html:e.outerHTML,link:read(e),children:[...e.children].map(x=>({text:x.textContent,...read(x)})),before:read(e,'::before'),after:read(e,'::after'),premium:getComputedStyle(document.documentElement).getPropertyValue('--ease-premium')}})()`;
  run('mouse','move','1300','500');ev('new Promise(r=>setTimeout(r,400))');const before=ev(capture);
  run('hover',sel);ev('new Promise(r=>setTimeout(r,400))');const hover=ev(capture);
  results.push({route,id,before,hover});console.log(route,id,JSON.stringify({color:[before.link.styles.color,hover.link.styles.color],children:hover.children.map(c=>({text:c.text,bg:c.styles['background-color'],width:c.styles.width,scale:c.styles.scale}))}));
 }
}
fs.writeFileSync('design-audit/header-hover-exact.json',JSON.stringify(results,null,2));
const css=ev(`(()=>{const out=[];const walk=rules=>{for(const r of rules){if(r.cssRules)walk(r.cssRules);else if(r.selectorText&&(/scale-x|origin-left|bottom-0|transition-colors|transition-transform|hover.*(bone|ember)|duration-300/.test(r.selectorText)))out.push(r.cssText)}};for(const s of document.styleSheets){try{walk(s.cssRules)}catch{}}return out})()`);
fs.writeFileSync('design-audit/header-hover-rules.json',JSON.stringify(css,null,2));
run('close');
