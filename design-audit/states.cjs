const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
const run=(args,input)=>execFileSync(process.execPath,[cli,...args],{input,encoding:'utf8',maxBuffer:64*1024*1024,timeout:60000});
const extract=fs.readFileSync(path.join(__dirname,'extract.js'),'utf8');
const capture=name=>{const d=JSON.parse(run(['eval','--stdin','--json'],extract));fs.writeFileSync(path.join(__dirname,name+'.json'),JSON.stringify(d.data.result,null,2))};
capture('mobile-menu-open');
run(['press','Escape']);
run(['set','viewport','1440','900']);
run(['open','https://www.sunnypatel.net/']);
run(['scroll','down','500']);
capture('header-scrolled');
run(['scroll','up','500']);
const hovers=[];
const sample=JSON.parse(fs.readFileSync(path.join(__dirname,'home-1440.json')));
for(const el of sample.elements.filter(e=>e.class.includes('hover:')&&['a','button'].includes(e.tag)).filter((e,i,a)=>a.findIndex(x=>x.class===e.class)===i)){
 try{run(['hover',el.selector]);run(['eval','--stdin'], 'new Promise(r=>setTimeout(()=>r(true),650))');const js=`(()=>{const e=document.querySelector(${JSON.stringify(el.selector)});const s=getComputedStyle(e);return {selector:${JSON.stringify(el.selector)},text:e.innerText,class:e.className,styles:Object.fromEntries(['color','background-color','border-color','transform','translate','box-shadow','transition-property','transition-duration','transition-timing-function'].map(k=>[k,s.getPropertyValue(k)]))}})()`;hovers.push(JSON.parse(run(['eval','--stdin','--json'],js)).data.result)}catch(e){hovers.push({selector:el.selector,error:String(e)})}
}
fs.writeFileSync(path.join(__dirname,'hover-states.json'),JSON.stringify(hovers,null,2));
console.log('Captured menu, scrolled header, and '+hovers.length+' distinct hover classes.');
