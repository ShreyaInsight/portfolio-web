const fs=require('fs'),cp=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
const code=`(()=>{
 function split(s){let depth=0,out=[],start=0;for(let i=0;i<s.length;i++){if(s[i]==='('||s[i]==='[')depth++;if(s[i]===')'||s[i]===']')depth--;if(s[i]===','&&!depth){out.push(s.slice(start,i));start=i+1;}}out.push(s.slice(start));return out;}
 function walk(rules){return Array.from(rules).map(r=>{
  if(r.constructor.name==='CSSFontFaceRule')return '';
  if(r.constructor.name==='CSSLayerStatementRule')return '';
  if(r.constructor.name==='CSSLayerBlockRule')return walk(r.cssRules);
  if(r.constructor.name==='CSSStyleRule'){
   const selector=split(r.selectorText).map(s=>{s=s.trim();if(s===':root'||s===':host'||s==='html'||s==='body')return 'body main.case-study-page';return 'body main.case-study-page '+s;}).join(',');
   return selector+r.cssText.slice(r.selectorText.length);
  }
  if(r.constructor.name==='CSSMediaRule'||r.constructor.name==='CSSSupportsRule')return r.cssText.slice(0,r.cssText.indexOf('{')+1)+walk(r.cssRules)+'}';
  return r.cssText;
 }).join('\\n');}
 return Array.from(document.styleSheets).map(s=>{try{return walk(s.cssRules)}catch{return ''}}).join('\\n');
})()`;
const result=JSON.parse(cp.execFileSync(process.execPath,[cli,'eval','--stdin','--json'],{input:code,encoding:'utf8',maxBuffer:30e6,timeout:60000})).data.result;
const vars=JSON.parse(fs.readFileSync('design-audit/case-studies/basalt-1440.json')).rootVariables;
let css='/* Live reference CSS, unlayered and scoped to case-study main only. */\n'+result+'\nbody main.case-study-page{'+Object.entries(vars).map(([k,v])=>k+':'+v+';').join('')+'font-family:var(--font-body),ui-sans-serif,system-ui,sans-serif;color:var(--color-bone);font-size:16px;line-height:1.5;overflow-x:clip;}\n';
css+='body main.case-study-page h1{max-width:none;}\n@media(prefers-reduced-motion:reduce){body main.case-study-page *,body main.case-study-page *::before,body main.case-study-page *::after{animation:none!important;transition:none!important;}}\n';
console.log('*** Begin Patch\n*** Add File: case-studies.css\n'+css.trimEnd().split('\n').map(l=>'+'+l).join('\n')+'\n*** End Patch');
