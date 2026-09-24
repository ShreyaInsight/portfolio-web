const fs=require('fs'),cp=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
const run=(...args)=>cp.execFileSync(process.execPath,[cli,...args],{encoding:'utf8',timeout:60000,maxBuffer:20e6});
const ev=code=>JSON.parse(cp.execFileSync(process.execPath,[cli,'eval','--stdin','--json'],{input:code,encoding:'utf8',timeout:60000,maxBuffer:20e6})).data.result;
const reference=JSON.parse(fs.readFileSync('design-audit/header-hover-exact.json','utf8'));
const props=['color','background-color','border-color','border-width','transition-property','transition-duration','transition-timing-function'];
const lineProps=['background-color','width','height','bottom','left','scale','transform','transform-origin','opacity','transition-property','transition-duration','transition-timing-function'];
const results=[];
run('set','viewport','1440','900');
for(const page of ['index','projects','work','about','resume','contact','projects/shreyadesk-ai/index','projects/satellite-crop-health-scanner/index','projects/financialflow/index','projects/axelot/index','projects/netdash/index','projects/knifethrow/index','research/index']){
 run('open',`http://127.0.0.1:5500/${page}.html?header=${Date.now()}`);run('snapshot','-i');ev('document.fonts.ready.then(()=>true)');
 const numbered=['projects','work','about'];const active=page.includes('/')?'projects':page;
 const ids=page==='index'?['projects','work','about','resume','contact','search']:[numbered.includes(active)?active:page];
 for(const id of ids){
  const selector=id==='search'?'.site-header .search':`.site-header .nav a[href="${id}.html"]`;
  const ref=reference.find(r=>r.id===id&&r.route===(active===id?'/'+id:'/'));
  if(!ref)throw Error(`No reference for ${page} ${id}`);
  for(const state of ['before','hover']){
   if(state==='before')run('mouse','move','1300','700');else run('hover',selector);
   ev('new Promise(r=>setTimeout(r,380))');
   const got=ev(`(()=>{const el=document.querySelector(${JSON.stringify(selector)}),read=(e,p,keys)=>Object.fromEntries(keys.map(k=>[k,getComputedStyle(e,p).getPropertyValue(k)]));return {link:read(el,null,${JSON.stringify(props)}),underline:read(el,'::after',${JSON.stringify(lineProps)}),number:el.querySelector('span')?getComputedStyle(el.querySelector('span')).color:null,icon:el.querySelector('svg')?getComputedStyle(el.querySelector('svg')).color:null}})()`);
   const diffs=[];
   for(const p of props){if(got.link[p]!==ref[state].link.styles[p])diffs.push({property:p,expected:ref[state].link.styles[p],actual:got.link[p]});}
   if(numbered.includes(id)){
    for(const p of lineProps){if(got.underline[p]!==ref[state].children[1].styles[p])diffs.push({underline:p,expected:ref[state].children[1].styles[p],actual:got.underline[p]});}
    if(got.number!==ref[state].children[0].styles.color)diffs.push({number:got.number});
   }
   if(id==='search'&&got.icon!==ref[state].children[0].styles.color)diffs.push({icon:got.icon});
   results.push({page,id,state,diffs});console.log(page,id,state,JSON.stringify(diffs));
  }
 }
}
run('set','viewport','390','900');run('open','http://127.0.0.1:5500/work.html?mobileheader=1');run('snapshot','-i');run('find','role','button','click','--name','Open menu');
const mobile=ev(`({overflow:document.documentElement.scrollWidth>innerWidth,expanded:document.querySelector('[data-menu-toggle]').getAttribute('aria-expanded'),active:[...document.querySelectorAll('.mobile-menu [aria-current="page"]')].map(a=>a.getAttribute('href'))})`);
fs.writeFileSync('design-audit/header-implementation-verification.json',JSON.stringify({results,mobile},null,2));
run('close');if(results.some(r=>r.diffs.length)||mobile.overflow||mobile.expanded!=='true')process.exitCode=1;
