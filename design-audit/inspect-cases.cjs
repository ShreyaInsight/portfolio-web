const fs=require('fs'),cp=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
function run(...args){return cp.execFileSync(process.execPath,[cli,...args],{encoding:'utf8',timeout:60000,maxBuffer:40e6});}
function evaluate(code){return JSON.parse(cp.execFileSync(process.execPath,[cli,'eval','--stdin','--json'],{input:code,encoding:'utf8',timeout:60000,maxBuffer:40e6})).data.result;}
const links=evaluate(`Array.from(document.querySelectorAll('main a')).map(a=>({text:a.innerText,href:a.href})).filter(a=>a.href.includes('/projects/')||a.text.includes('Read the case study'))`);
fs.mkdirSync('design-audit/case-studies',{recursive:true});
fs.writeFileSync('design-audit/case-studies/index-links.json',JSON.stringify(links,null,2));
const extract=fs.readFileSync('design-audit/extract.js','utf8');
for(const url of [...new Set(links.map(a=>a.href))]){
 const slug=url.split('/').pop();
 for(const width of [1440,1024,768,390]){
  run('set','viewport',String(width),'900');run('open',url);run('snapshot','-i');
  evaluate(`(async()=>{await document.fonts.ready;for(let y=0;y<document.body.scrollHeight;y+=650){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,100));}await new Promise(r=>setTimeout(r,1000));window.scrollTo(0,0);await new Promise(r=>setTimeout(r,800));return true})()`);
  const data=evaluate(extract);data.main=evaluate(`({html:document.querySelector('main').outerHTML,text:document.querySelector('main').innerText,links:Array.from(document.querySelectorAll('main a')).map(a=>({text:a.innerText,href:a.href}))})`);
  fs.writeFileSync(`design-audit/case-studies/${slug}-${width}.json`,JSON.stringify(data,null,2));
  console.log(slug,width,data.images.length,data.main.text.length);
 }
}
