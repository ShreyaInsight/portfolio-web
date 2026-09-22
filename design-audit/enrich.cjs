const fs=require('node:fs'),path=require('node:path');
(async()=>{
const data=fs.readdirSync(__dirname).filter(f=>/-(1440|1024|768|390)\.json$/.test(f)).map(f=>JSON.parse(fs.readFileSync(path.join(__dirname,f))));
const bundles=JSON.parse(fs.readFileSync(path.join(__dirname,'bundles.json')));
const urls=[...new Set(data.flatMap(d=>d.scripts.map(s=>s.src)).filter(s=>s.startsWith('https://www.sunnypatel.net/')))];
await Promise.all(urls.filter(u=>!bundles.some(b=>b.url===u)).map(async url=>{try{const r=await fetch(url);bundles.push({url,status:r.status,text:await r.text()})}catch(e){bundles.push({url,error:String(e)})}}));
fs.writeFileSync(path.join(__dirname,'bundles.json'),JSON.stringify(bundles));
const tokens=['ReactLenis','ScrollTrigger','scrollTrigger:','reveal-line','whileInView','initial:{','animate:{','transition:{','setInterval','setTimeout','retro_computer','terminal','cursor','/assets/','@vercel/analytics','recaptcha'];
const evidence=[];
for(const b of bundles){if(!b.text)continue;for(const token of tokens){let start=0,count=0,i;while((i=b.text.indexOf(token,start))>=0&&count++<12){evidence.push({url:b.url,token,excerpt:b.text.slice(Math.max(0,i-140),i+800)});start=i+token.length}}}
fs.writeFileSync(path.join(__dirname,'script-evidence.json'),JSON.stringify(evidence,null,2));
const rules=[...new Set(data.flatMap(d=>d.sheets.flatMap(s=>s.rules||[])))];
fs.writeFileSync(path.join(__dirname,'exposed-styles.css'),rules.join('\n\n'));
console.log(`Saved ${bundles.length} bundles, ${evidence.length} evidence excerpts, ${rules.length} CSSOM rules.`);
})();
