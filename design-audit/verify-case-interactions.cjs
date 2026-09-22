const fs=require('fs'),cp=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
const run=(...args)=>cp.execFileSync(process.execPath,[cli,...args],{encoding:'utf8',timeout:60000,maxBuffer:20e6});
const ev=code=>JSON.parse(cp.execFileSync(process.execPath,[cli,'eval','--stdin','--json'],{input:code,encoding:'utf8',timeout:60000,maxBuffer:20e6})).data.result;
const results=[];
for(const slug of ['basalt','ats-screener','sunnify','axelot','netdash','knifethrow','research']){
 run('set','viewport','390','900');run('open',`http://127.0.0.1:5500/${slug==='research'?'research':'projects/'+slug}/?interaction=${Date.now()}`);run('wait','--load','load');run('snapshot','-i');
 const result=ev(`(async()=>{const sleep=ms=>new Promise(r=>setTimeout(r,ms));await document.fonts.ready;await sleep(1100);const main=document.querySelector('main');const brokenLinks=[];for(const a of main.querySelectorAll('a')){if(a.origin===location.origin){const r=await fetch(a.href);if(!r.ok)brokenLinks.push({href:a.href,status:r.status});}}document.querySelector('[data-menu-toggle]').click();await sleep(400);const menuOpen=document.querySelector('[data-mobile-menu]').getBoundingClientRect().height;document.querySelector('[data-menu-toggle]').click();await sleep(400);const menuClosed=document.querySelector('[data-mobile-menu]').inert;for(let y=0;y<document.body.scrollHeight;y+=500){window.siteScroller.scrollTo(y,{immediate:true});await sleep(80);}await sleep(1000);const hidden=Array.from(main.querySelectorAll('[data-case-reveal]')).filter(e=>getComputedStyle(e).opacity!=='1').length;window.siteScroller.scrollTo(900,{immediate:true});await sleep(200);return {brokenLinks,menuOpen,menuClosed,hidden,overflow:document.documentElement.scrollWidth>innerWidth,base:document.baseURI};})()`);
 run('mouse','move','190','450');
 run('mouse','wheel','-300');
 result.scroll=ev(`(async()=>{await new Promise(r=>setTimeout(r,1500));const first=scrollY;await new Promise(r=>setTimeout(r,1000));return {first,second:scrollY,velocity:window.siteScroller.velocity};})()`);
 if(slug==='basalt'||slug==='research'){
  const copyRef=run('snapshot','-i').match(/button "Copy" \[ref=(e\d+)\]/)?.[1];
  if(!copyRef)throw new Error('Citation copy button missing');
  run('click','@'+copyRef);
  result.copy=ev(`(async()=>{const button=document.querySelector('main button');await new Promise(r=>setTimeout(r,100));const copied=button.getAttribute('aria-label');await new Promise(r=>setTimeout(r,1800));return {copied,reset:button.getAttribute('aria-label')};})()`);
 }
 if(slug==='basalt'||slug==='research'){
  run('set','media','dark','reduced-motion');run('reload');run('snapshot','-i');
  result.reduced=ev(`({requested:matchMedia('(prefers-reduced-motion: reduce)').matches,splitLines:document.querySelectorAll('.reveal-line').length,hidden:Array.from(document.querySelectorAll('[data-case-reveal]')).filter(e=>getComputedStyle(e).opacity==='0').length})`);
  run('set','media','dark','no-preference');
 }
 result.slug=slug;result.errors=JSON.parse(run('errors','--json')).data.errors;results.push(result);console.log(JSON.stringify(result));
}
fs.writeFileSync('design-audit/case-studies/interactions.json',JSON.stringify(results,null,2));
