# Estrategia de Posicionamiento Web (SEO) para BitNomade

Este documento detalla la configuración técnica para que Google identifique a **BitNomade** no solo como un portfolio, sino como una **Software House** relevante para términos de transaccionales y de productividad.

---

## 1. Palabras Clave Objetivo (Keywords)

Google debe entender que ofrecemos soluciones, no solo "código". Nos enfocaremos en keywords de **intención mixta (comercial + informacional)**.

### Primary Keywords (Alta Intención)
- *Extensiones de productividad para Chrome*
- *Software para freelancers y solopreneurs*
- *Descargar editor PDF privado*
- *Extraer leads de WhatsApp gratis*
- *Transcribir reuniones con IA*

### Secondary Keywords (Larga Cola - Long Tail)
- *Cómo automatizar ventas por WhatsApp*
- *Alternativa segura a Adobe Acrobat*
- *Mejorar retención de clientes con UX*
- *Auditoría de tracking para e-commerce*

---

## 2. Metadatos Optimizados para el Home

Esta es la configuración exacta que debe ir en el `<head>` de tu futura página HTML.

### Title Tag
`BitNomade | Herramientas de Productividad y Software Premium para Freelancers`

### Meta Description
`Descarga extensiones verificadas para Chrome: Editor PDF Privado, Transcriptor IA y Extractor de WhatsApp. BitNomade centraliza software de alto ROI para potenciar tu negocio digital.`

---

## 3. Schema Markup (Structured Data)

Este es el código secreto que le "habla" a Google en su idioma JSON-LD. Vamos a implementar dos esquemas: **Organization** (para la marca) y **SoftwareApplication** (para los productos).

### Bloque JSON-LD para el Home:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "BitNomade",
      "url": "https://bitnomade.com",
      "logo": "https://bitnomade.com/logo.png",
      "description": "Factoría de software premium y extensiones de navegador para productividad y ventas.",
      "sameAs": [
        "https://github.com/tuusuario",
        "https://linkedin.com/in/tuusuario"
      ]
    },
    {
      "@type": "SoftwareApplication",
      "name": "Ultimate PDF",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Chrome, Edge, Firefox",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "Snatch WhatsApp Exporter",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Chrome",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    }
  ]
}
```

---

## 4. Estrategia de Enlazado Interno (Link Juice)
Para que Google indexe rápido las nuevas extensiones que subas:

1.  **Footer "Fat"**: Un pie de página que liste todas las herramientas con su keyword principal como anchor text.
    *   Ej: `<a href="/ultimate-pdf">Editor PDF Privado</a>`
2.  **Breadcrumbs**: Navegación de migas de pan en cada página de producto.
    *   *Home > Extensiones > Productividad > VoiceScribe AI*

---

## 5. Próximos Pasos de Implementación
1.  **Generar el Sitemap.xml**: Listando todas las secciones actuales.
2.  **Configurar Robots.txt**: Permitir el rastreo de todo menos del área de administración.
3.  **Velocidad (Core Web Vitals)**: Asegurar que el HTML final cargue en < 1.5s para no perder ranking móvil.
