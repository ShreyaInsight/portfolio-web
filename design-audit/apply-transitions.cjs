const fs=require('fs'),{props,mappings}=require('./transition-map.cjs');
let css='\n/* Inspector-matched control transitions. */\n';
for(const [page,selector,match]of mappings){const e=require(`./${page}-1440.json`).elements.find(match);if(!e)throw Error('Missing '+selector);css+=selector+'{'+props.map(p=>p+':'+e.styles[p]).join(';')+'}\n';}
css+='.nav-link{display:flex;align-items:center;gap:6px;padding:4px 0}.nav-link span{margin:0}.resume-link{display:inline-flex;align-items:center;gap:6px;padding:12px 4px;font-size:14px;line-height:20px}.all-projects,.path-link{display:inline-flex;align-items:center;gap:6px}\n';
const file='spec-details.css',old=fs.readFileSync(file,'utf8').trimEnd(),base=old.split('/* Inspector-matched control transitions. */')[0].trimEnd();
console.log('*** Begin Patch\n*** Update File: '+file+'\n@@\n'+old.split(/\r?\n/).map(l=>'-'+l).join('\n')+'\n'+(base+css).trimEnd().split(/\r?\n/).map(l=>'+'+l).join('\n')+'\n*** End Patch');
