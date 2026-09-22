const fs=require('fs');
const changes=[];
function patch(file,next){const old=fs.existsSync(file)?fs.readFileSync(file,'utf8'):null;if(old===next)return;changes.push(old===null?`*** Add File: ${file}\n${next.trimEnd().split('\n').map(x=>'+'+x).join('\n')}`:`*** Update File: ${file}\n@@\n${old.trimEnd().split('\n').map(x=>'-'+x).join('\n')}\n${next.trimEnd().split('\n').map(x=>'+'+x).join('\n')}`);}
const cover='sources/reference to be replaced/Financial Flow.png';
const brief='sources/reference%20to%20be%20replaced/README%20FinancialFlow.md';
const tagline='Income, budgets, and goals in one clear view';
const summary='FinancialFlow brings income, expenses, category budgets, and savings goals into one personal finance dashboard. Transactions update balances and monthly summaries, while interactive line, bar, doughnut, and radar charts reveal spending patterns and financial progress. Built with Next.js and TypeScript, it saves data in browser local storage so users can return to their records without creating an account.';
const paragraphs=[
 'Personal finance is easier to understand when transactions, budgets, and goals share the same view. FinancialFlow brings these pieces together: users record income and expenses, see their balance and monthly summaries update, and follow the progress of their savings goals.',
 'The application uses Next.js and TypeScript with reusable interface components for transactions, category budgets, and goal tracking. React hooks manage balances, income, expenses, transactions, goals, and budget categories, keeping the interface in sync as users add or change their records.',
 'Chart.js turns those records into four complementary views. Line charts compare income and expenses over time, bar charts break spending down by category, doughnut charts show the distribution of savings, expenses, and debt, and radar charts present financial-health criteria. A financial health score updates from spending, savings, and debt ratios alongside the charts.',
 'Data is loaded from browser local storage when the app opens and saved when records change, retaining transactions, budgets, and goals across sessions without requiring an account. Tailwind CSS and CSS modules provide the responsive interface, while Framer Motion adds transitions. Account authentication, cloud synchronization, and predictive features are future enhancements described in the project roadmap.'
];
const highlights=[
 'Income and expense transactions update balances and monthly summaries as records change',
 'Category budgets compare actual spending with user-defined limits',
 'Savings goals show progress through visual trackers',
 'Interactive line, bar, doughnut, and radar charts with a dynamically updated financial health score',
 'Browser local storage retains transactions, budgets, and goals across sessions without an account'
];
const stack=['Next.js','TypeScript','React','Chart.js','Framer Motion','Tailwind CSS','CSS Modules','Lucide React','localStorage'];
let page=fs.readFileSync('projects/sunnify/index.html','utf8');
page=page.replaceAll('Sunnify','FinancialFlow').replaceAll('projects/sunnify/','projects/financialflow/').replace('Spotify playlists to tagged local audio',tagline).replace('sources/case-studies/sunnify.webp',cover);
page=page.replace(/(<p class="mt-5 max-w-2xl[^">]*">)[\s\S]*?<\/p>/,`$1${summary}</p>`);
const linkStart=page.indexOf('<div class="mt-7 flex items-center gap-6 font-mono text-sm">');
const previewStart=page.indexOf('<div class="mx-auto w-full max-w-6xl px-6 sm:px-10 mt-14">',linkStart);
if(linkStart<0||previewStart<0)throw Error('Missing template boundaries');
page=page.slice(0,linkStart)+`<div class="mt-7 flex items-center gap-6 font-mono text-sm"><a href="${brief}" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center gap-1.5 text-muted transition-colors hover:text-bone">Project brief<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a></div></div>`+page.slice(previewStart);
const narrativeStart=page.indexOf('<div class="space-y-5 text-[1.05rem] leading-relaxed text-bone-dim">');
const sidebarStart=page.indexOf('<div class="lg:border-l lg:border-line lg:pl-12">',narrativeStart);
page=page.slice(0,narrativeStart)+`<div class="space-y-5 text-[1.05rem] leading-relaxed text-bone-dim">${paragraphs.map(p=>`<div data-case-reveal><p>${p}</p></div>`).join('')}</div>`+page.slice(sidebarStart);
page=page.replace(/<ul class="mt-5 space-y-3">[\s\S]*?<\/ul>/,`<ul class="mt-5 space-y-3">${highlights.map(p=>`<li class="flex gap-3 text-[0.95rem] leading-relaxed text-bone-dim"><span class="mt-2 h-px w-3 shrink-0 bg-ember/60"></span><span>${p}</span></li>`).join('')}</ul>`);
page=page.replace(/<ul class="mt-5 flex flex-wrap gap-2 font-mono text-\[0\.78rem\]">[\s\S]*?<\/ul>/,`<ul class="mt-5 flex flex-wrap gap-2 font-mono text-[0.78rem]">${stack.map(p=>`<li class="rounded-sm bg-surface px-2.5 py-1 text-bone-dim">${p}</li>`).join('')}</ul>`);
patch('projects/financialflow/index.html',page);
patch('projects/sunnify/index.html','<!DOCTYPE html>\n<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>FinancialFlow</title><meta http-equiv="refresh" content="0;url=../financialflow/"></head><body><a href="../financialflow/">Continue to FinancialFlow</a></body></html>\n');
for(const file of ['index.html','projects.html']){
 let html=fs.readFileSync(file,'utf8');let count=0;
 html=html.replace(/<article\b[^>]*>[\s\S]*?<\/article>/g,article=>{
  if(!article.includes('Sunnify'))return article;count++;
  let next=article.replaceAll('Sunnify','FinancialFlow').replaceAll('projects/sunnify/','projects/financialflow/').replace('id="sunnify"','id="financialflow"').replace('Spotify playlists to tagged local audio',tagline).replace(/sources\/(?:reference|case-studies)\/sunnify.webp/g,cover);
  if(file==='projects.html'){
   next=next.replace(/(<p class="detail-description">)[\s\S]*?<\/p>/,`$1${summary}</p>`).replace(/<div class="tag-list">[\s\S]*?<\/div>/,`<div class="tag-list">${stack.slice(0,6).map(p=>`<span>${p}</span>`).join('')}</div>`).replace(/\s*<div class="shield-list">[\s\S]*?<\/div>/,'').replace(/<div class="detail-links">[\s\S]*?<\/div>/,`<div class="detail-links"><a class="case-study" href="projects/financialflow/">Case study ↗</a><a href="${brief}" target="_blank" rel="noopener noreferrer">Project brief</a></div>`);
  }
  return next;
 });
 if(count!==1)throw Error(`Expected one Sunnify card in ${file}, found ${count}`);
 patch(file,html);
}
for(const dir of fs.readdirSync('projects',{withFileTypes:true}).filter(d=>d.isDirectory())){
 if(['sunnify','financialflow'].includes(dir.name))continue;
 const file=`projects/${dir.name}/index.html`;if(!fs.existsSync(file))continue;
 const old=fs.readFileSync(file,'utf8');patch(file,old.replaceAll('projects/sunnify/','projects/financialflow/').replaceAll('>Sunnify<','>FinancialFlow<'));
}
console.log('*** Begin Patch\n'+changes.join('\n')+'\n*** End Patch');
