const fs=require('fs');
const files=['index.html','projects.html','work.html','about.html','resume.html','contact.html',...fs.readdirSync('projects').map(d=>`projects/${d}/index.html`),'research/index.html'];
const patches=[];
for(const file of files){if(!fs.existsSync(file))continue;const old=fs.readFileSync(file,'utf8');const lines=old.split(/\r?\n/);const edits=[];for(const line of lines){const next=line.replace(/(spec-details\.css|site\.js)\?v=[^"\s]+/g,'$1?v=20260923-header');if(next!==line)edits.push(`@@\n-${line}\n+${next}`);}if(edits.length)patches.push(`*** Update File: ${file}\n${edits.join('\n')}`);}
console.log('*** Begin Patch\n'+patches.join('\n')+'\n*** End Patch');
