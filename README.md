# HAY2010 Portfolio Website

A complete, responsive website for HAY2010 - Travaux d'électrification & éclairage public.

## Quick Start

**View locally:**
```bash
npx serve
```
Then open http://localhost:3000

## Project Structure

```
hay2010_portfolio/
├── index.html          # Homepage (10 sections)
├── services.html       # Services page (6 service details)
├── projects.html       # Portfolio/case studies
├── qualifications.html # Certifications & qualifications
├── about.html          # Company history & values
├── contact.html        # Contact form (Formspree ready)
├── zones.html          # Service coverage areas
├── styles/
│   ├── main.css        # Design system & components
│   └── animations.css  # Scroll animations
└── scripts/
    └── main.js         # Navigation, animations, form validation
```

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Grid Blue | `#003B5C` | Primary, headers |
| Structural Green | `#1C6E3E` | Secondary |
| Volt Cyan | `#00A9E0` | Accent, CTAs |
| Soft Concrete | `#F5F7FA` | Backgrounds |
| Graphite | `#1A1F2A` | Text |

## Typography

- **Headings:** Space Grotesk (Google Fonts)
- **Body:** Inter (Google Fonts)

## Features

- ✅ Semantic HTML5
- ✅ Mobile-responsive (Grid + Flexbox)
- ✅ Scroll animations
- ✅ Working contact form (Formspree)
- ✅ SEO optimized
- ✅ Schema.org markup

## Deployment

### Option 1: Netlify (Recommended)
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `hay2010_portfolio` folder
3. Done! Your site is live.

### Option 2: Vercel
```bash
npx vercel --prod
```

### Option 3: GitHub Pages
1. Create a GitHub repository
2. Push the code
3. Go to Settings > Pages > Source: main branch

### Option 4: Surge.sh
```bash
npx surge . your-site-name.surge.sh
```

## Contact Form Setup

The contact form uses Formspree. To activate:
1. Create account at [formspree.io](https://formspree.io)
2. Create a new form
3. Replace `yourformid` in `contact.html` with your form ID

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## License

© 2024 HAY 2010. All rights reserved.
