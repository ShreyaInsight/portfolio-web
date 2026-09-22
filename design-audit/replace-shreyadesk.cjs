const fs=require('fs');
const patches=[];
function write(file,next){const old=fs.existsSync(file)?fs.readFileSync(file,'utf8'):null;if(old===next)return;patches.push(old===null?`*** Add File: ${file}\n`+next.trimEnd().split('\n').map(l=>'+'+l).join('\n'):`*** Update File: ${file}\n@@\n`+old.trimEnd().split('\n').map(l=>'-'+l).join('\n')+'\n'+next.trimEnd().split('\n').map(l=>'+'+l).join('\n'));}
const art='sources/reference to be replaced/market-hero.svg';
const docs='sources/reference%20to%20be%20replaced/README%20(5).md';
const tagline='Indian equity research, with execution guardrails';
const intro='A private, single-user dashboard for Indian equity research, paper trading, and explicitly enabled live LIMIT orders. ShreyaDesk AI connects a React interface to a Python backend and Zerodha Kite Connect, keeping research separate from execution.';
const summary='ShreyaDesk AI brings Indian equity research, technical scans, paper trading, and guarded live execution into one local dashboard. A React/Vite frontend works with a Python/FastAPI backend, cached NSE daily history, and Zerodha Kite Connect. OCC, RSI, Supertrend, SMA, and confirmed 3D workflows support research; account-ownership checks, persistent loss limits, order caps, and a kill switch guard execution. Live trading starts paused and must be explicitly enabled.';
const paragraphs=[
 'Research and execution need different boundaries. ShreyaDesk AI keeps its equity scanner read-only and routes eligible signals through a separate paper or live execution workflow. The dashboard brings together broker profile information, holdings, positions, orders, GTTs, stock research, and an analytics journal without treating a research signal as permission to trade.',
 'The data layer intersects the official NSE equity list with Kite instruments and caches completed daily candles in SQLite. Same-day scans reuse that history, while validated quote overlays supply developing-session data without overwriting finalized candles. OCC and Supertrend scanning, daily RSI filters, and confirmed three-session signals share the underlying market data. Independent stock search provides charts, technical indicators, and transparent weighted research scores; missing inputs remain unavailable rather than being invented.',
 'Execution is deliberately gated. Every backend startup leaves live trading paused. LIMIT orders require a verified broker account, a valid trading session, fresh signals, available allocation, and risk checks. Durable BUY reservations prevent overlapping entries and enforce daily submission limits. Cumulative loss monitoring and the kill switch persist independently of editable settings, while account mismatches pause execution instead of silently reassigning positions or orders.',
 'A shared, versioned NSE session calendar coordinates cache preparation, scans, and risk-history coverage. Unknown years or unverified special-session hours block execution. The regular timetable prepares the cache at 09:00 IST, runs a results-only scan at 12:00, and permits the 15:00 scan to enter the existing execution checks. Telegram notifications run on a separate worker so network delays do not block the trading or safety path.',
 'The application is intended for private local use or controlled deployment, with backend-only broker credentials and persistent storage. The supplied documentation includes backend unit tests, frontend builds, and Playwright browser checks. Its recorded warm-cache benchmark processed 2,542 symbols in 17.92 seconds with six quote calls and no historical-data calls; order dispatch was blocked and optional fundamentals enrichment was disabled. This is a documented test result, not a latency guarantee or evidence of trading returns. Paper-mode testing comes first; the project does not provide financial advice.'
];
const highlights=[
 'Read-only research with OCC, RSI, Supertrend, SMA, and confirmed 3D signal workflows',
 'Cached NSE daily history, validated session quotes, independent stock search, and CSV exports',
 'Live execution starts paused; LIMIT orders pass account, session, allocation, and risk checks',
 'Persistent cumulative loss monitoring, a kill switch, durable BUY reservations, and order caps',
 'Shared NSE session calendar, separate paper/live analytics, and non-blocking Telegram alerts'
];
const stack=['React','Vite','JavaScript','Python','FastAPI','SQLite','Kite Connect','Playwright'];
let page=fs.readFileSync('projects/basalt/index.html','utf8');
page=page.replace('<title>basalt · Shreya Chauhan</title>','<title>ShreyaDesk AI · Shreya Chauhan</title>').replaceAll('projects/basalt/','projects/shreyadesk-ai/').replaceAll('The check NVIDIA never shipped',tagline).replace('aria-label="basalt">basalt</h1>','aria-label="ShreyaDesk AI">ShreyaDesk AI</h1>');
page=page.replace(/(<p class="mt-5 max-w-2xl[^>]*>)[\s\S]*?<\/p>/,`$1${intro}</p>`);
const linkStart=page.indexOf('<div class="mt-7 flex items-center');
const previewStart=page.indexOf('</div><div class="mx-auto w-full max-w-6xl px-6 sm:px-10 mt-14">',linkStart);
const oldLink=page.slice(linkStart,previewStart);
const docsAnchor=oldLink.match(/<a href="[^"]+FINDINGS.md"[\s\S]*?<\/a>/)[0].replace(/href="[^"]+"/,`href="${docs}"`).replace('>Docs<','>Project brief<');
page=page.slice(0,linkStart)+'<div class="mt-7 flex items-center gap-6 font-mono text-sm">'+docsAnchor+'</div>'+page.slice(previewStart);
page=page.replace('alt="basalt screenshot"','alt="ShreyaDesk AI market dashboard illustration"').replace('sources/case-studies/basalt.webp',art);
const narrativeStart=page.indexOf('<div class="space-y-5 text-[1.05rem]');
const narrativeEnd=page.indexOf('<div class="lg:border-l',narrativeStart);
page=page.slice(0,narrativeStart)+'<div class="space-y-5 text-[1.05rem] leading-relaxed text-bone-dim">'+paragraphs.map(p=>'<div data-case-reveal><p>'+p+'</p></div>').join('')+'</div>'+page.slice(narrativeEnd);
page=page.replace(/<ul class="mt-5 space-y-3">[\s\S]*?<\/ul>/,'<ul class="mt-5 space-y-3">'+highlights.map(p=>'<li class="flex gap-3 text-[0.95rem] leading-relaxed text-bone-dim"><span class="mt-2 h-px w-3 shrink-0 bg-ember/60"></span><span>'+p+'</span></li>').join('')+'</ul>');
page=page.replace(/<ul class="mt-5 flex flex-wrap gap-2 font-mono text-\[0.78rem\]">[\s\S]*?<\/ul>/,'<ul class="mt-5 flex flex-wrap gap-2 font-mono text-[0.78rem]">'+stack.map(s=>'<li class="rounded-sm bg-surface px-2.5 py-1 text-bone-dim">'+s+'</li>').join('')+'</ul>');
const citeStart=page.indexOf('<div class="mx-auto w-full max-w-6xl px-6 sm:px-10 mt-16"><div class="rounded-xl');
const citeEnd=page.indexOf('<div class="mx-auto w-full max-w-6xl px-6 sm:px-10 mt-24',citeStart);
if(citeStart<0||citeEnd<0)throw new Error('Citation boundaries not found');
page=page.slice(0,citeStart)+page.slice(citeEnd);
write('projects/shreyadesk-ai/index.html',page);
write('projects/basalt/index.html','<!DOCTYPE html>\n<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>ShreyaDesk AI</title><meta http-equiv="refresh" content="0;url=../shreyadesk-ai/"></head><body><a href="../shreyadesk-ai/">Continue to ShreyaDesk AI</a></body></html>\n');
let index=fs.readFileSync('projects.html','utf8');
index=index.replace(/<article class="detail-project" id="basalt">[\s\S]*?<\/article>/,part=>part.replace('id="basalt"','id="shreyadesk-ai"').replace('sources/reference/basalt.webp',art).replace('Basalt GPU dependency analysis interface','ShreyaDesk AI market dashboard illustration').replace('<h2>basalt</h2>','<h2>ShreyaDesk AI</h2>').replace('The check NVIDIA never shipped',tagline).replace(/(<p class="detail-description">)[\s\S]*?<\/p>/,`$1${summary}</p>`).replace(/<div class="tag-list">[\s\S]*?<\/div>/,'<div class="tag-list">'+stack.map(s=>'<span>'+s+'</span>').join('')+'</div>').replace(/\s*<div class="shield-list">[\s\S]*?<\/div>/,'').replace(/<div class="detail-links">[\s\S]*?<\/div>/,`<div class="detail-links"><a class="case-study" href="projects/shreyadesk-ai/">Case study ↗</a><a href="${docs}" target="_blank" rel="noopener noreferrer">Project brief</a></div>`));
write('projects.html',index);
write('index.html',fs.readFileSync('index.html','utf8').replace('sources/reference/basalt.webp',art).replace('alt="Project interface preview"','alt="ShreyaDesk AI market dashboard illustration"').replace('Indian Equity Markets Algo Trading System',tagline));
for(const slug of ['ats-screener','sunnify','axelot','netdash','knifethrow']){const file=`projects/${slug}/index.html`;write(file,fs.readFileSync(file,'utf8').replaceAll('projects/basalt/','projects/shreyadesk-ai/').replace(/>basalt</g,'>ShreyaDesk AI<'));}
console.log('*** Begin Patch\n'+patches.join('\n')+'\n*** End Patch');
