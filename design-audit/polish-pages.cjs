const fs=require('fs');let patch='*** Begin Patch\n';
for(const page of ['index','projects','work','about','resume','contact']){
 const file=page+'.html',old=fs.readFileSync(file,'utf8');let next=old;
 next=next.replace('<link rel="stylesheet" href="spec.css">','<link rel="stylesheet" href="spec.css">\n    <link rel="stylesheet" href="spec-details.css">');
 next=next.replace('<body>','<body>\n    <a class="skip-link" href="#top">Skip to content</a>').replace('id="top"','id="top" tabindex="-1"');
 next=next.replace(/href="index.html#(work|about)"/g,'href="$1.html"');
 if(page==='index'){
  next=next.replace(/<h1 id="hero-title">[\s\S]*?<\/h1>/,'<h1 id="hero-title">I build the whole stack, from the screen to the <em>silicon.</em></h1>');
  next=next.replace('<footer class="site-footer">','<footer id="footer" class="site-footer">');
  next=next.replace('    <section id="resume"','    <section id="resume"');
  next=next.replace('        <a class="cta-button" href="mailto:cshreya2005@gmail.com">Get in touch</a>','        <a class="cta-button" href="contact.html">Get in touch</a>\n        <a class="scroll-hint" href="#footer">SCROLL<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg></a>');
 }
 if(page==='projects'){
  next=next.replace(/<div class="detail-preview-screen basalt-preview">[\s\S]*?(?=\s*<\/div>\s*<div class="detail-copy")/,'<img src="sources/reference/basalt.webp" alt="Basalt GPU dependency analysis interface" loading="lazy">');
  next=next.replace(/<div class="ats-screen">[\s\S]*?(?=\s*<\/div>\s*<\/article>)/,'<img src="sources/reference/ats-screener.webp" alt="ATS Screener resume analysis interface" loading="lazy">');
  next=next.replace('sources/more-work-2.svg','sources/reference/netdash.webp');
 }
 if(old!==next)patch+='*** Update File: '+file+'\n@@\n'+old.trimEnd().split(/\r?\n/).map(l=>'-'+l).join('\n')+'\n'+next.trimEnd().split(/\r?\n/).map(l=>'+'+l).join('\n')+'\n';
}console.log(patch+'*** End Patch');
