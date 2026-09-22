const fs=require('node:fs');const path=require('node:path');
(async()=>{
 const files=fs.readdirSync(__dirname).filter(f=>/^(home|projects|work|about|resume|contact)-\d+\.json$/.test(f));
 const samples=files.map(f=>JSON.parse(fs.readFileSync(path.join(__dirname,f),'utf8')));
 const urls=[...new Set(samples.flatMap(d=>d.resources.map(r=>r.url)).filter(u=>typeof u==='string'&&u.startsWith('https://www.sunnypatel.net/')&&(/\.js(?:\?|$)|\.css(?:\?|$)|\.glb/.test(u))))];
 fs.mkdirSync(path.join(__dirname,'sources'),{recursive:true});
 const results=await Promise.all(urls.map(async url=>{try{const res=await fetch(url);if(!res.ok)throw new Error(res.status);const b=Buffer.from(await res.arrayBuffer());const name=new URL(url).pathname.split('/').pop();fs.writeFileSync(path.join(__dirname,'sources',name),b);return {url,file:'sources/'+name,bytes:b.length,status:res.status}}catch(e){return{url,error:String(e)}}}));
 fs.writeFileSync(path.join(__dirname,'source-index.json'),JSON.stringify(results,null,2));
 console.log(JSON.stringify(results.map(r=>({file:r.file,bytes:r.bytes,error:r.error})),null,2));
})();
