const fs=require('fs');const ref=require('./home-1440.json'),contact=require('./contact-1440.json');
function icon(name,source=ref){const record=source.svg.find(s=>s.class.includes('lucide-'+name+' '));if(!record)throw Error(name);return record.html.replace(/class="[^"]*"/,'class="spec-icon icon-'+name.replace('arrow-','')+'"');}
let patch='*** Begin Patch\n';
for(const page of ['index','projects','work','about','resume','contact']){
 const file=page+'.html',old=fs.readFileSync(file,'utf8');let next=old;
 next=next.replace(/<span class="arrow">→<\/span>/g,icon('arrow-right'));
 next=next.replace(/<span aria-hidden="true">→<\/span>/g,icon('arrow-right'));
 next=next.replace(/<span aria-hidden="true">✉<\/span>/g,icon('mail',contact));
 next=next.replace(/(<a class="(?:resume-link|all-projects|path-link)"[^>]*>[^<]*)↗/g,'$1'+icon('arrow-up-right'));
 next=next.replace(/(<a class="scroll-hint"[^>]*>SCROLL)<svg[\s\S]*?<\/svg>/,'$1'+icon('chevron-down'));
 next=next.replace(/(<button type="button" class="search"[^>]*>)<svg[\s\S]*?<\/svg>/g,'$1'+icon('search'));
 if(old!==next)patch+='*** Update File: '+file+'\n@@\n'+old.trimEnd().split(/\r?\n/).map(l=>'-'+l).join('\n')+'\n'+next.trimEnd().split(/\r?\n/).map(l=>'+'+l).join('\n')+'\n';
}console.log(patch+'*** End Patch');
