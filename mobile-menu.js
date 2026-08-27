(() => {
    const header = document.querySelector('.mobile-header');
    if (!header) return;

    const toggle = header.querySelector('[data-menu-toggle]');
    const menu = header.querySelector('[data-mobile-menu]');
    const links = menu.querySelectorAll('a[href]');
    const navLinks = menu.querySelectorAll('nav a[href]');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href === currentPage) link.classList.add('is-active');
    });

    const setMenuState = (open) => {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        menu.hidden = !open;
        header.classList.toggle('is-open', open);
        document.body.classList.toggle('mobile-menu-open', open);
    };

    toggle.addEventListener('click', () => setMenuState(menu.hidden));
    links.forEach((link) => link.addEventListener('click', () => setMenuState(false)));
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !menu.hidden) {
            setMenuState(false);
            toggle.focus();
        }
    });
    setMenuState(false);
})();