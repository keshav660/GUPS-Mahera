# GUPS Mahera Official Website

Official website for Govt Upper Primary School, Mahera, Tehri Garhwal, Uttarakhand.

## Overview

This is a bilingual (English/Hindi) responsive website for GUPS Mahera, featuring modern design with glassmorphism effects, tilt animations, and comprehensive information about the school.

## Features

- **Bilingual Support**: English and Hindi language toggle
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Modern UI**: Glassmorphism effects and smooth animations
- **Dynamic Content**: Teachers, events, and gallery loaded from JSON data
- **Contact Forms**: Integrated with Formspree for form submissions
- **Accessibility**: WCAG compliant with proper ARIA labels

## Pages

- **Home** (`index.html`): Hero section, highlights, and overview
- **About** (`pages/about.html`): School history, mission, and location
- **Admissions** (`pages/admissions.html`): Admission process and enquiry form
- **Teachers** (`pages/teachers.html`): Staff directory with modal details
- **Students** (`pages/students.html`): Student life and testimonials
- **Activities** (`pages/activities.html`): Events timeline and extracurricular info
- **Gallery** (`pages/gallery.html`): Photo gallery with lightbox
- **Notices** (`pages/notices.html`): School announcements and downloads
- **Contact** (`pages/contact.html`): Contact form and school information
- **Privacy** (`pages/privacy.html`): Privacy policy

## File Structure

```
gups-mahera/
├── index.html                 # Home page
├── css/
│   └── styles.css            # Custom styles
├── js/
│   └── script.js             # JavaScript functionality
├── data/
│   ├── teachers.json         # Teacher data
│   ├── events.json           # Events data
│   └── gallery.json          # Gallery images data
├── pages/                    # All sub-pages
│   ├── about.html
│   ├── admissions.html
│   ├── teachers.html
│   ├── students.html
│   ├── activities.html
│   ├── gallery.html
│   ├── notices.html
│   ├── contact.html
│   └── privacy.html
├── assets/                   # Static assets (to be created)
│   └── images/
│       ├── logo-placeholder.png
│       ├── favicon.ico
│       └── hero.webp
└── README.md
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, flexbox, grid
- **JavaScript (ES6+)**: DOM manipulation, fetch API
- **Bootstrap 5**: Responsive framework
- **Google Fonts**: Inter and Noto Sans Devanagari
- **Formspree**: Form handling
- **Unsplash**: Placeholder images

## Setup Instructions

### Local Development

1. **Clone or download** the project files to your local machine.

2. **Open in browser**: Simply open `index.html` in any modern web browser.

3. **No server required**: This is a static website that runs entirely in the browser.

### Form Setup

The contact and admission forms use Formspree for handling submissions:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace `your-form-id` in the form `action` attributes:
   - `pages/admissions.html`: Line with `action="https://formspree.io/f/your-form-id"`
   - `pages/contact.html`: Same line

### Image Assets

Current images use Unsplash URLs as placeholders. For production:

1. Replace placeholder URLs with actual school images
2. Optimize images for web (use WebP format, compress)
3. Update image paths in HTML and JSON files

#### Image Prompts for AI Generation

**Hero Image**: "Panoramic view of a beautiful school building in Tehri Garhwal, Uttarakhand, with mountains in background, sunny day, Indian school architecture"

**Logo**: "Simple, professional logo for GUPS Mahera school, with book and lamp icon, blue and gold colors"

**Teacher Portraits**: Use prompts from `data/teachers.json` imagePrompt fields

**Classroom/School Images**: "Modern Indian primary school classroom with students learning, bright and welcoming atmosphere"

**Sports/Activities**: "Indian school children playing traditional games in school playground, joyful expressions"

## Customization

### Colors
- Primary: Royal Blue (#4169e1)
- Secondary: Gold (#ffd700)
- Background: Dark blue gradient

### Fonts
- English: Inter (Google Fonts)
- Hindi: Noto Sans Devanagari (Google Fonts)

### Language Toggle
- Button in navigation toggles between English and Hindi content
- Uses CSS display property to show/hide language-specific elements

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Optimization

- Lazy loading for images
- Minified CSS and JS (recommended for production)
- WebP images for better compression
- CDN for external resources (Bootstrap, Google Fonts)

## Accessibility Features

- Semantic HTML structure
- ARIA labels for form elements
- Keyboard navigation support
- High contrast color scheme
- Alt text for all images
- Reduced motion support for animations

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select main branch as source
4. Site will be available at `https://username.github.io/repository-name`

### Netlify/Vercel
1. Connect GitHub repository
2. Deploy automatically on push
3. Custom domain support available

### Traditional Hosting
1. Upload all files to web server
2. Ensure server supports HTML, CSS, JS
3. No database or server-side processing required

## Maintenance

### Content Updates
- Edit HTML files directly for static content
- Update JSON files for dynamic content (teachers, events, gallery)
- Replace placeholder images with actual photos

### Adding New Pages
1. Create new HTML file in `pages/` directory
2. Follow existing structure (header, main, footer)
3. Add navigation link in all page headers
4. Update footer links if needed

### Form Management
- Monitor Formspree dashboard for submissions
- Export data regularly for backup

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Test locally
5. Submit pull request

## License

This project is open source. Feel free to use and modify as needed.

## Contact

For technical support or questions:
- Email: info@gupsmahera.edu.in
- Phone: +91-XXXXXXXXXX

---

**Last Updated:** October 2024
