// BitNomade Storefront Main Script

document.addEventListener('DOMContentLoaded', () => {
    console.log('BitNomade Storefront Loaded');

    // --- Language Switcher Logic ---
    const langSwitcher = document.getElementById('lang-switcher');
    const defaultLang = 'en';
    const storedLang = localStorage.getItem('bitnomade_lang') || defaultLang;

    // Set initial state
    setLanguage(storedLang);
    langSwitcher.value = storedLang;

    // Event Listener
    langSwitcher.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        setLanguage(selectedLang);
        localStorage.setItem('bitnomade_lang', selectedLang);
    });

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        const data = translations[lang];

        if (!data) return;

        // Helper to safe access nested objects
        const getNestedValue = (obj, path) => {
            return path.split('.').reduce((prev, curr) => prev ? prev[curr] : null, obj);
        };

        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = getNestedValue(data, key);
            const targetAttr = el.getAttribute('data-i18n-attr'); // e.g., 'content' for meta tags

            if (translation) {
                if (targetAttr) {
                    el.setAttribute(targetAttr, translation);
                } else {
                    el.textContent = translation;
                }
            }
        });
    }

    // --- Existing UI Logic ---

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = 'var(--shadow-sm)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.boxShadow = 'none';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        }
    });
});
