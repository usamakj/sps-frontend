document.addEventListener('DOMContentLoaded', () => {
    // Pricing cards functionality
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(clickedCard => {
        clickedCard.addEventListener('click', () => {
            pricingCards.forEach(card => {
                card.classList.remove('ring-2', 'ring-blue-400');
                card.classList.add('opacity-75');
            });
            clickedCard.classList.add('ring-2', 'ring-blue-400');
            clickedCard.classList.remove('opacity-75');
        });
    });
    
    // Feature tabs functionality
    const featureTabs = document.querySelectorAll('.feature-list-item');
    const featureDetails = document.querySelectorAll('[data-feature-tab-details]');
    featureTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            featureTabs.forEach(item => item.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter-tab');
            featureDetails.forEach(detail => {
                if (detail.getAttribute('data-feature-tab-details') === filter) {
                    detail.classList.remove('hidden');
                    detail.classList.add('animate-fade-in');
                } else {
                    detail.classList.add('hidden');
                }
            });
        });
    });

    // Package selection buttons
    document.querySelectorAll('.select-package').forEach(button => {
        button.addEventListener('click', () => {
            const targetUrl = button.dataset.target;
            if (targetUrl) window.location.href = targetUrl;
        });
    });

    // Load navigation and footer
    fetch('reusable_parts/navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navigation-container').innerHTML = data;
            // Initialize navigation after it's loaded
            if (typeof initNavigation === 'function') {
                initNavigation();
            }
        });

    fetch('reusable_parts/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
});