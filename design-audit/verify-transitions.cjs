const fs=require('fs'),{execFileSync}=require('child_process'),{props,mappings}=require('./transition-map.cjs');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
const run=(args,input)=>execFileSync(process.execPath,[cli,...args],{input,encoding:'utf8',timeout:60000,maxBuffer:20000000});
const ev=code=>JSON.parse(run(['eval','--stdin','--json'],code)).data.result;
const checks=[];
for(const page of ['index','projects','work','about','resume','contact'])for(const width of [1440,390]){
 run(['set','viewport',String(width),'900']);run(['open',`http://127.0.0.1:5500/${page}.html?transitions=${Date.now()}`]);
 const expected=mappings.map(([p,selector,match])=>({selector,styles:require(`./${p}-1440.json`).elements.find(match).styles}));
 const actual=ev(`(async()=>{await document.fonts.ready;await new Promise(r=>setTimeout(r,700));return ${JSON.stringify(expected.map(e=>e.selector))}.map(selector=>{const e=document.querySelector(selector);return e?{selector,styles:Object.fromEntries(${JSON.stringify(props)}.map(p=>[p,getComputedStyle(e).getPropertyValue(p)]))}:null}).filter(Boolean)})()`);
 const mismatches=actual.flatMap(a=>props.filter(p=>a.styles[p]!==expected.find(e=>e.selector===a.selector).styles[p]).map(p=>({selector:a.selector,property:p,actual:a.styles[p],expected:expected.find(e=>e.selector===a.selector).styles[p]})));
 checks.push({page,width,checked:actual.length*props.length,mismatches});console.log(`${page} ${width}: ${mismatches.length} transition mismatches`);
}
fs.writeFileSync('design-audit/transition-verification.json',JSON.stringify(checks,null,2));console.log(JSON.stringify(checks.filter(c=>c.mismatches.length),null,2));
