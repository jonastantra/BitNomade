document.addEventListener('DOMContentLoaded', () => {

    // ===== Component Rendering (only on pages that need it) =====
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');
    
    // Only render header/footer if containers exist (not on welcome.html)
    if (headerContainer) {
        headerContainer.innerHTML = `
    <header class="glass-header">
        <div class="container nav-container">
            <a href="index.html" class="logo hover:opacity-80 transition"
                style="text-decoration: none; color: inherit; display: flex; align-items: center; gap: 0.5rem;">
                <i class="ri-mic-ai-line"></i> VoiceScribe
            </a>
            <div class="nav-right">
                <button class="theme-toggle" id="theme-toggle" title="Switch theme" type="button">
                    <i class="ri-moon-line"></i>
                </button>
                <div class="lang-switcher">
                    <button class="lang-btn" data-lang="es" title="Español">🇪🇸</button>
                    <button class="lang-btn" data-lang="en" title="English">🇺🇸</button>
                    <button class="lang-btn" data-lang="zh" title="中文">🇨🇳</button>
                </div>
                <!-- Estado: no autenticado (visible por defecto) -->
                <div id="nav-logged-out">
                  <a href="https://chromewebstore.google.com/detail/voice-transcription-+-ai/pcklabcphhbkoghekdbpcplmjbdkfnbi"
                     target="_blank" class="btn-primary-sm" data-i18n="nav.cta">
                    Add to Chrome — Free
                  </a>
                  <button class="btn-google-nav" id="btn-google-signin">
                    <svg width="16" height="16" viewBox="0 0 18 18">
                      <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"/>
                      <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
                      <path fill="#FBBC05" d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"/>
                      <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 6.293C4.672 4.166 6.656 3.58 9 3.58z"/>
                    </svg>
                    Sign in
                  </button>
                </div>

                <!-- Estado: autenticado (oculto por defecto) -->
                <div id="nav-logged-in" style="display:none; align-items:center; gap:10px;">
                  <img id="nav-user-photo" src="" width="30" height="30" 
                       style="border-radius:50%; border:2px solid rgba(106,17,203,0.4);" alt="User">
                  <span id="nav-user-name" style="font-size:0.85rem; color:var(--text-secondary);"></span>
                  <button class="btn-secondary" id="btn-signout" style="padding:6px 12px; font-size:0.8rem;">
                    Sign out
                  </button>
                </div>
            </div>
        </div>
    </header>
        `;
    }

    if (footerContainer) {
        footerContainer.innerHTML = `
    <footer>
        <div class="container footer-content">
            <p data-i18n="footer.copy">&copy; 2026 VoiceScribe. All rights reserved.</p>
            <div class="footer-links">
                <a href="help.html" data-i18n="footer.help">Help</a>
                <a href="privacy.html" data-i18n="footer.privacy">Privacy</a>
                <a href="terms.html" data-i18n="footer.terms">Terms</a>
                <a href="mailto:jonastantra@gmail.com" data-i18n="footer.contact">Contact</a>
            </div>
        </div>
    </footer>
        `;
    }

    // ===== i18n (Internationalization) System =====
    const translations = {};
    let currentLang = 'en';

    // Load translations from external JSON files
    async function loadTranslations(lang) {
        try {
            const response = await fetch(`i18n/${lang}.json`);
            if (!response.ok) throw new Error(`Failed to load ${lang} translations`);
            const data = await response.json();
            translations[lang] = data;
            return true;
        } catch (error) {
            console.error(`Error loading ${lang} translations:`, error);
            return false;
        }
    }

    // Load all language files
    async function initializeTranslations() {
        const languages = ['en', 'es', 'zh'];
        for (const lang of languages) {
            await loadTranslations(lang);
        }
        
        const detectedLang = detectBrowserLanguage();
        switchLanguage(detectedLang);
    }

    function detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.split('-')[0].toLowerCase();
        
        if (translations[langCode]) {
            return langCode;
        }
        
        const savedLang = localStorage.getItem('voicescribe-lang');
        if (savedLang && translations[savedLang]) {
            return savedLang;
        }
        
        return 'en';
    }

    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, key) => acc && acc[key], obj);
    }

    function applyTranslations(data) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedValue(data, key);
            if (value) {
                if (el.hasAttribute('data-i18n-attr')) {
                    const attr = el.getAttribute('data-i18n-attr');
                    el.setAttribute(attr, value);
                } else if (el.tagName === 'TITLE') {
                    document.title = value;
                } else {
                    el.textContent = value;
                }
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const value = getNestedValue(data, key);
            if (value) {
                el.innerHTML = value;
            }
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            const value = getNestedValue(data, key);
            if (value) {
                el.setAttribute('alt', value);
            }
        });

        document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;

        if (currentLang === 'zh') {
            document.body.classList.add('lang-zh');
        } else {
            document.body.classList.remove('lang-zh');
        }
    }

    function setActiveLangButton(lang) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    function switchLanguage(lang) {
        const data = translations[lang];
        if (data) {
            currentLang = lang;
            applyTranslations(data);
            setActiveLangButton(lang);
            localStorage.setItem('voicescribe-lang', lang);
        } else {
            console.error('Translation not found for:', lang);
        }
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                switchLanguage(lang);
            }
        });
    });

    initializeTranslations();

    // ===== Theme Toggle =====
    const themeToggle = document.getElementById('theme-toggle');
    
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('voicescribe-theme', theme);
        
        if (themeToggle) {
            themeToggle.innerHTML = theme === 'dark' ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>';
        }
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
    
    const savedTheme = localStorage.getItem('voicescribe-theme') || 'light';
    setTheme(savedTheme);

    // ===== FAQ Accordion =====
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            if (!isActive) {
                faqItem.classList.add('active');
                const answer = faqItem.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // ===== Intersection Observer for Fade-in Animations =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, .fade-in').forEach(el => {
        observer.observe(el);
    });

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== Header Scroll Effect =====
    const header = document.querySelector('.glass-header');
    let lastScroll = 0;

    if (header) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'var(--header-bg)';
                header.style.boxShadow = 'none';
            }
            
            lastScroll = currentScroll;
        });
    }

    // ===== Auth State Listener =====
    if (window.VoiceScribeAuth) {
      window.VoiceScribeAuth.onAuthStateChanged((user) => {
        const loggedOut = document.getElementById('nav-logged-out');
        const loggedIn = document.getElementById('nav-logged-in');
        
        if (user) {
          loggedOut.style.display = 'none';
          loggedIn.style.display = 'flex';
          document.getElementById('nav-user-photo').src = user.photoURL || '';
          document.getElementById('nav-user-name').textContent = 
            user.displayName?.split(' ')[0] || 'User';
        } else {
          loggedOut.style.display = 'flex';
          loggedIn.style.display = 'none';
        }
      });

      document.getElementById('btn-google-signin')?.addEventListener('click', () => {
        window.VoiceScribeAuth.signInWithGoogle();
      });

      document.getElementById('btn-signout')?.addEventListener('click', () => {
        window.VoiceScribeAuth.signOutUser();
      });
    }
});
