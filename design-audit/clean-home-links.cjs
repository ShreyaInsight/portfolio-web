const fs=require('fs');
const files=['index.html','projects.html','work.html','about.html','resume.html','contact.html','research/index.html',...fs.readdirSync('projects').map(x=>`projects/${x}/index.html`)];
const edits=[];
for(const file of files){if(!fs.existsSync(file))continue;const lines=fs.readFileSync(file,'utf8').split(/\r?\n/);const hunks=[];for(const line of lines){const next=line.replaceAll('href="index.html"','href="/"').replace(/site\.js\?v=[^"\s]+/g,'site.js?v=20260924-home');if(next!==line)hunks.push(`@@\n-${line}\n+${next}`);}if(hunks.length)edits.push(`*** Update File: ${file}\n${hunks.join('\n')}`);}
console.log('*** Begin Patch\n'+edits.join('\n')+'\n*** End Patch');
