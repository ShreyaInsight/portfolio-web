const fs=require('fs'),{execFileSync}=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
if(process.argv[2]==='header'){
 for(const args of [['press','Escape'],['set','viewport','1440','900'],['open','https://www.sunnypatel.net/'],['scroll','down','500']])execFileSync(process.execPath,[cli,...args]);
 execFileSync(process.execPath,[cli,'eval','--stdin'],{input:'new Promise(r=>setTimeout(()=>r(true),1000))'});
}
const out=JSON.parse(execFileSync(process.execPath,[cli,'eval','--stdin','--json'],{input:fs.readFileSync(__dirname+'/extract.js','utf8'),encoding:'utf8',maxBuffer:64*1024*1024}));
fs.writeFileSync(__dirname+'/'+(process.argv[2]==='header'?'header-scrolled':'mobile-menu-open')+'.json',JSON.stringify(out.data.result,null,2));
console.log(out.data.result.elements.filter(e=>e.selector==='#mobile-menu').map(e=>({rect:e.rect,styles:e.styles})));
