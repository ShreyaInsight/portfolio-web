const fs=require('fs'),{execFileSync}=require('child_process'),{type,mappings}=require('./component-map.cjs');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
function run(args,input){return execFileSync(process.execPath,[cli,...args],{input,encoding:'utf8',timeout:60000,maxBuffer:20000000});}
const ev=code=>JSON.parse(run(['eval','--stdin','--json'],code)).data.result;
const checks=[];
for(const page of ['home','projects','work','about','resume','contact'])for(const width of [1440,1024,768,390]){
 run(['set','viewport',String(width),'900']);run(['open','http://127.0.0.1:5500/'+(page==='home'?'index':page)+'.html?verify='+Date.now()]);run(['mouse','move','1','1']);
 const reference=require(`./${page}-${width}.json`);
 const selected=mappings.filter(([p,s])=>p===page||(p==='home'&&/logo|footer|eyebrow/.test(s)));
 const expected=selected.map(([p,selector,match])=>({selector,styles:require(`./${p}-${width}.json`).elements.find(match)?.styles})).filter(e=>e.styles);
 const actual=ev(`(async()=>{await document.fonts.ready;await new Promise(r=>setTimeout(r,1300));return ${JSON.stringify(expected.map(e=>e.selector))}.map(selector=>{const el=document.querySelector(selector);return {selector,styles:el?Object.fromEntries(${JSON.stringify(type)}.map(p=>[p,getComputedStyle(el).getPropertyValue(p)])):null}})})()`);
 const mismatches=[];
 actual.forEach((a,i)=>{if(!a.styles)return;for(const p of type)if(a.styles[p]!==expected[i].styles[p])mismatches.push({selector:a.selector,property:p,expected:expected[i].styles[p],actual:a.styles[p]});});
 checks.push({page,width,mismatches,checked:actual.filter(a=>a.styles).length*type.length});
 console.log(page+' '+width+': '+mismatches.length+' typography mismatches');
}
fs.writeFileSync('design-audit/spec-verification.json',JSON.stringify(checks,null,2));
console.log(JSON.stringify(checks.filter(c=>c.mismatches.length),null,2));
