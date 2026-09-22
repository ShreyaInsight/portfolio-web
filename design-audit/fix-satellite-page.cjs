const fs=require('fs');
const file='projects/satellite-crop-health-scanner/index.html';
const old=fs.readFileSync(file,'utf8');
let html=old.replace(
 '<span aria-hidden="true" class="flex items-center gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-dot-inactive"></span><span class="h-2.5 w-2.5 rounded-full bg-dot-inactive"></span><span class="h-2.5 w-2.5 rounded-full bg-dot-inactive"></span></span></div><div class="relative aspect-[16/10] overflow-hidden">',
 '<span aria-hidden="true" class="flex items-center gap-1.5"><span class="h-2.5 w-2.5 rounded-full bg-dot-inactive"></span><span class="h-2.5 w-2.5 rounded-full bg-dot-inactive"></span><span class="h-2.5 w-2.5 rounded-full bg-dot-inactive"></span></span><span class="ml-3 truncate font-mono text-[0.65rem] text-muted">crop-health-scanner.streamlit.app</span></div><div class="relative aspect-[16/10] overflow-hidden">'
).replace('href="projects/ats-screener/"','href="projects/axelot/"').replace('>ATS Screener<svg','>Axelot<svg');
if(html===old)throw new Error('No replacements made');
console.log('*** Begin Patch\n*** Update File: '+file+'\n@@\n'+old.trimEnd().split('\n').map(l=>'-'+l).join('\n')+'\n'+html.trimEnd().split('\n').map(l=>'+'+l).join('\n')+'\n*** End Patch');
