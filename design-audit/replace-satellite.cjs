const fs=require('fs');
const patch=[];
function write(path,text){
 const old=fs.existsSync(path)?fs.readFileSync(path,'utf8'):'';
 if(old===text)return;
 if(old){patch.push(`*** Update File: ${path}\n@@\n${old.trimEnd().split('\n').map(l=>'-'+l).join('\n')}\n${text.trimEnd().split('\n').map(l=>'+'+l).join('\n')}`);}
 else patch.push(`*** Add File: ${path}\n${text.trimEnd().split('\n').map(l=>'+'+l).join('\n')}`);
}
const name='Satellite Crop Health Scanner';
const slug='satellite-crop-health-scanner';
const tagline='Pixel-level crop health from Sentinel-2 imagery';
const intro='A deployed geospatial application that transforms aligned Sentinel-2 red and near-infrared imagery into an explainable NDVI matrix, vegetation-health classifications, analytical maps, and GIS-ready exports.';
const summary='Satellite Crop Health Scanner converts aligned Sentinel-2 Level-2A B04 and B08 GeoTIFF bands into pixel-level NDVI analysis. It validates the full raster grid, handles invalid pixels safely, classifies vegetation with adjustable thresholds, and presents maps, distributions, and summary statistics. Results can be exported as a presentation-ready PNG, statistics CSV, or georeferenced NDVI GeoTIFF.';
const live='https://crop-health-scanner-ca54vhtxe6wnnbpje9ict2.streamlit.app/';
const source='https://github.com/ShreyaInsight/crop-health-scanner';
const image='sources/reference to be replaced/Satellite Crop Health Scanner.png';
const paragraphs=[
 'Field inspection does not scale easily across large agricultural areas. Satellite Crop Health Scanner turns repeatable Sentinel-2 observations into an accessible, explainable workflow: upload the red B04 and near-infrared B08 bands, validate them, calculate NDVI for every shared valid pixel, and inspect the result without relying on a black-box model.',
 'Geospatial integrity is checked before analysis. The application requires matching dimensions, coordinate reference system, transform, resolution, extent, and pixel grid. Masked division excludes zero denominators, nodata, NaN, and infinite values, while a processing-size guard rejects oversized rasters with guidance to clip the study area first.',
 'The interface provides contrast-stretched source previews, an NDVI map, an adjustable vegetation-classification map, a histogram, a distribution chart, and summary statistics. The default interpretation separates non-vegetated values, sparse vegetation, moderate vegetation, and comparatively dense or healthy-looking vegetation, while keeping the 0.2 and 0.5 thresholds explicit and adjustable.',
 'Results can leave the dashboard as a presentation-ready PNG, statistics CSV, or georeferenced NDVI GeoTIFF that preserves the source raster profile. The app runs locally, in Docker, or on Streamlit Community Cloud, and GitHub Actions repeats Pytest and Ruff checks on every push and pull request.',
 'NDVI measures relative vegetation greenness and density; it cannot independently diagnose a particular crop disease. Thresholds still need calibration for crop type, growth stage, soil, weather, and season. The project keeps that limitation visible so every result remains traceable to aligned raster values and an explicit calculation.'
];
const highlights=[
 'Validates dimensions, CRS, transform, resolution, extent, nodata values, and pixel-grid alignment before processing',
 'Calculates NDVI with masked division and excludes zero denominators, nodata, NaN, and infinite values',
 'Interactive maps, classification thresholds, histogram, distribution chart, and summary statistics',
 'Exports presentation PNG, statistics CSV, and georeferenced NDVI GeoTIFF while preserving raster metadata',
 'Automated Pytest and Ruff checks through GitHub Actions, with local, Docker, and Streamlit deployment paths'
];
const stack=['Python','Streamlit','NumPy','Rasterio','GeoTIFF','Matplotlib','Pytest','Ruff','Docker'];
const upRight='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>';
const github='<svg viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>';

let page=fs.readFileSync('projects/shreyadesk-ai/index.html','utf8');
page=page.replace('<title>ShreyaDesk AI · Shreya Chauhan</title>',`<title>${name} · Shreya Chauhan</title>`)
 .replaceAll('projects/shreyadesk-ai/','projects/'+slug+'/')
 .replace('Indian equity research, with execution guardrails',tagline)
 .replace('aria-label="ShreyaDesk AI">ShreyaDesk AI</h1>',`aria-label="${name}">${name}</h1>`)
 .replace(/<p class="mt-5 max-w-2xl text-lg leading-relaxed text-bone-dim sm:text-xl">[\s\S]*?<\/p>/,`<p class="mt-5 max-w-2xl text-lg leading-relaxed text-bone-dim sm:text-xl">${intro}</p>`)
 .replace(/<div class="mt-7 flex items-center gap-6 font-mono text-sm">[\s\S]*?<\/div><\/div><div class="mx-auto w-full max-w-6xl px-6 sm:px-10 mt-14">/,`<div class="mt-7 flex items-center gap-6 font-mono text-sm"><a href="${live}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-1.5 text-ember transition-colors hover:text-ember-bright">Live${upRight}</a><a href="${source}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-bone">${github}Source</a></div></div><div class="mx-auto w-full max-w-6xl px-6 sm:px-10 mt-14">`)
 .replace('alt="ShreyaDesk AI market dashboard illustration"','alt="Satellite Crop Health Scanner interface"')
 .replace('sources/reference to be replaced/market-hero.svg',image)
 .replace(/<span class="ml-3 truncate font-mono text-\[0\.65rem\] text-muted">[^<]*<\/span>/,'<span class="ml-3 truncate font-mono text-[0.65rem] text-muted">crop-health-scanner.streamlit.app</span>');
