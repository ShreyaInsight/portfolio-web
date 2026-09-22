const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..');
const assets={
 'sources/fonts/geist.woff2':'https://www.sunnypatel.net/_next/static/immutable/media/caa3a2e1cccd8315-s.p.0zr6hhvz-h9nw.woff2',
 'sources/fonts/geist-mono.woff2':'https://www.sunnypatel.net/_next/static/immutable/media/797e433ab948586e-s.p.1v5bejj26fx9h.woff2',
 'sources/fonts/hanken-grotesk.woff2':'https://www.sunnypatel.net/_next/static/immutable/media/c47649aa31f9e140-s.p.2rlmbw0a3_pri.woff2',
 'sources/vendor/gsap.min.js':'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js',
 'sources/vendor/ScrollTrigger.min.js':'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/ScrollTrigger.min.js',
 'sources/vendor/SplitText.min.js':'https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/SplitText.min.js',
 'sources/vendor/lenis.min.js':'https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js',
 'sources/vendor/three/build/three.module.js':'https://cdn.jsdelivr.net/npm/three@0.129.0/build/three.module.js',
 'sources/vendor/three/examples/jsm/loaders/GLTFLoader.js':'https://cdn.jsdelivr.net/npm/three@0.129.0/examples/jsm/loaders/GLTFLoader.js',
 'sources/vendor/three/examples/jsm/controls/OrbitControls.js':'https://cdn.jsdelivr.net/npm/three@0.129.0/examples/jsm/controls/OrbitControls.js',
 'sources/reference/basalt.webp':'https://www.sunnypatel.net/assets/shots/basalt.webp',
 'sources/reference/ats-screener.webp':'https://www.sunnypatel.net/assets/shots/ats-screener.webp',
 'sources/reference/sunnify.webp':'https://www.sunnypatel.net/assets/sunnify.webp',
 'sources/reference/netdash.webp':'https://www.sunnypatel.net/assets/shots/netdash.webp',
};
(async()=>{for(const [file,url]of Object.entries(assets)){const res=await fetch(url);if(!res.ok)throw Error(url+' '+res.status);const target=path.join(root,file);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,Buffer.from(await res.arrayBuffer()));console.log(file)} })();
