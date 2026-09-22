const props=['transition-property','transition-duration','transition-timing-function'];
const mappings=[
 ['home','.nav-link',e=>e.directText==='Projects'&&e.class.startsWith('group relative')],
 ['home','.resume',e=>e.directText==='Résumé'&&e.class.startsWith('hidden font-mono')],
 ['home','.touch',e=>e.directText==='Get in touch'&&e.class.startsWith('block rounded')],
 ['home','.search',e=>e.tag==='button'&&e.class.includes('lg:w-56')],
 ['home','.mobile-menu nav a',e=>e.directText==='Projects'&&e.class.startsWith('flex items-center gap-3 py-3')],
 ['home','.mobile-menu-cta',e=>e.directText==='Get in touch'&&e.class.startsWith('mt-3 rounded')],
 ['home','.work-button,.cta-button',e=>e.directText==='See the work'],
 ['home','.resume-link',e=>e.directText==='Résumé'&&e.class.startsWith('group inline-flex')],
 ['home','.all-projects',e=>e.directText==='All projects'],
 ['home','.path-link',e=>e.directText==='See the full path'],
 ['home','.footer-link',e=>e.directText==='Projects'&&e.class==='transition-colors hover:text-bone'],
 ['home','.skip-link',e=>e.class==='skip-link'],
 ['resume','.resume-download',e=>e.directText==='Download PDF'],
 ['resume','.resume-open',e=>e.directText==='Open in new tab'],
 ['contact','.send-button',e=>e.directText==='Send message'],
 ['contact','.contact-email',e=>e.directText==='sunnypatel124555@gmail.com'],
 ['contact','.contact-links a',e=>e.directText==='github.com/sunnypatell'],
 ['projects','.detail-links .case-study',e=>e.tag==='a'&&e.directText==='Case study'],
];
module.exports={props,mappings};
