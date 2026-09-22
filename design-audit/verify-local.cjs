const fs=require('fs'),path=require('path'),{execFileSync}=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
function run(args,input){return execFileSync(process.execPath,[cli,...args],{input,encoding:'utf8',timeout:60000,maxBuffer:20000000});}
const ev=code=>{for(let attempt=0;attempt<3;attempt++){try{return JSON.parse(run(['eval','--stdin','--json'],code)).data.result;}catch(error){if(attempt===2)throw error;}}};
const pages=process.argv.length>2?process.argv.slice(2):['index','projects','work','about','resume','contact'];
const report=pages.length<6&&fs.existsSync(path.join(__dirname,'local-verification.json'))?JSON.parse(fs.readFileSync(path.join(__dirname,'local-verification.json'),'utf8')).filter(row=>!pages.includes(row.page)):[];
for(const page of pages){
 for(const width of [1440,1024,768,390]){
  run(['set','viewport',String(width),'900']);run(['open','http://127.0.0.1:5500/'+page+'.html?verify='+Date.now()]);
  const data=ev(`(async()=>{await document.fonts.ready;await new Promise(r=>setTimeout(r,1200));const h=document.querySelector('h1'),s=getComputedStyle(h);const overflow=[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left< -1)&&getComputedStyle(e).position!=='fixed'&&!e.closest('.ember-glow,.cursor-dot,.cursor-ring')}).map(e=>e.tagName+'.'+e.className).slice(0,12);return {width:innerWidth,bodyWidth:document.body.scrollWidth,bg:getComputedStyle(document.body).backgroundColor,h1:{size:s.fontSize,font:s.fontFamily,line:s.lineHeight,weight:s.fontWeight},header:document.querySelector('header').getBoundingClientRect().height,overflow,scroller:!!window.siteScroller,canvas:!!document.querySelector('canvas'),brokenImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src)}})()`);
  data.page=page;
  if(width===1440||width===390){
   data.scroll=ev(`(async()=>{window.siteScroller.scrollTo(600,{immediate:true});window.dispatchEvent(new WheelEvent('wheel',{deltaY:-160,bubbles:true,cancelable:true}));await new Promise(r=>setTimeout(r,1800));const a=scrollY;await new Promise(r=>setTimeout(r,1000));return {first:a,second:scrollY,velocity:window.siteScroller.velocity||0}})()`);
   ev(`window.siteScroller.scrollTo(0,{immediate:true});true`);
   run(['screenshot',path.join(__dirname,'local-'+page+'-'+width+'.png')]);
  }
  report.push(data);console.log(JSON.stringify(data));
 }
}
fs.writeFileSync(path.join(__dirname,'local-verification.json'),JSON.stringify(report,null,2));
if(report.some(row=>row.bodyWidth>row.width||row.overflow.length||row.brokenImages.length||!row.scroller||(row.scroll&&row.scroll.first!==row.scroll.second)))process.exitCode=1;
