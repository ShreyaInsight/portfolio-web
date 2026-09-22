const fs=require('node:fs');
const path=require('node:path');
const {execFileSync}=require('node:child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
function run(args,input){const out=execFileSync(process.execPath,[cli,...args],{input,encoding:'utf8',maxBuffer:64*1024*1024,timeout:90000});return out;}
const extract=fs.readFileSync(path.join(__dirname,'extract.js'),'utf8');
for(const page of ['home','projects','work','about','resume','contact']){
 run(['open','https://www.sunnypatel.net/'+(page==='home'?'':page)]);
 for(const width of [1440,1024,768,390]){
  run(['set','viewport',String(width),'900']);
  // Trigger lazy content and entrance animations before recording settled styles.
  run(['eval','--stdin'],`(async()=>{for(let y=0;y<document.documentElement.scrollHeight;y+=700){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,80))}window.scrollTo(0,0);await new Promise(r=>setTimeout(r,1800));return true})()`);
  const output=JSON.parse(run(['eval','--stdin','--json'],extract));
  if(!output.success)throw new Error(JSON.stringify(output));
  const result=output.data.result;
  fs.writeFileSync(path.join(__dirname,`${page}-${width}.json`),JSON.stringify(result,null,2));
  if(width===1440||width===390)run(['screenshot',path.join(__dirname,`${page}-${width}.png`),'--full']);
  console.log(`${page} ${width}: ${result.elements.length} elements; ${result.css.length} CSS rules`);
 }
}
