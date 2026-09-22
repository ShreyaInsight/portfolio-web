const fs=require('fs');const {type,mappings}=require('./component-map.cjs');
let css='\n/* Literal typography values, mapped by design-audit/component-map.cjs. */\n';
const previous=new Map();
for(const [width,media]of [[390,null],[768,640],[1024,1024],[1440,1440]]){
 let rules='';
 for(const [page,selector,match]of mappings){
  const data=require(`./${page}-${width}.json`),element=data.elements.find(match);
  if(!element){console.error('Missing mapping '+page+' '+selector+' '+width);continue;}
  const declarations=type.map(p=>p+':'+element.styles[p]).join(';');
  if(previous.get(selector)!==declarations){rules+=selector+'{'+declarations+'}\n';previous.set(selector,declarations);}
 }
 if(rules)css+=media?`@media(min-width:${media}px){\n${rules}}\n`:rules;
}
const file='spec-details.css',old=fs.readFileSync(file,'utf8').trimEnd();
const base=old.split('/* Literal typography values, mapped by design-audit/component-map.cjs. */')[0].trimEnd();
console.log('*** Begin Patch\n*** Update File: '+file+'\n@@\n'+old.split(/\r?\n/).map(l=>'-'+l).join('\n')+'\n'+(base+css).split(/\r?\n/).map(l=>'+'+l).join('\n')+'\n*** End Patch');
