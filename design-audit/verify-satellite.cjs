const fs=require('fs'),cp=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
const run=(...args)=>cp.execFileSync(process.execPath,[cli,...args],{encoding:'utf8',timeout:60000,maxBuffer:20e6});
const ev=code=>JSON.parse(cp.execFileSync(process.execPath,[cli,'eval','--stdin','--json'],{input:code,encoding:'utf8',timeout:60000,maxBuffer:20e6})).data.result;
const results=[];
for(const path of ['index.html','projects.html','projects/satellite-crop-health-scanner/'])for(const width of [1440,390]){
 run('open',`http://127.0.0.1:5500/${path}?verify=${Date.now()}`);run('set','viewport',String(width),'900');run('wait','--load','load');run('snapshot','-i');
 const data=ev(`(async()=>{await document.fonts.ready;for(let y=0;y<document.body.scrollHeight;y+=500){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,70));}await new Promise(r=>setTimeout(r,700));const root=document;const internal=[];for(const a of root.querySelectorAll('a')){if(a.origin===location.origin&&!a.hash){try{const r=await fetch(a.href);if(!r.ok)internal.push({href:a.href,status:r.status});}catch(e){internal.push({href:a.href,error:e.message});}}}const crop=[...root.querySelectorAll('img')].filter(i=>i.alt.includes('Satellite Crop'));return {title:document.title,overflow:document.documentElement.scrollWidth>innerWidth,brokenImages:[...root.querySelectorAll('img')].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),brokenLinks:internal,staleATS:/ATS Screener|ats-screener|enterprise ATS/i.test(document.body.innerText),cropImages:crop.map(i=>({src:i.getAttribute('src'),naturalWidth:i.naturalWidth,naturalHeight:i.naturalHeight})),hidden:[...root.querySelectorAll('[data-case-reveal]')].filter(e=>getComputedStyle(e).opacity==='0').length};})()`);
 data.errors=JSON.parse(run('errors','--json')).data.errors;results.push({path,width,...data});console.log(JSON.stringify(results.at(-1)));
 if(path.includes('satellite-crop')){ev(`(async()=>{window.siteScroller.scrollTo(0,{immediate:true});await new Promise(r=>setTimeout(r,500));return true})()`);run('screenshot',`design-audit/satellite-${width}.png`,'--full');}
}
run('open','http://127.0.0.1:5500/projects/ats-screener/');run('wait','--url','**/projects/satellite-crop-health-scanner/');results.push({redirect:run('get','url').trim()});
fs.writeFileSync('design-audit/satellite-verification.json',JSON.stringify(results,null,2));
run('close');
if(results.some(r=>r.overflow||r.brokenImages?.length||r.brokenLinks?.length||r.staleATS||r.hidden||r.errors?.length||r.cropImages?.some(i=>!i.src.endsWith('Satellite Crop Health Scanner.png'))))process.exitCode=1;