page=page.replace(/<div class="space-y-5 text-\[1\.05rem\] leading-relaxed text-bone-dim">[\s\S]*?<\/div><div class="lg:border-l lg:border-line lg:pl-12">/,`<div class="space-y-5 text-[1.05rem] leading-relaxed text-bone-dim">${paragraphs.map(p=>`<div data-case-reveal><p>${p}</p></div>`).join('')}</div><div class="lg:border-l lg:border-line lg:pl-12">`);
page=page.replace(/<ul class="mt-5 space-y-3">[\s\S]*?<\/ul><span class="inline-flex items-center gap-3 font-mono text-\[0\.7rem\] uppercase tracking-\[0\.22em\] text-muted mt-10">/,`<ul class="mt-5 space-y-3">${highlights.map(h=>`<li class="flex gap-3 text-[0.95rem] leading-relaxed text-bone-dim"><span class="mt-2 h-px w-3 shrink-0 bg-ember/60"></span><span>${h}</span></li>`).join('')}</ul><span class="inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted mt-10">`);
page=page.replace(/<ul class="mt-5 flex flex-wrap gap-2 font-mono text-\[0\.78rem\]">[\s\S]*?<\/ul>/,`<ul class="mt-5 flex flex-wrap gap-2 font-mono text-[0.78rem]">${stack.map(s=>`<li class="rounded-sm bg-surface px-2.5 py-1 text-bone-dim">${s}</li>`).join('')}</ul>`);
page=page.replace('href="projects/ats-screener/"','href="projects/axelot/"').replace('>ATS Screener<svg','>Axelot<svg');
write(`projects/${slug}/index.html`,page);
write('projects/ats-screener/index.html',`<!DOCTYPE html>\n<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${name}</title><meta http-equiv="refresh" content="0;url=../${slug}/"></head><body><a href="../${slug}/">Continue to ${name}</a></body></html>\n`);

let projects=fs.readFileSync('projects.html','utf8');
projects=projects.replace(/<article class="detail-project ats-project" id="ats-screener">[\s\S]*?<\/article>/,`<article class="detail-project ats-project" id="${slug}">
                <div class="detail-copy">
                    <div class="detail-meta"><span>02</span><span>2026</span><b></b><strong><i></i>Actively maintained</strong></div>
                    <h2>${name}</h2>
                    <p class="detail-subtitle">${tagline}</p>
                    <p class="detail-description">${summary}</p>
                    <div class="tag-list">${stack.slice(0,6).map(s=>`<span>${s}</span>`).join('')}</div>
                    <div class="stats-list"><span><b>2</b><em>Sentinel-2 bands</em></span><span><b>3</b><em>export formats</em></span></div>
                    <div class="detail-links"><a class="case-study" href="projects/${slug}/">Case study ↗</a><a href="${live}" target="_blank" rel="noopener noreferrer">Live</a><a href="${source}" target="_blank" rel="noopener noreferrer"><span class="github-mark">◉</span> Source</a></div>
                </div>
                <div class="preview-glow-frame"><div class="detail-preview ats-detail-preview">
                    <div class="browser-bar"><span class="browser-dot"></span><span class="browser-dot"></span><span class="browser-dot"></span><span class="url">crop-health-scanner.streamlit.app</span></div>
                    <img src="${image}" alt="Satellite Crop Health Scanner interface" loading="lazy"></div></div>
            </article>`);
write('projects.html',projects);

let home=fs.readFileSync('index.html','utf8');
const articles=[...home.matchAll(/<article class="project">[\s\S]*?<\/article>/g)];
const atsArticle=articles.find(match=>match[0].includes('ats-screener.vercel.app'))?.[0];
if(!atsArticle)throw new Error('ATS homepage card not found');
home=home.replace(atsArticle,`<article class="project">
                    <div class="preview">
                        <div class="browser-bar"><span class="browser-dot"></span><span class="browser-dot"></span><span class="browser-dot"></span><span class="url">crop-health-scanner.streamlit.app</span></div>
                        <img class="preview-image" src="${image}" alt="Satellite Crop Health Scanner interface" loading="lazy">
                    </div>
                    <div class="project-meta"><strong class="project-name">${name}</strong><span class="project-year">2026</span></div>
                    <p class="project-description">${tagline}</p>
                    <div class="project-status"><span class="status-dot"></span>Actively maintained</div>
                </article>`);
write('index.html',home);

for(const other of ['shreyadesk-ai','sunnify','axelot','netdash','knifethrow']){
 const file=`projects/${other}/index.html`;let html=fs.readFileSync(file,'utf8');
 html=html.replaceAll('projects/ats-screener/',`projects/${slug}/`).replaceAll('ATS Screener',name);
 write(file,html);
}
console.log('*** Begin Patch\n'+patch.join('\n')+'\n*** End Patch');
