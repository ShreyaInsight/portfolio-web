const fs=require('fs'),file='projects.html',old=fs.readFileSync(file,'utf8');
const next=old.replace(/<div class="detail-preview([^\"]*)">([\s\S]*?<img[^>]+>\s*)<\/div>/g,'<div class="preview-glow-frame"><div class="detail-preview$1">$2</div></div>');
console.log('*** Begin Patch\n*** Update File: '+file+'\n@@\n'+old.trimEnd().split(/\r?\n/).map(l=>'-'+l).join('\n')+'\n'+next.trimEnd().split(/\r?\n/).map(l=>'+'+l).join('\n')+'\n*** End Patch');
