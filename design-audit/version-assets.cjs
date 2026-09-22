const fs=require('fs');let patch='*** Begin Patch\n';
for(const page of ['index','projects','work','about','resume','contact']){
 const file=page+'.html',old=fs.readFileSync(file,'utf8'),next=old.replace(/(href|src)="(styles\.css|spec\.css|spec-details\.css|site\.js|smooth-scroll\.js|threeD\.js)(?:\?v=[^"]*)?"/g,'$1="$2?v=20260922-controls2"');
 if(old!==next)patch+='*** Update File: '+file+'\n@@\n'+old.trimEnd().split(/\r?\n/).map(l=>'-'+l).join('\n')+'\n'+next.trimEnd().split(/\r?\n/).map(l=>'+'+l).join('\n')+'\n';
}console.log(patch+'*** End Patch');
