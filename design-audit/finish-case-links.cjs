const fs=require('fs');
const old=fs.readFileSync('projects.html','utf8');
let updated=old;
for(const slug of ['basalt','ats-screener']){
 const reference=JSON.parse(fs.readFileSync(`design-audit/case-studies/${slug}-1440.json`));
 const source=reference.main.links.find(a=>a.text==='Source').href;
 const docs=reference.main.links.find(a=>a.text==='Docs').href;
 const pattern=new RegExp(`(<article[^>]+id="${slug}"[\\s\\S]*?</article>)`);
 updated=updated.replace(pattern,part=>part.replace('href="https://github.com/"',`href="${source}"`).replace('href="#docs"',`href="${docs}" target="_blank" rel="noopener noreferrer"`));
}
if(updated!==old)console.log('*** Begin Patch\n*** Update File: projects.html\n@@\n'+old.trimEnd().split('\n').map(l=>'-'+l).join('\n')+'\n'+updated.trimEnd().split('\n').map(l=>'+'+l).join('\n')+'\n*** End Patch');
