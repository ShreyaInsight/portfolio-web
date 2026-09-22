// Emit a patch; application is intentionally handled by apply_patch.
const fs=require('fs');
let patch='*** Begin Patch\n';
for(const page of ['index','projects','work','about','resume','contact']){
 const file=page+'.html',old=fs.readFileSync(file,'utf8');let next=old;
 next=next.replace(/\s*<link[^>]*(?:fonts.googleapis.com|fonts.gstatic.com)[^>]*>/g,'');
 next=next.replace('<link rel="stylesheet" href="styles.css">','<link rel="stylesheet" href="styles.css">\n    <link rel="stylesheet" href="spec.css">');
 next=next.replace(/\s*<script src="mobile-menu.js"><\/script>/g,'');
 next=next.replace(/<script src="https:\/\/unpkg.com\/lenis[\s\S]*?<\/body>/,`<script src="sources/vendor/gsap.min.js"></script>\n    <script src="sources/vendor/ScrollTrigger.min.js"></script>\n    <script src="sources/vendor/SplitText.min.js"></script>\n    <script src="sources/vendor/lenis.min.js"></script>\n    <script src="smooth-scroll.js"></script>\n    <script src="site.js"></script>\n    ${page==='index'?'<script type="module" src="threeD.js"></script>':''}\n</body>`);
 next=next.replace(/<div class="search"([\s\S]*?)<\/div>/g,'<button type="button" class="search"$1</button>');
 next=next.replace(/class="footer-link" href="#(projects|work|about)"/g,'class="footer-link" href="$1.html"');
 next=next.replace(/class="resume-link" href="#resume"/g,'class="resume-link" href="resume.html"').replace(/class="all-projects" href="#projects"/g,'class="all-projects" href="projects.html"').replace(/class="path-link" href="#work"/g,'class="path-link" href="work.html"');
 next=next.replace('Protected by reCAPTCHA.','Opens your email app to send your message.');
 if(page==='contact'){
  next=next.replace('        <div class="contact-grid">','        <div class="eyebrow">CONTACT</div>\n        <h1 id="contact-title">Let\'s build something.</h1>\n        <div class="contact-grid">');
  next=next.replace('                <div class="eyebrow">CONTACT</div>\n                <h1 id="contact-title">Let\'s build something.</h1>','');
  // CRLF variant.
  next=next.replace(/\s*<div class="eyebrow">CONTACT<\/div>\s*<h1 id="contact-title">Let's build something\.<\/h1>(?=\s*<p)/,'');
 }
 if(page==='index'){
  const assets=['basalt','ats-screener','sunnify'];let i=0;
  next=next.replace(/<div class="preview-content[\s\S]*?(?=\s*<\/div>\s*<div class="project-meta")/g,()=>`<img class="preview-image" src="sources/reference/${assets[i++]}.webp" alt="Project interface preview" loading="lazy">`);
 }
 if(old!==next)patch+='*** Update File: '+file+'\n@@\n'+old.trimEnd().split(/\r?\n/).map(l=>'-'+l).join('\n')+'\n'+next.trimEnd().split(/\r?\n/).map(l=>'+'+l).join('\n')+'\n';
}
console.log(patch+'*** End Patch');
