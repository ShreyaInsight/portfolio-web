const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
function run(args,input){return execFileSync(process.execPath,[cli,...args],{input,encoding:'utf8',timeout:60000,maxBuffer:20000000});}
const ev=code=>{for(let attempt=0;attempt<3;attempt++){try{return JSON.parse(run(['eval','--stdin','--json'],code)).data.result;}catch(error){if(attempt===2)throw error;}}};
const report={};
run(['set','viewport','390','900']);run(['open','http://127.0.0.1:5500/?verify='+Date.now()]);
run(['find','role','button','click','--name','Open menu']);
report.menu=ev(`(async()=>{await new Promise(r=>setTimeout(r,400));const menu=document.querySelector('.mobile-menu');return {height:menu.getBoundingClientRect().height,width:menu.getBoundingClientRect().width,expanded:document.querySelector('[data-menu-toggle]').getAttribute('aria-expanded'),inert:menu.inert}})()`);
run(['screenshot',path.join(__dirname,'local-menu-open.png')]);
run(['press','Escape']);
report.menuClosed=ev(`(async()=>{await new Promise(r=>setTimeout(r,400));return {height:document.querySelector('.mobile-menu').getBoundingClientRect().height,inert:document.querySelector('.mobile-menu').inert}})()`);
run(['set','viewport','1440','900']);run(['find','role','button','click','--name','Search','--exact']);
run(['find','label','Search pages','fill','resume']);
report.search=ev(`({dialog:!!document.querySelector('[role=dialog]'),results:[...document.querySelectorAll('.command-results a')].map(a=>a.textContent),focused:document.activeElement.className})`);
run(['press','Escape']);report.searchClosed=ev(`!document.querySelector('[role=dialog]')`);
report.pages=[];
for(const page of ['index','projects','work','about','resume','contact']){
 run(['errors','--clear']);run(['open','http://127.0.0.1:5500/'+page+'.html?verify='+Date.now()]);
 const content=ev(`(async()=>{await document.fonts.ready;for(let y=0;y<document.documentElement.scrollHeight;y+=650){window.siteScroller.scrollTo(y,{immediate:true});await new Promise(r=>setTimeout(r,120));}await new Promise(r=>setTimeout(r,1100));return {page:location.pathname,hiddenContent:[...document.querySelectorAll('h1,h2,.project,.experience-entry,.contact-form')].filter(e=>getComputedStyle(e).opacity==='0').map(e=>e.className),brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)}})()`);
 content.errors=JSON.parse(run(['errors','--json'])).data.errors;report.pages.push(content);
 run(['screenshot',path.join(__dirname,'local-full-'+page+'.png'),'--full']);
}
fs.writeFileSync(path.join(__dirname,'local-interactions.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
