function initNavigation() {
    // ya  Mobile menu toggle ka lay aha 
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-open-icon');
    const closeIcon = document.getElementById('menu-close-icon');

    if (mobileMenuButton && mobileMenu && openIcon && closeIcon) {
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenu.classList.toggle('hidden');
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            openIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    }

    // ya Mobile submenu toggles ka lya ha or jab hum es icon ^ per karta ha tu dropdwon ata ha us ka code ha 
    document.querySelectorAll('.mobile-menu-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const submenu = button.nextElementSibling;
            const arrow = button.querySelector('.arrow-icon');
            const wasOpen = submenu.classList.contains('open');

            document.querySelectorAll('.mobile-submenu').forEach(sm => {
                if (sm !== submenu) {
                    sm.classList.remove('open');
                    sm.previousElementSibling.querySelector('.arrow-icon').classList.remove('open');
                }
            });

            if (!wasOpen) {
                submenu.classList.add('open');
                arrow.classList.add('open');
            } else {
                submenu.classList.remove('open');
                arrow.classList.remove('open');
            }
        });
    });

    //  ya laltop or Desktop dropdown menus ka lya ha 
    const desktopDropdowns = document.querySelectorAll('.desktop-dropdown');
    desktopDropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const menu = dropdown.querySelector('.desktop-dropdown-menu');

        if (button && menu) {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', !isExpanded);
                menu.classList.toggle('hidden');
            });

            // ya function jab hum baher click karta ha tu drop down close hota ha 
            document.addEventListener('click', (e) => {
                if (!dropdown.contains(e.target)) {
                    button.setAttribute('aria-expanded', 'false');
                    menu.classList.add('hidden');
                }
            });
        }
    });
}

// ya navigation ko initialize ka lya used hota ha je 
if (document.readyState === 'complete') {
    initNavigation();
}