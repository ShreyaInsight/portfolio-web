const fs=require('fs'),{execFileSync}=require('child_process');
const cli='C:/Users/cshiv/AppData/Local/npm-cache/_npx/6de2aa2fded2970c/node_modules/agent-browser/bin/agent-browser.js';
const run=(args,input)=>execFileSync(process.execPath,[cli,...args],{input,encoding:'utf8',timeout:60000,maxBuffer:20000000});
const ev=code=>JSON.parse(run(['eval','--stdin','--json'],code)).data.result;
const results=[];
for(const page of ['index','projects','work','about','resume','contact'])for(const width of [1440,1024,768,390]){
 run(['set','viewport',String(width),'900']);run(['open',`http://127.0.0.1:5500/${page}.html?layout=${Date.now()}`]);
 const checks=[['.nav-links','gap','32px'],['.footer-top','display','flex'],['.footer-top','flex-direction',width>=640?'row':'column'],['.footer-top','gap','32px'],['.footer-bottom','gap','8px'],['.footer-links','gap','20px'],['.footer-social','gap','20px'],['.site-footer','padding','48px 0px']];
 const grid=(selector,columns,gap)=>checks.push([selector,'columns',columns],[selector,'gap',gap]);
 if(page==='index'){grid('.projects-grid',width>=1024?3:width>=640?2:1,'40px');checks.push(['.session','padding','16px'],['.session','border-radius','10px'],['.preview','border-radius','12px'],['.preview-image','transition-duration','0.8s'],['.selected-work','padding',width>=640?'128px 0px':'96px 0px']);}
 if(page==='projects'){grid('.detail-project',width>=1024?2:1,width>=1024?'64px':'32px');checks.push(['.project-list','gap',width>=640?'144px':'112px'],['.project-list','margin-top','80px'],['.project-list','padding-bottom','0px'],['.research-section','margin-top','128px'],['.research-section','padding-top','64px'],['.research-copy','padding',width>=640?'32px':'24px'],['.research-figure','padding',width>=640?'28px':'20px'],['.more-work-section','margin-top','112px'],['.more-work-section','padding-top','64px'],['.preview-glow-frame','filter','blur(64px)','::before']);}
 if(page==='work')grid('.experience-entry',width>=768?2:1,width>=768?'40px':'20px');
 if(page==='about'){grid('.about-grid',width>=1024?2:1,width>=1024?'64px':'48px');grid('.tools-grid',width>=1024?4:width>=640?2:1,'40px');checks.push(['.profile-photo','max-width','320px'],['.profile-facts','margin-top','32px'],['.profile-facts>div','gap','16px'],['.portrait-wrap','filter','blur(40px)','::before']);}
 if(page==='resume')checks.push(['.resume-preview-panel','max-width','840px'],['.resume-preview-panel','margin-top','56px'],['.resume-actions','gap','20px']);
 if(page==='contact'){grid('.contact-grid',width>=1024?2:1,width>=1024?'80px':'56px');checks.push(['.form-row input','padding','12px 16px'],['.form-row input','border-top-color','rgb(90, 100, 109)'],['.form-row input','background-color','rgb(18, 21, 24)'],['.form-row textarea','height','146px'],['.contact-illustration','animation-duration','4s']);}
 const actual=ev(`(async()=>{await document.fonts.ready;await new Promise(r=>setTimeout(r,800));return ${JSON.stringify(checks)}.map(([selector,property,expected,pseudo])=>{const el=document.querySelector(selector);if(!el)return {selector,property,expected,actual:null};const style=getComputedStyle(el,pseudo||null);return {selector,property,expected,actual:property==='columns'?style.gridTemplateColumns.split(' ').length:style.getPropertyValue(property)}})})()`);
 const mismatches=actual.filter(c=>c.expected!==c.actual);results.push({page,width,checked:checks.length,mismatches});console.log(`${page} ${width}: ${mismatches.length} layout mismatches`);
}
fs.writeFileSync('design-audit/layout-verification.json',JSON.stringify(results,null,2));console.log(JSON.stringify(results.filter(r=>r.mismatches.length),null,2));
