const fs=require('fs'),{execFileSync}=require('child_process');const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
function run(args,input){return execFileSync(process.execPath,[cli,...args],{input,encoding:'utf8',timeout:60000,maxBuffer:20000000});}
const ev=code=>JSON.parse(run(['eval','--stdin','--json'],code)).data.result;
const result={};
run(['set','viewport','1440','900']);run(['open','http://127.0.0.1:5500/?motion='+Date.now()]);
ev(`window.siteScroller.scrollTo(900,{immediate:true});true`);run(['mouse','move','900','450']);run(['mouse','wheel','-300']);
result.wheel=ev(`(async()=>{await new Promise(r=>setTimeout(r,1800));const first=scrollY;await new Promise(r=>setTimeout(r,1500));return {first,second:scrollY,velocity:window.siteScroller.velocity}})()`);
run(['scrollintoview','.project']);run(['hover','.project']);
result.hover=ev(`(async()=>{await new Promise(r=>setTimeout(r,1000));const s=getComputedStyle(document.querySelector('.preview-image'));return {transform:s.transform,duration:s.transitionDuration,ease:s.transitionTimingFunction}})()`);
run(['set','viewport','390','900']);
result.resize=ev(`(async()=>{await new Promise(r=>setTimeout(r,1400));window.siteScroller.scrollTo(0,{immediate:true});return {overflow:document.documentElement.scrollWidth>innerWidth,h1:getComputedStyle(document.querySelector('h1')).fontSize,lines:document.querySelectorAll('h1 .reveal-line').length}})()`);
run(['set','media','dark','reduced-motion']);run(['open','http://127.0.0.1:5500/?reduced='+Date.now()]);
result.reduced=ev(`(async()=>{await new Promise(r=>setTimeout(r,1000));return {preference:matchMedia('(prefers-reduced-motion: reduce)').matches,lenis:document.documentElement.classList.contains('lenis'),cursor:!!document.querySelector('.cursor-ring'),splitLines:document.querySelectorAll('.reveal-line').length,terminal:[...document.querySelectorAll('[data-typing-row]')].every(e=>e.textContent===e.dataset.typingRow),hidden:[...document.querySelectorAll('.project,h1')].some(e=>getComputedStyle(e).opacity==='0')}})()`);
run(['set','media','dark','no-preference']);
fs.writeFileSync('design-audit/motion-verification.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));
