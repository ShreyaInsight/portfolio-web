const fs=require('fs'),cp=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
const run=(...args)=>cp.execFileSync(process.execPath,[cli,...args],{encoding:'utf8',timeout:60000,maxBuffer:20e6});
const ev=code=>JSON.parse(cp.execFileSync(process.execPath,[cli,'eval','--stdin','--json'],{input:code.replace('const r=await fetch(a.href);if(!r.ok)links.push(a.href);','try{const r=await fetch(a.href);if(!r.ok)links.push(a.href);}catch{links.push(a.href);}'),encoding:'utf8',timeout:60000,maxBuffer:20e6})).data.result;
const results=[];
for(const path of ['index.html','projects.html','projects/shreyadesk-ai/'])for(const width of [1440,390]){
 run('open',`http://127.0.0.1:5500/${path}?check=${Date.now()}`);run('set','viewport',String(width),'900');run('snapshot','-i');
 const data=ev(`(async()=>{await document.fonts.ready;for(let y=0;y<document.body.scrollHeight;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,90));}await new Promise(r=>setTimeout(r,1000));const links=[];for(const a of document.querySelectorAll('main a')){if(a.origin===location.origin&&!a.hash){const r=await fetch(a.href);if(!r.ok)links.push(a.href);}}return {title:document.title,overflow:document.documentElement.scrollWidth>innerWidth,brokenImages:[...document.querySelectorAll('main img')].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),staleBasalt:/basalt|NVIDIA|22072811/i.test(document.querySelector('main').innerText),brokenLinks:links,hidden:[...document.querySelectorAll('[data-case-reveal]')].filter(e=>getComputedStyle(e).opacity==='0').length};})()`);
 data.errors=JSON.parse(run('errors','--json')).data.errors;
 results.push({path,width,...data});console.log(JSON.stringify(results.at(-1)));
 if(path.includes('shreyadesk')){
  ev(`(async()=>{window.siteScroller.scrollTo(0,{immediate:true});await new Promise(r=>setTimeout(r,600));return true})()`);
  run('screenshot',`design-audit/shreyadesk-${width}.png`,'--full');
 }
}
run('open','http://127.0.0.1:5500/projects/basalt/');run('wait','--url','**/projects/shreyadesk-ai/');
results.push({redirect:run('get','url').trim()});
fs.writeFileSync('design-audit/shreyadesk-verification.json',JSON.stringify(results,null,2));
run('close');
if(results.some(r=>r.overflow||r.brokenImages?.length||r.staleBasalt||r.brokenLinks?.length||r.hidden||r.errors?.length))process.exitCode=1;
