// Generates reviewable patches from independently captured live case studies.
const fs=require('fs');
const slugs=['basalt','ats-screener','sunnify','axelot','netdash','knifethrow','research'];
const base=fs.readFileSync('projects.html','utf8');
const patch=[];
function write(path,text){if(fs.existsSync(path)){const old=fs.readFileSync(path,'utf8');if(old===text)return;patch.push(`*** Update File: ${path}\n@@\n`+old.trimEnd().split('\n').map(l=>'-'+l).join('\n')+'\n'+text.trimEnd().split('\n').map(l=>'+'+l).join('\n'));}else patch.push(`*** Add File: ${path}\n`+text.trimEnd().split('\n').map(l=>'+'+l).join('\n'));}
const assets={};
for(const slug of slugs){
 const d=JSON.parse(fs.readFileSync(`design-audit/case-studies/${slug}-1440.json`));
 let main=d.main.html.replace(/<!--.*?-->/gs,'');
 // SplitText and motion wrappers are runtime state, not template content.
 main=main.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/,(_,attrs)=>`<h1${attrs}>${d.elements.find(e=>e.tag==='h1').text}</h1>`);
 main=main.replace(/<div style="opacity: 1; transform: none;">/g,'<div data-case-reveal>');
 main=main.replace(/<div style="translate: none; rotate: none; scale: none; transform:[^"]*">/g,'<div data-case-parallax>');
 main=main.replace('class="page-enter','class="case-study-page page-enter');
 main=main.replace(/\s(?:srcset|sizes|data-nimg)="[^"]*"/g,'');
 main=main.replace(/src="([^"]+)"/g,(_,raw)=>{const url=new URL(raw.replaceAll('&amp;','&'),'https://www.sunnypatel.net');const original=url.pathname==='/_next/image'?new URL(url.searchParams.get('url'),url.origin).href:url.href;let name=original.includes('shields.io')?`badge-${Object.keys(assets).length}.svg`:new URL(original).pathname.split('/').pop();if(assets[original])name=assets[original];else assets[original]=name;return `src="sources/case-studies/${name}"`;});
 main=main.replace(/href="\/projects\/([^"#]+)"/g,'href="projects/$1/"').replace(/href="\/projects"/g,'href="projects.html"').replace(/href="\/research"/g,'href="research/"');
 main=main.replace(/href="\/(?!\/)([^"]+)"/g,'href="https://www.sunnypatel.net/$1"');
 const depth=slug==='research'?'../':'../../';
 let html=base.replace(/<title>.*?<\/title>/,`<base href="${depth}">\n    <title>${d.title.replace('Sunny Patel','Shreya Chauhan')}</title>`).replace(/<main\b[\s\S]*?<\/main>/,main);
 html=html.replace('</head>','    <link rel="stylesheet" href="case-studies.css?v=1">\n</head>').replace('</body>','    <script src="case-studies.js?v=1"></script>\n</body>').replace('href="#top"','href="'+(slug==='research'?'research/':'projects/'+slug+'/')+'#main-content"');
 write(slug==='research'?'research/index.html':`projects/${slug}/index.html`,html);
}
write('design-audit/case-studies/asset-manifest.json',JSON.stringify(assets,null,2)+'\n');
// Route every existing local project entry to its own full case study.
let index=base.replace('href="#basalt"','href="projects/basalt/"').replace('href="#ats-screener"','href="projects/ats-screener/"').replaceAll('href="#research"','href="research/"');
let n=0;index=index.replace(/href="#more-work"/g,()=>`href="projects/${['axelot','netdash','knifethrow'][n++]}/"`);
// The prior local index omitted Sunnify; retain its own live card, not a Basalt clone.
if(!index.includes('id="sunnify"')){const card=JSON.parse(fs.readFileSync('design-audit/projects-1440.json'));const sunnify=JSON.parse(fs.readFileSync('design-audit/case-studies/sunnify-1440.json'));const intro=sunnify.elements.find(e=>e.tag==='p').text;index=index.replace('<section class="research-section',`<section class="detail-project" id="sunnify"><div class="detail-preview"><img src="sources/reference/sunnify.webp" alt="Sunnify screenshot" style="width:100%;display:block"></div><div class="detail-copy"><h2>Sunnify</h2><p>${intro}</p><a class="case-study" href="projects/sunnify/">Case study ↗</a></div></section>\n        <section class="research-section`);}
write('projects.html',index);
console.log('*** Begin Patch\n'+patch.join('\n')+'\n*** End Patch');
