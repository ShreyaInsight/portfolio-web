const fs=require('fs');
for(const f of ['32wy4538hz7au.js','3a5r6ln92fbj5.js','1rqugfi3q7sw4.js']){
const s=fs.readFileSync(__dirname+'/sources/'+f,'utf8');
for(const k of ['repeat:-1','yoyo','scrollTrigger:','whileInView:','initial:','Terminal','duration:']){
let pos=-1,count=0;while((pos=s.indexOf(k,pos+1))>=0&&count++<8)console.log(f,k,s.slice(Math.max(0,pos-140),pos+350));}}
