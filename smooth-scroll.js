function createSmoothScroller() {
    if (window.siteScroller) return window.siteScroller;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return window.siteScroller = { scrollTo(target) { if(typeof target === 'string') target=document.querySelector(target); window.scrollTo({top:typeof target==='number'?target:target.getBoundingClientRect().top+scrollY-84,behavior:'instant'}); },stop(){},start(){} };
    }
    // One owner for the animation loop; no wheel timers or forced scrollTo calls.
    const lenis = new Lenis({
        autoRaf: false,
        anchors: true,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.1,
        touchMultiplier: 1,
        infinite: false
    });

    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    lenis.on('scroll', ScrollTrigger.update);
    window.siteScroller = lenis;

    return lenis;
}
