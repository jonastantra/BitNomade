document.addEventListener('DOMContentLoaded', () => {

    // ===== Component Rendering =====
    function renderHeader() {
        const headerContainer = document.getElementById('header-container');
        if (!headerContainer) return;

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
                <a href="https://chromewebstore.google.com/detail/voice-transcription-+-ai/pcklabcphhbkoghekdbpcplmjbdkfnbi"
                    target="_blank" class="btn-primary-sm" data-i18n="nav.cta">Install — It's Free</a>
            </div>
        </div>
    </header>
        `;
    }

    function renderFooter() {
        const footerContainer = document.getElementById('footer-container');
        if (!footerContainer) return;

        footerContainer.innerHTML = `
    <footer>
        <div class="container footer-content">
            <p data-i18n="footer.copy">&copy; 2026 VoiceScribe. Smart Productivity.</p>
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

    // Render components immediately
    renderHeader();
    renderFooter();

    // ===== i18n (Internationalization) System =====
    const translations = {
        es: {
            "meta": {
                "title": "VoiceScribe - Transcripción IA para Reuniones y Clases | Voz a Texto Gratis",
                "description": "VoiceScribe: La mejor extensión de Chrome para Transcripción de Voz a Texto con IA. Transcribe reuniones de Zoom, Google Meet y clases en tiempo real. Resúmenes automáticos gratis.",
                "keywords": "transcripción de voz, speech to text, resumen con IA, notas de reuniones, chrome extension, transcribir zoom, transcribir clases, dictado por voz, gratis"
            },
            "nav": {
                "cta": "Instalar — Es Gratis"
            },
            "hero": {
                "badge": "✨ Nueva Versión 1.4: La IA más rápida para Chrome",
                "title": "Pierdes el 80% de tus ideas. ",
                "titleGradient": "Transcríbelas con IA.",
                "subtitle": "Tu memoria no es infalible. <strong>VoiceScribe</strong> captura cada palabra de tus reuniones de <strong>Zoom</strong> y clases. <strong>Transcripción ilimitada</strong> y <strong>resúmenes inteligentes</strong> sin coste.",
                "cta": "Instalar Transcriptor Gratis",
                "subCta": "Funciona en Google Meet, YouTube y Micrófono.",
                "socialProof": "Más de <strong>10,000 profesionales</strong> ya no toman notas manuales.",
                "imgAlt": "Interfaz de VoiceScribe mostrando transcripción en vivo y resumen IA"
            },
            "problem": {
                "title": "🛑 Tu cerebro borra ideas cada 10 segundos",
                "text": "Escribir a mano es lento. Teclear rompe tu flujo. Con el <strong>Modo Sidebar</strong>, VoiceScribe es tu red de seguridad cognitiva: captura todo sin que tengas que dejar de prestar atención.",
                "link": "Ver cómo funciona el Modo Sidebar",
                "cardTitle": "Segundo Cerebro",
                "cardText": "Tu asistente personal, siempre activo."
            },
            "features": {
                "f1Title": "Escucha y Traduce (12 Idiomas)",
                "f1Text": "Rompe la barrera del idioma. Transcripción precisa en Español, Inglés, Francés, Japonés y más. Como un traductor 24/7.",
                "f2Title": "Resume con IA (GPT-4o)",
                "f2Text": "Convierte 1 hora de charla en 5 minutos de lectura. La IA destila lo vital para que tú te enfoques en lo importante.",
                "f3Title": "Privacidad No Negociable",
                "f3Text": "A diferencia de otros, procesamos todo localmente en tu navegador. Tus reuniones secretas siguen siendo secretas."
            },
            "testimonials": {
                "title": "El impacto en productividad",
                "t1Quote": "\"Antes perdía la mitad de la reunión tomando notas. Ahora VoiceScribe lo hace por mí y yo participo. Es mi ventaja competitiva.\"",
                "t1Name": "Ana M.",
                "t1Role": "Product Manager",
                "t2Quote": "\"La capacidad de resumir una clase de 2 horas en puntos clave es lo que me salvó el semestre. Debería cobrar por esto.\"",
                "t2Name": "Carlos R.",
                "t2Role": "Estudiante de Medicina"
            },
            "pricing": {
                "title": "Oferta de Lanzamiento v1.4",
                "badge": "GRATIS POR TIEMPO LIMITADO",
                "planName": "Acceso Total",
                "price": "$0",
                "pricePeriod": "/mes",
                "planDesc": "Sin tarjetas de crédito. Sin trucos.",
                "item1": "Transcripción Ilimitada",
                "item2": "12 Idiomas Nativos",
                "item3": "Modos Popup y Sidebar",
                "item4": "Resúmenes IA Ilimitados",
                "item5": "Privacidad Total (Local)",
                "cta": "Asegurar Mi Acceso Gratis"
            },
            "finalCta": {
                "title": "No dejes escapar otra idea brillante",
                "text": "Esta oferta gratuita es limitada para los primeros usuarios de la versión 1.4. Instálalo hoy y garantiza tu acceso de por vida.",
                "cta": "Instalar VoiceScribe Ahora",
                "note": "Compatible con Chrome, Brave y Edge."
            },
            "faq": {
                "title": "Preguntas Frecuentes",
                "q1": "¿Realmente es gratis?",
                "a1": "Sí, al 100%. Estamos en fase de crecimiento y queremos que todo el mundo pruebe VoiceScribe. Disfruta de todas las funciones PRO sin coste hoy.",
                "q2": "¿Qué tan precisa es la transcripción?",
                "a2": "Usamos la misma tecnología que Google (Web Speech API), logrando una precisión superior al <strong>95%</strong> en condiciones normales.",
                "q3": "¿Funciona con Zoom/Meet?",
                "a3": "Sí. VoiceScribe captura el audio de tu sistema o micrófono. Es perfecto para registrar videollamadas sin necesidad de bots intrusivos.",
                "q4": "¿Dónde van mis datos?",
                "a4": "A ninguna parte. <strong>Se quedan en tu dispositivo.</strong> Solo si pides un resumen a la IA, el texto se envía anonimizado para procesarlo y se borra al instante.",
                "q5": "¿Necesito pagar OpenAI?",
                "a5": "No. Nosotros cubrimos los costes de la IA en esta versión gratuita."
            },
            "support": {
                "title": "Soporte",
                "quickFixTitle": "Ayuda Rápida",
                "fix1Label": "Permisos:",
                "fix1Text": "Permite el acceso al micrófono en el navegador.",
                "fix2Label": "Internet:",
                "fix2Text": "Necesitas conexión para la máxima precisión.",
                "contactTitle": "Contacto",
                "contactText": "¿Dudas? Escríbenos directamente."
            },
            "footer": {
                "copy": "© 2026 VoiceScribe. Productividad Inteligente.",
                "help": "Ayuda",
                "privacy": "Privacidad",
                "terms": "Términos",
                "contact": "Contacto"
            },
            "help": {
                "title": "Guía de Uso y Solución de Problemas - Voice Scribe",
                "subtitle": "Esta guía te ayudará a entender el funcionamiento actual de Voice Scribe y cómo solucionar los problemas más comunes.",
                "aboutTitle": "¿De qué trata esta extensión?",
                "aboutText1": "<strong>Voice Scribe</strong> es una herramienta simplificada y potente diseñada para <strong>transcribir tu voz a texto en tiempo real</strong> directamente desde la barra lateral de tu navegador.",
                "aboutText2": "En nuestras últimas actualizaciones, hemos eliminado funciones innecesarias para centrarnos en lo esencial: <strong>rapidez, privacidad y facilidad de uso</strong>. La extensión utiliza la tecnología de reconocimiento de voz integrada en tu navegador para ofrecer una experiencia fluida sin necesidad de configuraciones complejas de servidores externos para la transcripción básica.",
                "useTitle": "¿Para qué sirve?",
                "useText": "Su uso principal es <strong>aumentar tu productividad</strong> permitiéndote dictar en lugar de escribir. Es ideal para:",
                "useList1": "<strong>Tomar notas rápidas</strong> mientras navegas por internet.",
                "useList2": "<strong>Redactar borradores</strong> de correos o mensajes usando tu voz.",
                "useList3": "<strong>Capturar ideas</strong> al vuelo sin tener que teclear.",
                "useList4": "<strong>Accesibilidad</strong>: Ayudar a quienes prefieren hablar en lugar de escribir.",
                "troubleTitle": "Problemas Comunes y Soluciones",
                "troubleDesc": "El problema más frecuente que enfrentan los usuarios con herramientas de voz es el acceso al micrófono.",
                "p1Title": "🔴 Problema 1: \"No me escucha\" o \"No inicia la grabación\"",
                "p1Desc": "Esto suele ocurrir porque el navegador o el sistema operativo ha bloqueado el acceso al micrófono por privacidad.",
                "solTitle": "Soluciones:",
                "p1s1Title": "Verificar Permisos del Sitio (Lo más común):",
                "p1s1l1": "Mira a la izquierda de la barra de direcciones (URL). Verás un <strong>icono de candado</strong> 🔒 o de configuración.",
                "p1s1l2": "Haz clic ahí y busca <strong>\"Micrófono\"</strong>.",
                "p1s1l3": "Asegúrate de que el interruptor esté en <strong>Actívalo</strong> o <strong>Permitir</strong>.",
                "p1s1l4": "<strong>IMPORTANTE:</strong> Recarga la página o cierra y vuelve a abrir la extensión para que el cambio surta efecto.",
                "p1s2Title": "Verificar Permisos del Sistema Operativo:",
                "p1s2l1": "<strong>Windows:</strong> Ve a <em>Configuración > Privacidad > Micrófono</em>. Asegúrate de que \"Permitir que las aplicaciones accedan al micrófono\" esté ACTIVADO y que tu navegador (Chrome/Edge) tenga permiso en la lista.",
                "p1s2l2": "<strong>macOS:</strong> Ve a <em>Preferencias del Sistema > Seguridad y Privacidad > Micrófono</em>. Asegúrate de que tu navegador tenga el recuadro marcado.",
                "p1s3Title": "Otro programa está usando el micrófono:",
                "p1s3Desc": "Si tienes Zoom, Teams o Skype abiertos, a veces \"secuestran\" el micrófono. Ciérralos e intenta de nuevo.",
                "p2Title": "🔇 Problema 2: \"Escribe cosas sin sentido o en otro idioma\"",
                "p2Cause": "<strong>Causa:</strong> La extensión está configurada para escuchar un idioma diferente al que estás hablando.",
                "p2Sol": "<strong>Solución:</strong>",
                "p2l1": "En la interfaz de Voice Scribe, busca el <strong>selector de idioma</strong> (generalmente un icono de bandera o un menú desplegable).",
                "p2l2": "Asegúrate de que coincida con el idioma en el que estás hablando (ej. Español vs Inglés). El reconocimiento de voz necesita saber qué esperar para ser preciso.",
                "p3Title": "📂 Problema 3: Uso en archivos locales (file://)",
                "p3Desc": "Si intentas usar la extensión sobre un PDF o archivo local abierto en el navegador:",
                "p3Cause": "<strong>Causa:</strong> Los navegadores bloquean extensiones en archivos locales por seguridad por defecto.",
                "p3Sol": "<strong>Solución:</strong>",
                "p3l1": "Ve a <code>chrome://extensions</code>.",
                "p3l2": "Busca <strong>Voice Scribe</strong>.",
                "p3l3": "Haz clic en <strong>Detalles</strong>.",
                "p3l4": "Activa la opción <strong>\"Permitir acceso a URL de archivo\"</strong>.",
                "tipsTitle": "Consejos Finales",
                "tip1": "<strong>Habla claro y a un ritmo normal.</strong> No necesitas gritar.",
                "tip2": "<strong>Usa un buen micrófono.</strong> Si usas el micrófono integrado de una laptop antigua, el ruido ambiental puede afectar la calidad. Unos auriculares sencillos mejoran mucho el resultado.",
                "tip3": "<strong>Si se detiene solo:</strong> El navegador a veces detiene la escucha si hay mucho silencio para ahorrar recursos. Solo vuelve a pulsar el botón de grabar."
            },
            "privacy": {
                "title": "Política de Privacidad — VoiceScribe",
                "desc": "Política de privacidad de VoiceScribe: qué datos se procesan, para qué, con quién se comparten y cómo ejercer tus derechos.",
                "h1": "Política de Privacidad",
                "lastUpdated": "Última actualización: 13 ago 2025",
                "intro": "VoiceScribe es una extensión/aplicación que transcribe tu voz a texto y, de forma opcional, genera resúmenes con IA usando tu propia clave de OpenAI. Priorizamos tu privacidad: no operamos servidores propios para procesar tu audio ni tus notas.",
                "shortTitle": "Resumen corto",
                "shortL1": "No recopilamos datos personales ni analizamos tu uso con herramientas de terceros.",
                "shortL2": "El audio del micrófono se procesa localmente por tu navegador y no se sube.",
                "shortL3": "El texto transcrito y los resúmenes se guardan localmente en tu dispositivo.",
                "shortL4": "Si habilitas la IA, el texto se envía a <code>api.openai.com</code> exclusivamente para generar el resumen, usando tu clave y vía HTTPS.",
                "shortL5": "No vendemos datos, no los transferimos para fines no relacionados y no realizamos actividades de perfilado crediticio.",
                "catsTitle": "Categorías de datos de usuario",
                "catsP": "Según las categorías de Google/Chrome Web Store:",
                "catsL1": "<strong>Información personal, salud, financiera, autenticación, comunicaciones personales, ubicación:</strong> no recopilamos.",
                "catsL2": "<strong>Historial web, actividad del usuario:</strong> no recopilamos ni rastreamos.",
                "catsL3": "<strong>Contenido de sitios web:</strong> solo el texto que tú dictas o pegas dentro de la app. Se almacena localmente y puedes borrarlo en cualquier momento.",
                "permsTitle": "Permisos y finalidad",
                "permsL1": "<strong>Micrófono (getUserMedia):</strong> convertir voz a texto localmente mediante APIs del navegador.",
                "permsL2": "<strong>Almacenamiento local (por ejemplo, chrome.storage/local o localStorage):</strong> guardar tus notas y resúmenes en tu dispositivo.",
                "permsL3": "<strong>Conexión a Internet:</strong> únicamente necesaria si activas la función opcional de resumen con IA.",
                "transfersTitle": "Transferencias y terceros",
                "transfersL1": "No compartimos tus datos con terceros para marketing ni analítica.",
                "transfersL2": "Proveedor opcional: <strong>OpenAI</strong> para generar resúmenes. Se envía el texto que selecciones; no enviamos audio. La clave es tuya y se gestiona localmente.",
                "retentionTitle": "Retención y control",
                "retentionL1": "Puedes eliminar todas las notas desde la opción “Limpiar Todo”.",
                "retentionL2": "Al desinstalar la app/extensión, el almacenamiento local relacionado se elimina.",
                "securityTitle": "Seguridad",
                "securityP": "Las comunicaciones con servicios externos (si se usan) ocurren sobre HTTPS. No mantenemos servidores propios con tus datos.",
                "certsTitle": "Certificaciones para la publicación",
                "certsL1": "No vendemos ni transferimos datos de usuarios a terceros, excepto lo estrictamente necesario para la función opcional de IA descrita arriba.",
                "certsL2": "No usamos ni transferimos datos para propósitos no relacionados con la funcionalidad principal.",
                "certsL3": "No usamos ni transferimos datos para determinar solvencia ni realizar actividades crediticias.",
                "kidsTitle": "Menores",
                "kidsP": "El producto no está dirigido específicamente a menores de 13 años y no recopilamos conscientemente datos de menores.",
                "changesTitle": "Cambios",
                "changesP": "Podemos actualizar esta política. Publicaremos la nueva versión en esta misma URL e indicaremos la fecha de vigencia.",
                "contactTitle": "Contacto",
                "contactP": "Para preguntas o solicitudes de privacidad, escribe a <a href=\"mailto:soporte@example.com\">soporte@example.com</a>.",
                "backLink": "← Volver a la página principal"
            },
            "terms": {
                "title": "Términos de Servicio — VoiceScribe",
                "desc": "Términos de servicio de VoiceScribe.",
                "h1": "Términos de Servicio",
                "intro": "Al usar VoiceScribe aceptas estos términos. Si no estás de acuerdo, no uses la aplicación.",
                "licenseTitle": "Licencia",
                "licenseP": "Te concedemos una licencia personal, no transferible y revocable para usar la app con su funcionalidad actual.",
                "usageTitle": "Uso aceptable",
                "usageL1": "No intentes descompilar ni eludir medidas de seguridad.",
                "usageL2": "No uses la app para infringir derechos de terceros o leyes aplicables.",
                "funcTitle": "Funcionalidad y disponibilidad",
                "funcP": "La app se ofrece “tal cual”. Podríamos actualizar o interrumpir funciones sin previo aviso.",
                "thirdPartyTitle": "Servicios de terceros",
                "thirdPartyP": "La función opcional de IA puede usar OpenAI. Tu uso se rige también por los términos del proveedor correspondiente.",
                "liabTitle": "Limitación de responsabilidad",
                "liabP": "En la medida permitida por ley, no seremos responsables por pérdidas indirectas, incidentales o consecuentes derivadas del uso de la app.",
                "contactTitle": "Contacto",
                "contactP": "soporte@example.com",
                "backLink": "← Volver a la página principal"
            },
            "welcome": {
                "title": "¡Bienvenido a VoiceScribe! - Configuración Inicial",
                "tagline": "Tu segundo cerebro ha sido instalado.",
                "heroH1": "Falta solo un paso...",
                "heroP": "Para que VoiceScribe funcione correctamente, necesitas <strong class=\"highlight\">fijarlo en tu barra de herramientas</strong>.",
                "step1Title": "Haz clic en el Puzzle 🧩",
                "step1P": "Busca el icono de \"Extensiones\" en la esquina superior derecha de Chrome.",
                "step1Alt": "Paso 1: Clic en icono de puzzle",
                "step2Title": "Fija VoiceScribe 📌",
                "step2P": "Encuentra <strong>VoiceScribe</strong> en la lista y haz clic en el icono de la <strong>chincheta</strong>.",
                "step2Alt": "Paso 2: Clic en icono de fijar",
                "step3Title": "¡Listo para usar! 🚀",
                "step3P": "Ahora verás el icono de VoiceScribe siempre visible. Haz clic para abrir el <strong>Sidebar</strong>.",
                "step3Alt": "Paso 3: Icono visible",
                "whyTitle": "¿Por qué fijarlo?",
                "why1": "Acceso instantáneo cuando la idea llega.",
                "why2": "No pierdas de vista si está grabando.",
                "why3": "Abre el Sidebar sin interrumpir tu navegación.",
                "ctaP": "Una vez fijado, haz tu primera prueba:",
                "ctaCmd": "Haz clic en el icono <i class=\"ri-mic-ai-line\"></i> y di:",
                "ctaText": "\"Hola VoiceScribe\"",
                "videoLink": " Ver video tutorial rápido (30s)"
            }
        },
        en: {
            "meta": {
                "title": "VoiceScribe - AI Transcription for Meetings & Lectures | Free Speech to Text",
                "description": "VoiceScribe: The best Chrome extension for AI-powered Speech to Text. Transcribe Zoom, Google Meet calls and lectures in real time. Free AI summaries.",
                "keywords": "voice transcription, speech to text, AI summary, meeting notes, chrome extension, transcribe zoom, transcribe lectures, voice typing, free"
            },
            "nav": {
                "cta": "Install — It's Free"
            },
            "hero": {
                "badge": "✨ New Version 1.4: The Fastest AI for Chrome",
                "title": "You lose 80% of your best ideas. ",
                "titleGradient": "Transcribe them with AI.",
                "subtitle": "Your memory isn't perfect. <strong>VoiceScribe</strong> captures every word of your <strong>Zoom</strong> meetings and lectures. <strong>Unlimited transcription</strong> and <strong>smart summaries</strong> at zero cost.",
                "cta": "Install Free Transcriber",
                "subCta": "Works with Google Meet, YouTube & Microphone.",
                "socialProof": "Over <strong>10,000 professionals</strong> have stopped taking manual notes.",
                "imgAlt": "VoiceScribe interface showing live transcription and AI summary"
            },
            "problem": {
                "title": "🛑 Your brain deletes ideas every 10 seconds",
                "text": "Handwriting is slow. Typing breaks your flow. With <strong>Sidebar Mode</strong>, VoiceScribe is your cognitive safety net: capturing everything while you stay focused on the conversation.",
                "link": "See Sidebar Mode in Action",
                "cardTitle": "Second Brain",
                "cardText": "Your personal assistant, always active."
            },
            "features": {
                "f1Title": "Listen & Translate (12 Langs)",
                "f1Text": "Break the language barrier. Accurate transcription in English, Spanish, French, Japanese, and more. Like a 24/7 personal translator.",
                "f2Title": "Summarize with AI (GPT-4o)",
                "f2Text": "Turn a 1-hour talk into a 5-minute read. AI distills the vital info so you can focus on what matters.",
                "f3Title": "Non-Negotiable Privacy",
                "f3Text": "Unlike others, we process everything locally in your browser. Your secret meetings stay secret."
            },
            "testimonials": {
                "title": "Productivity Impact",
                "t1Quote": "\"I used to lose half the meeting taking notes. Now VoiceScribe does it for me and I actually participate. It's my competitive advantage.\"",
                "t1Name": "Ana M.",
                "t1Role": "Product Manager",
                "t2Quote": "\"Being able to summarize a 2-hour lecture into key points saved my semester. I should be charging for this tool.\"",
                "t2Name": "Carlos R.",
                "t2Role": "Medical Student"
            },
            "pricing": {
                "title": "v1.4 Launch Offer",
                "badge": "FREE FOR A LIMITED TIME",
                "planName": "Full Access",
                "price": "$0",
                "pricePeriod": "/mo",
                "planDesc": "No credit cards. No tricks.",
                "item1": "Unlimited Transcription",
                "item2": "12 Native Languages",
                "item3": "Popup & Sidebar Modes",
                "item4": "Unlimited AI Summaries",
                "item5": "Total Privacy (Local)",
                "cta": "Secure My Free Access"
            },
            "finalCta": {
                "title": "Don't let another brilliant idea escape",
                "text": "This free offer is limited to early v1.4 adopters. Install today and guarantee your access for life.",
                "cta": "Install VoiceScribe Now",
                "note": "Compatible with Chrome, Brave and Edge."
            },
            "faq": {
                "title": "FAQ",
                "q1": "Is it really free?",
                "a1": "Yes, 100%. We are in a growth phase and want everyone to try VoiceScribe. Enjoy all PRO features at no cost today.",
                "q2": "How accurate is it?",
                "a2": "We use the same technology as Google (Web Speech API), achieving over <strong>95% accuracy</strong> in normal conditions.",
                "q3": "Does it work with Zoom/Meet?",
                "a3": "Yes. It captures your system audio or microphone. Perfect for recording video calls without intrusive bots.",
                "q4": "Where does my data go?",
                "a4": "Nowhere. <strong>It stays on your device.</strong> Only if you request an AI summary is text anonymously processed and immediately deleted.",
                "q5": "Do I need to pay OpenAI?",
                "a5": "No. We cover the AI costs in this free version."
            },
            "support": {
                "title": "Support",
                "quickFixTitle": "Quick Help",
                "fix1Label": "Permissions:",
                "fix1Text": "Allow microphone access in browser.",
                "fix2Label": "Internet:",
                "fix2Text": "Connection required for max accuracy.",
                "contactTitle": "Contact",
                "contactText": "Questions? Email us directly."
            },
            "footer": {
                "copy": "© 2026 VoiceScribe. Smart Productivity.",
                "help": "Help",
                "privacy": "Privacy",
                "terms": "Terms",
                "contact": "Contact"
            },
            "help": {
                "title": "Usage Guide & Troubleshooting - Voice Scribe",
                "subtitle": "This guide will help you understand how Voice Scribe works and how to solve common problems.",
                "aboutTitle": "What is this extension?",
                "aboutText1": "<strong>Voice Scribe</strong> is a simplified and powerful tool designed to <strong>transcribe your voice to text in real-time</strong> directly from your browser sidebar.",
                "aboutText2": "In our latest updates, we have removed unnecessary features to focus on the essentials: <strong>speed, privacy, and ease of use</strong>. The extension uses the speech recognition technology built into your browser to offer a smooth experience without complex external server configurations for basic transcription.",
                "useTitle": "What is it for?",
                "useText": "Its main use is to <strong>increase your productivity</strong> by allowing you to dictate instead of type. It is ideal for:",
                "useList1": "<strong>Taking quick notes</strong> while browsing the internet.",
                "useList2": "<strong>Drafting emails</strong> or messages using your voice.",
                "useList3": "<strong>Capturing ideas</strong> on the fly without having to type.",
                "useList4": "<strong>Accessibility</strong>: Helping those who prefer speaking over writing.",
                "troubleTitle": "Common Problems & Solutions",
                "troubleDesc": "The most common problem users face with voice tools is microphone access.",
                "p1Title": "🔴 Problem 1: \"It doesn't hear me\" or \"Recording doesn't start\"",
                "p1Desc": "This usually happens because the browser or operating system has blocked microphone access for privacy.",
                "solTitle": "Solutions:",
                "p1s1Title": "Verify Site Permissions (Most Common):",
                "p1s1l1": "Look to the left of the address bar (URL). You will see a <strong>lock icon</strong> 🔒 or settings.",
                "p1s1l2": "Click there and look for <strong>\"Microphone\"</strong>.",
                "p1s1l3": "Make sure the switch is set to <strong>On</strong> or <strong>Allow</strong>.",
                "p1s1l4": "<strong>IMPORTANT:</strong> Reload the page or close and reopen the extension for the change to take effect.",
                "p1s2Title": "Verify Operating System Permissions:",
                "p1s2l1": "<strong>Windows:</strong> Go to <em>Settings > Privacy > Microphone</em>. Make sure \"Allow apps to access your microphone\" is ON and that your browser (Chrome/Edge) has permission in the list.",
                "p1s2l2": "<strong>macOS:</strong> Go to <em>System Preferences > Security & Privacy > Microphone</em>. Make sure your browser has the box checked.",
                "p1s3Title": "Another program is using the microphone:",
                "p1s3Desc": "If you have Zoom, Teams, or Skype open, they sometimes \"hijack\" the microphone. Close them and try again.",
                "p2Title": "🔇 Problem 2: \"It writes nonsense or in another language\"",
                "p2Cause": "<strong>Cause:</strong> The extension is configured to listen to a different language than the one you are speaking.",
                "p2Sol": "<strong>Solution:</strong>",
                "p2l1": "In the Voice Scribe interface, look for the <strong>language selector</strong> (usually a flag icon or drop-down menu).",
                "p2l2": "Make sure it matches the language you are speaking (e.g., Spanish vs English). Speech recognition needs to know what to expect to be accurate.",
                "p3Title": "📂 Problem 3: Use on local files (file://)",
                "p3Desc": "If you try to use the extension on a PDF or local file open in the browser:",
                "p3Cause": "<strong>Cause:</strong> Browsers block extensions on local files by default for security.",
                "p3Sol": "<strong>Solution:</strong>",
                "p3l1": "Go to <code>chrome://extensions</code>.",
                "p3l2": "Search for <strong>Voice Scribe</strong>.",
                "p3l3": "Click on <strong>Details</strong>.",
                "p3l4": "Enable the option <strong>\"Allow access to file URLs\"</strong>.",
                "tipsTitle": "Final Tips",
                "tip1": "<strong>Speak clearly and at a normal pace.</strong> You don't need to shout.",
                "tip2": "<strong>Use a good microphone.</strong> If you use the built-in microphone of an old laptop, ambient noise can affect quality. Simple headphones improve the result significantly.",
                "tip3": "<strong>If it stops alone:</strong> The browser sometimes stops listening if there is a lot of silence to save resources. Just press the record button again."
            },
            "privacy": {
                "title": "Privacy Policy — VoiceScribe",
                "desc": "VoiceScribe Privacy Policy: what data is processed, for what purpose, with whom it is shared, and how to exercise your rights.",
                "h1": "Privacy Policy",
                "lastUpdated": "Last updated: Aug 13, 2025",
                "intro": "VoiceScribe is an extension/app that transcribes your voice to text and optionally generates AI summaries using your own OpenAI key. We prioritize your privacy: we do not operate our own servers to process your audio or notes.",
                "shortTitle": "Short Summary",
                "shortL1": "We do not collect personal data nor analyze your usage with third-party tools.",
                "shortL2": "Microphone audio is processed locally by your browser and is not uploaded.",
                "shortL3": "Transcribed text and summaries are stored locally on your device.",
                "shortL4": "If you enable AI, text is sent to <code>api.openai.com</code> exclusively to generate the summary, using your key and via HTTPS.",
                "shortL5": "We do not sell data, transfer it for unrelated purposes, nor conduct credit profiling activities.",
                "catsTitle": "User Data Categories",
                "catsP": "According to Google/Chrome Web Store categories:",
                "catsL1": "<strong>Personal info, health, financial, authentication, personal communications, location:</strong> we do not collect.",
                "catsL2": "<strong>Web history, user activity:</strong> we do not collect or track.",
                "catsL3": "<strong>Website content:</strong> only the text you dictate or paste into the app. It is stored locally and you can delete it at any time.",
                "permsTitle": "Permissions and Purpose",
                "permsL1": "<strong>Microphone (getUserMedia):</strong> convert voice to text locally via browser APIs.",
                "permsL2": "<strong>Local storage (e.g., chrome.storage/local or localStorage):</strong> save your notes and summaries on your device.",
                "permsL3": "<strong>Internet connection:</strong> only necessary if you activate the optional AI summary feature.",
                "transfersTitle": "Transfers and Third Parties",
                "transfersL1": "We do not share your data with third parties for marketing or analytics.",
                "transfersL2": "Optional provider: <strong>OpenAI</strong> for generating summaries. The text you select is sent; we do not send audio. The key is yours and managed locally.",
                "retentionTitle": "Retention and Control",
                "retentionL1": "You can delete all notes via the “Clear All” option.",
                "retentionL2": "Uninstalling the app/extension deletes related local storage.",
                "securityTitle": "Security",
                "securityP": "Communications with external services (if used) occur over HTTPS. We do not maintain our own servers with your data.",
                "certsTitle": "Certifications for Publication",
                "certsL1": "We do not sell or transfer user data to third parties, except as strictly necessary for the optional AI feature described above.",
                "certsL2": "We do not use or transfer data for purposes unrelated to the core functionality.",
                "certsL3": "We do not use or transfer data to determine creditworthiness or conduct lending activities.",
                "kidsTitle": "Children",
                "kidsP": "The product is not specifically directed at children under 13, and we do not knowingly collect data from children.",
                "changesTitle": "Changes",
                "changesP": "We may update this policy. We will publish the new version at this same URL and indicate the effective date.",
                "contactTitle": "Contact",
                "contactP": "For privacy questions or requests, write to <a href=\"mailto:soporte@example.com\">soporte@example.com</a>.",
                "backLink": "← Back to Home"
            },
            "terms": {
                "title": "Terms of Service — VoiceScribe",
                "desc": "VoiceScribe Terms of Service.",
                "h1": "Terms of Service",
                "intro": "By using VoiceScribe you accept these terms. If you do not agree, do not use the application.",
                "licenseTitle": "License",
                "licenseP": "We grant you a personal, non-transferable, and revocable license to use the app with its current functionality.",
                "usageTitle": "Acceptable Use",
                "usageL1": "Do not attempt to decompile or circumvent security measures.",
                "usageL2": "Do not use the app to infringe third-party rights or applicable laws.",
                "funcTitle": "Functionality and Availability",
                "funcP": "The app is offered “as is”. We may update or discontinue features without prior notice.",
                "thirdPartyTitle": "Third-Party Services",
                "thirdPartyP": "The optional AI function may use OpenAI. Your use is also governed by the respective provider's terms.",
                "liabTitle": "Limitation of Liability",
                "liabP": "To the extent permitted by law, we shall not be liable for indirect, incidental, or consequential losses derived from the use of the app.",
                "contactTitle": "Contact",
                "contactP": "soporte@example.com",
                "backLink": "← Back to Home"
            },
            "welcome": {
                "title": "Welcome to VoiceScribe! - Initial Setup",
                "tagline": "Your second brain has been installed.",
                "heroH1": "Just one step left...",
                "heroP": "For VoiceScribe to work correctly, you need to <strong class=\"highlight\">pin it to your toolbar</strong>.",
                "step1Title": "Click the Puzzle 🧩",
                "step1P": "Find the \"Extensions\" icon in the top right corner of Chrome.",
                "step1Alt": "Step 1: Click puzzle icon",
                "step2Title": "Pin VoiceScribe 📌",
                "step2P": "Find <strong>VoiceScribe</strong> in the list and click the <strong>pin</strong> icon.",
                "step2Alt": "Step 2: Click pin icon",
                "step3Title": "Ready to use! 🚀",
                "step3P": "Now you'll see the VoiceScribe icon always visible. Click to open the <strong>Sidebar</strong>.",
                "step3Alt": "Step 3: Icon visible",
                "whyTitle": "Why pin it?",
                "why1": "Instant access when an idea strikes.",
                "why2": "Don't lose sight of whether it's recording.",
                "why3": "Open the Sidebar without interrupting your browsing.",
                "ctaP": "Once pinned, do your first test:",
                "ctaCmd": "Click the icon <i class=\"ri-mic-ai-line\"></i> and say:",
                "ctaText": "\"Hello VoiceScribe\"",
                "videoLink": " Watch quick tutorial video (30s)"
            }
        },
        zh: {
            "meta": {
                "title": "VoiceScribe - AI语音转文字 | 免费会议转录与智能摘要",
                "description": "VoiceScribe：最好用的Chrome语音转文字扩展。实时转录Zoom、Google Meet会议和课堂内容，AI自动生成摘要，完全免费。",
                "keywords": "语音转文字, 实时转录, AI摘要, 会议记录, Chrome扩展, 转录Zoom, 课堂笔记, 语音输入, 免费"
            },
            "nav": {
                "cta": "安装 — 完全免费"
            },
            "hero": {
                "badge": "✨ 全新1.4版：Chrome上最快的AI转录工具",
                "title": "你正在流失80%的灵感。",
                "titleGradient": "用AI记录下来。",
                "subtitle": "你的记忆力并非完美无缺。<strong>VoiceScribe</strong> 能够捕捉 <strong>Zoom</strong> 会议和课堂的每一个字。<strong>无限转录</strong>和<strong>智能摘要</strong>，零成本。",
                "cta": "免费安装转录工具",
                "subCta": "兼容 Google Meet、YouTube 和麦克风。",
                "socialProof": "超过 <strong>10,000名专业人士</strong> 已停止手动记笔记。",
                "imgAlt": "VoiceScribe界面展示实时转录和AI摘要功能"
            },
            "problem": {
                "title": "🛑 你的大脑每10秒就在删除想法",
                "text": "手写太慢。打字打断思路。使用<strong>侧边栏模式</strong>，VoiceScribe是你的认知安全网：在你专注于对话时，自动捕捉一切。",
                "link": "查看侧边栏模式",
                "cardTitle": "第二大脑",
                "cardText": "你的私人助手，始终在线。"
            },
            "features": {
                "f1Title": "聆听并翻译（12种语言）",
                "f1Text": "打破语言障碍。支持中文、英语、法语、日语等精准转录。就像拥有24/7的私人翻译。",
                "f2Title": "GPT-4o智能摘要",
                "f2Text": "将1小时的谈话转化为5分钟的阅读材料。AI提炼精华，让你专注于重要事项。",
                "f3Title": "隐私不可妥协",
                "f3Text": "与众不同的是，我们在你的浏览器本地处理一切。你的秘密会议依然是秘密。"
            },
            "testimonials": {
                "title": "生产力飞跃",
                "t1Quote": "\"以前我开会有一半时间在记笔记。现在VoiceScribe帮我做了，我专注于参与。这是我的竞争优势。\"",
                "t1Name": "Ana M.",
                "t1Role": "产品经理",
                "t2Quote": "\"能够把2小时的课程总结成关键点，拯救了我的学期。这个工具应该收费才对。\"",
                "t2Name": "Carlos R.",
                "t2Role": "医学生"
            },
            "pricing": {
                "title": "1.4版上线特惠",
                "badge": "限时完全免费",
                "planName": "全部功能",
                "price": "$0",
                "pricePeriod": "/月",
                "planDesc": "无信用卡。无套路。",
                "item1": "无限转录",
                "item2": "12种语言支持",
                "item3": "弹窗和侧边栏模式",
                "item4": "无限AI摘要",
                "item5": "完全隐私（本地）",
                "cta": "锁定我的免费权限"
            },
            "finalCta": {
                "title": "别让另一个绝妙点子溜走",
                "text": "此免费优惠仅限1.4版早期用户。今天安装，终身免费使用。",
                "cta": "立即安装 VoiceScribe",
                "note": "兼容 Chrome、Brave 和 Edge 浏览器。"
            },
            "faq": {
                "title": "常见问题",
                "q1": "真的免费吗？",
                "a1": "是的，100%。我们处于增长阶段，希望每个人都能体验VoiceScribe。今天即可零成本享受所有PRO功能。",
                "q2": "转录有多准确？",
                "a2": "我们使用与Google相同的技术（Web Speech API），在正常条件下准确率超过 <strong>95%</strong>。",
                "q3": "支持Zoom/Meet吗？",
                "a3": "支持。它捕获系统音频或麦克风。非常适合记录视频通话，无需繁琐的机器人。",
                "q4": "我的数据去哪了？",
                "a4": "哪也没去。<strong>它留在你的设备上。</strong>只有在你请求AI摘要时，文本才会被匿名处理并立即删除。",
                "q5": "需要付钱给OpenAI吗？",
                "a5": "不需要。在这个免费版本中，我们承担AI成本。"
            },
            "support": {
                "title": "支持",
                "quickFixTitle": "快速帮助",
                "fix1Label": "权限：",
                "fix1Text": "允许浏览器访问麦克风。",
                "fix2Label": "网络：",
                "fix2Text": "需要连接以获得最高精度。",
                "contactTitle": "联系",
                "contactText": "有问题？直接发邮件给我们。"
            },
            "footer": {
                "copy": "© 2026 VoiceScribe. 智能生产力。",
                "help": "帮助",
                "privacy": "隐私",
                "terms": "条款",
                "contact": "联系"
            },
            "help": {
                "title": "Voice Scribe 使用指南和故障排除",
                "subtitle": "本指南将帮助您了解 Voice Scribe 的工作原理以及如何解决常见问题。",
                "aboutTitle": "这是什么扩展？",
                "aboutText1": "<strong>Voice Scribe</strong> 是一款简洁而强大的工具，专为在浏览器侧边栏<strong>实时将语音转录为文本</strong>而设计。",
                "aboutText2": "在最新更新中，我们删除了不必要的功能，专注于核心：<strong>速度、隐私和易用性</strong>。该扩展使用浏览器内置的语音识别技术，无需为基础转录配置复杂的外部服务器，即可提供流畅体验。",
                "useTitle": "它有什么用？",
                "useText": "其主要用途是通过允许您口述而非打字来<strong>提高生产力</strong>。适用于：",
                "useList1": "上网时<strong>快速记笔记</strong>。",
                "useList2": "用声音<strong>起草邮件</strong>或信息。",
                "useList3": "无需打字<strong>即时捕捉灵感</strong>。",
                "useList4": "<strong>无障碍辅助</strong>：帮助那些喜欢说话而不是打字的人。",
                "troubleTitle": "常见问题与解决方案",
                "troubleDesc": "用户在使用语音工具时最常遇到的问题是麦克风权限。",
                "p1Title": "🔴 问题 1：“它听不到我说话”或“无法开始录音”",
                "p1Desc": "这通常是因为浏览器或操作系统为了隐私而阻止了麦克风访问。",
                "solTitle": "解决方案：",
                "p1s1Title": "检查网站权限（最常见）：",
                "p1s1l1": "查看地址栏 (URL) 左侧。您会看到一个<strong>锁形图标</strong> 🔒 或设置。",
                "p1s1l2": "点击它并找到<strong>“麦克风”</strong>。",
                "p1s1l3": "确保开关处于<strong>开启</strong>或<strong>允许</strong>状态。",
                "p1s1l4": "<strong>重要提示：</strong> 刷新页面或关闭并重新打开扩展程序以使更改生效。",
                "p1s2Title": "检查操作系统权限：",
                "p1s2l1": "<strong>Windows：</strong> 转到 <em>设置 > 隐私 > 麦克风</em>。确保“允许应用访问您的麦克风”已开启，并且列表中包含您的浏览器（Chrome/Edge）。",
                "p1s2l2": "<strong>macOS：</strong> 转到 <em>系统偏好设置 > 安全性与隐私 > 麦克风</em>。确保您的浏览器已被勾选。",
                "p1s3Title": "其他程序正在使用麦克风：",
                "p1s3Desc": "如果您打开了 Zoom、Teams 或 Skype，它们有时会“劫持”麦克风。关闭它们并重试。",
                "p2Title": "🔇 问题 2：“它写出的内容没有意义或变成其他语言”",
                "p2Cause": "<strong>原因：</strong> 扩展程序配置的听写语言与您所说的语言不同。",
                "p2Sol": "<strong>解决方案：</strong>",
                "p2l1": "在 Voice Scribe 界面中，找到<strong>语言选择器</strong>（通常是一个旗帜图标或下拉菜单）。",
                "p2l2": "确保它与您所说的语言匹配（例如，中文 vs 英语）。语音识别需要知道预期的语言才能准确识别。",
                "p3Title": "📂 问题 3：在本地文件 (file://) 上使用",
                "p3Desc": "如果您尝试在浏览器中打开的 PDF 或本地文件上使用该扩展：",
                "p3Cause": "<strong>原因：</strong> 浏览器默认出于安全考虑阻止扩展程序访问本地文件。",
                "p3Sol": "<strong>解决方案：</strong>",
                "p3l1": "转到 <code>chrome://extensions</code>。",
                "p3l2": "搜索 <strong>Voice Scribe</strong>。",
                "p3l3": "点击 <strong>详细信息</strong>。",
                "p3l4": "启用<strong>“允许访问文件网址”</strong>选项。",
                "tipsTitle": "最终建议",
                "tip1": "<strong>说话清晰，语速正常。</strong> 不需要大喊大叫。",
                "tip2": "<strong>使用好的麦克风。</strong> 如果您使用旧笔记本电脑的内置麦克风，环境噪音可能会影响质量。简单的耳机可以显著改善结果。",
                "tip3": "<strong>如果它自动停止：</strong> 如果长时间静音，浏览器有时会停止监听以节省资源。只需再次按下录音按钮即可。"
            },
            "privacy": {
                "title": "隐私政策 — VoiceScribe",
                "desc": "VoiceScribe 隐私政策：处理哪些数据，目的为何，与谁共享以及如何行使您的权利。",
                "h1": "隐私政策",
                "lastUpdated": "最后更新：2025年8月13日",
                "intro": "VoiceScribe 是一个扩展/应用程序，可将您的语音转录为文本，并可选择使用您自己的 OpenAI 密钥生成 AI 摘要。我们优先考虑您的隐私：我们不通过自己的服务器处理您的音频或笔记。",
                "shortTitle": "简短摘要",
                "shortL1": "我们不收集个人数据，也不使用第三方工具分析您的使用情况。",
                "shortL2": "麦克风音频由您的浏览器本地处理，且不上传。",
                "shortL3": "转录文本和摘要本地存储在您的设备上。",
                "shortL4": "如果您启用 AI，文本将仅发送到 <code>api.openai.com</code> 以生成摘要，使用您的密钥并通过 HTTPS 传输。",
                "shortL5": "我们不出售数据，不为无关目的传输数据，也不进行信用剖析活动。",
                "catsTitle": "用户数据类别",
                "catsP": "根据 Google/Chrome 网上应用店类别：",
                "catsL1": "<strong>个人信息、健康、财务、身份验证、个人通信、位置：</strong>我们不收集。",
                "catsL2": "<strong>网络历史记录、用户活动：</strong>我们不收集或跟踪。",
                "catsL3": "<strong>网站内容：</strong>仅限您口述或粘贴到应用中的文本。它存储在本地，您可以随时删除。",
                "permsTitle": "权限和目的",
                "permsL1": "<strong>麦克风 (getUserMedia)：</strong>通过浏览器 API 在本地将语音转换为文本。",
                "permsL2": "<strong>本地存储（例如 chrome.storage/local 或 localStorage）：</strong>在您的设备上保存您的笔记和摘要。",
                "permsL3": "<strong>互联网连接：</strong>仅在您激活可选的 AI 摘要功能时才需要。",
                "transfersTitle": "传输和第三方",
                "transfersL1": "我们不与第三方共享您的数据用于营销或分析。",
                "transfersL2": "可选提供商：<strong>OpenAI</strong> 用于生成摘要。仅发送您选择的文本；我们不发送音频。密钥属于您并在本地管理。",
                "retentionTitle": "保留和控制",
                "retentionL1": "您可以通过“清除所有”选项删除所有笔记。",
                "retentionL2": "卸载应用程序/扩展程序会删除相关的本地存储。",
                "securityTitle": "安全性",
                "securityP": "与外部服务（如果使用）的通信通过 HTTPS 进行。我们不维护自己的服务器来存储您的数据。",
                "certsTitle": "发布认证",
                "certsL1": "我们不出售或向第三方传输用户数据，除了上述可选 AI 功能严格需要的之外。",
                "certsL2": "我们不使用或传输数据用于与核心功能无关的目的。",
                "certsL3": "我们不使用或传输数据来确定信用度或进行借贷活动。",
                "kidsTitle": "儿童",
                "kidsP": "该产品并非专门针对 13 岁以下儿童，我们不会有意收集儿童数据。",
                "changesTitle": "变更",
                "changesP": "我们也可能会更新此政策。我们将在同一 URL 发布新版本并注明生效日期。",
                "contactTitle": "联系",
                "contactP": "有关隐私问题或请求，请致信 <a href=\"mailto:soporte@example.com\">soporte@example.com</a>。",
                "backLink": "← 返回首页"
            },
            "terms": {
                "title": "服务条款 — VoiceScribe",
                "desc": "VoiceScribe 服务条款。",
                "h1": "服务条款",
                "intro": "使用 VoiceScribe 即表示您接受这些条款。如果您不同意，请勿使用该应用程序。",
                "licenseTitle": "许可",
                "licenseP": "我们授予您个人的、不可转让的、可撤销的许可，以使用该应用程序及其当前功能。",
                "usageTitle": "可接受的使用",
                "usageL1": "请勿尝试反编译或规避安全措施。",
                "usageL2": "请勿使用该应用程序侵犯第三方权利或适用法律。",
                "funcTitle": "功能和可用性",
                "funcP": "该应用程序按“原样”提供。我们可能会更新或中断功能，恕不另行通知。",
                "thirdPartyTitle": "第三方服务",
                "thirdPartyP": "可选的 AI 功能可能会使用 OpenAI。您的使用也受相应提供商的条款管辖。",
                "liabTitle": "责任限制",
                "liabP": "在法律允许的范围内，我们不对因使用该应用程序而产生的间接、附带或后果性损失承担责任。",
                "contactTitle": "联系",
                "contactP": "soporte@example.com",
                "backLink": "← 返回首页"
            },
            "welcome": {
                "title": "欢迎使用 VoiceScribe！- 初始设置",
                "tagline": "您的第二个大脑已安装。",
                "heroH1": "只差这一步...",
                "heroP": "为了让 VoiceScribe 正常工作，您需要<strong class=\"highlight\">将其固定到工具栏</strong>。",
                "step1Title": "点击拼图 🧩",
                "step1P": "在 Chrome 右上角找到“扩展程序”图标。",
                "step1Alt": "步骤 1：点击拼图图标",
                "step2Title": "固定 VoiceScribe 📌",
                "step2P": "在列表中找到 <strong>VoiceScribe</strong> 并点击<strong>图钉</strong>图标。",
                "step2Alt": "步骤 2：点击图钉图标",
                "step3Title": "可以使用了！🚀",
                "step3P": "现在您将看到 VoiceScribe 图标始终可见。点击打开<strong>侧边栏</strong>。",
                "step3Alt": "步骤 3：图标可见",
                "whyTitle": "为什么要固定？",
                "why1": "灵感来袭时即时访问。",
                "why2": "随时掌握是否正在录音。",
                "why3": "打开侧边栏而不中断浏览。",
                "ctaP": "固定后，进行第一次测试：",
                "ctaCmd": "点击图标 <i class=\"ri-mic-ai-line\"></i> 并说：",
                "ctaText": "“你好 VoiceScribe”",
                "videoLink": " 观看快速教程视频（30秒）"
            }
        }
    };

    let currentLang = 'en';

    function detectBrowserLanguage() {
        const saved = localStorage.getItem('voicescribe-lang');
        if (saved && ['es', 'en', 'zh'].includes(saved)) return saved;

        return 'en';
    }

    function getNestedValue(obj, path) {
        return path.split('.').reduce((acc, key) => acc && acc[key], obj);
    }

    function applyTranslations(data) {
        // textContent translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = getNestedValue(data, key);
            if (value) {
                // Check if it's a meta tag with data-i18n-attr
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

        // innerHTML translations (for elements with bold/strong tags)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            const value = getNestedValue(data, key);
            if (value) {
                el.innerHTML = value;
            }
        });

        // Alt attribute translations
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            const value = getNestedValue(data, key);
            if (value) {
                el.setAttribute('alt', value);
            }
        });

        // Update html lang attribute
        document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : currentLang;

        // Add/remove CJK class for font handling
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

    // Language switcher event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            if (lang !== currentLang) {
                switchLanguage(lang);
            }
        });
    });

    // Auto-detect and apply language on first load
    const detectedLang = detectBrowserLanguage();
    switchLanguage(detectedLang);

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

    const animatedElements = document.querySelectorAll('.glass-card, .problem-text, .hero h1, .hero p, .hero-cta-group');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== FAQ Accordion =====
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            if (!isActive) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });

    // ===== Theme Switcher Logic =====
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;

    function getPreferredTheme() {
        try {
            const savedTheme = localStorage.getItem('voicescribe-theme');
            if (savedTheme) {
                return savedTheme;
            }
        } catch (e) {
            console.warn('LocalStorage access denied or failed', e);
        }
        return 'light';
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('voicescribe-theme', theme);
        } catch (e) {
            console.warn('Unable to save theme to LocalStorage', e);
        }

        // Update icon if it exists
        if (themeIcon) {
            if (theme === 'dark') {
                themeIcon.classList.remove('ri-moon-line');
                themeIcon.classList.add('ri-sun-line');
            } else {
                themeIcon.classList.remove('ri-sun-line');
                themeIcon.classList.add('ri-moon-line');
            }
        }
    }

    // Initialize theme
    const initialTheme = getPreferredTheme();
    setTheme(initialTheme);

    // Toggle event
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            console.log('Theme toggle clicked');
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    } else {
        console.error('Theme toggle element not found');
    }



    console.log('VoiceScribe Landing Page Loaded');
});
