const fs=require('fs'),cp=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
const run=(...args)=>cp.execFileSync(process.execPath,[cli,...args],{encoding:'utf8',timeout:60000,maxBuffer:40e6});
const ev=code=>JSON.parse(cp.execFileSync(process.execPath,[cli,'eval','--stdin','--json'],{input:code,encoding:'utf8',timeout:60000,maxBuffer:40e6})).data.result;
const report=process.argv.slice(2).length&&fs.existsSync('design-audit/case-studies/verification.json')?JSON.parse(fs.readFileSync('design-audit/case-studies/verification.json')).filter(r=>!process.argv.slice(2).includes(r.slug)):[];
const slugs=process.argv.slice(2).length?process.argv.slice(2):['basalt','ats-screener','sunnify','axelot','netdash','knifethrow','research'];
for(const slug of slugs)for(const width of [1440,1024,768,390]){
 const ref=JSON.parse(fs.readFileSync(`design-audit/case-studies/${slug}-${width}.json`));
 run('set','viewport',String(width),'900');run('open',`http://127.0.0.1:5500/${slug==='research'?'research':'projects/'+slug}/?verify=${Date.now()}`);run('snapshot','-i');
 ev(`(async()=>{await document.fonts.ready;for(let y=0;y<document.body.scrollHeight;y+=600){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,80));}await new Promise(r=>setTimeout(r,1100));window.scrollTo(0,0);await new Promise(r=>setTimeout(r,1100));return true})()`);
 const props=['color','background-color','font-family','font-size','font-weight','line-height','letter-spacing','padding','margin','gap','border-radius','border-top-width','border-top-color','max-width','grid-template-columns','display'];
 const expected=ref.elements.filter(e=>e.selector.startsWith('#main-content')&&!e.class.includes('reveal-line')).map(e=>({selector:e.selector,styles:Object.fromEntries(props.map(p=>[p,e.styles[p]]))}));
 const data=ev(`(()=>{const expected=${JSON.stringify(expected)},diff=[];let checks=0;for(const e of expected){const el=document.querySelector(e.selector);if(!el){diff.push({selector:e.selector,missing:true});continue;}const s=getComputedStyle(el);for(const [p,v]of Object.entries(e.styles)){checks++;if(s.getPropertyValue(p)!==v)diff.push({selector:e.selector,property:p,expected:v,actual:s.getPropertyValue(p)});}}return {checks,diff,overflow:document.documentElement.scrollWidth>innerWidth,brokenImages:Array.from(document.querySelectorAll('main img')).filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),text:document.querySelector('main').innerText,links:Array.from(document.querySelectorAll('main a')).map(a=>({text:a.innerText,href:a.href}))}})()`);
 data.slug=slug;data.width=width;data.errors=JSON.parse(run('errors','--json')).data.errors;
 report.push(data);console.log(slug,width,'checks',data.checks,'differences',data.diff.length,'overflow',data.overflow,'broken',data.brokenImages.length);
 if(process.env.CASE_SCREENSHOTS&&(width===1440||width===390))run('screenshot',`design-audit/case-studies/local-${slug}-${width}.png`,'--full');
}
fs.writeFileSync('design-audit/case-studies/verification.json',JSON.stringify(report,null,2));
