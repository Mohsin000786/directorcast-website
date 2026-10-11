document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const links = document.querySelectorAll('.mobile-link');

    // Only run if the menu elements actually exist on the page
    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        // Close menu when a link is clicked
        if (links.length > 0) {
            links.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                    menu.classList.remove('flex');
                });
            });
        }
    }
});