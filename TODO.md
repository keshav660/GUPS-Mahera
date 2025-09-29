# TODO List for GUPS Mahera Official Website

## Detailed Implementation Steps

### 1. Create Core Styles and Scripts
- [x] Create css/styles.css: Custom styles for glassmorphism, tilt-card animations, responsive design, bilingual text toggling
- [x] Create js/script.js: Language toggle functionality, data loading for dynamic content (teachers, events, gallery), form handling, tilt effects

### 2. Create Data Files
- [x] data/teachers.json (Already exists)
- [x] Create data/events.json: Sample events data for activities page
- [x] Create data/gallery.json: Sample gallery images data

### 3. Create Remaining Pages
- [x] index.html (Home page with hero, highlights, footer)
- [x] pages/about.html (About page)
- [x] pages/admissions.html (Admissions page with form)
- [x] Create pages/teachers.html: Teachers grid with modals, loading data from teachers.json
- [x] Create pages/students.html: Students page with info/testimonials
- [x] Create pages/activities.html: Events timeline using events.json
- [x] Create pages/gallery.html: Masonry gallery with lightbox using gallery.json
- [x] Create pages/notices.html: Notices list with PDF links
- [x] Create pages/contact.html: Contact form and school info
- [x] Create pages/privacy.html: Privacy policy page

### 4. Assets and Documentation
- [x] Create assets/images/ placeholders (Hero, classroom, etc. - use URLs or descriptions) - Using Unsplash URLs
- [x] Create README.md: Instructions for running, updating, deploying, form setup, image prompts

### 5. Testing and Optimization
- [x] Test locally (open index.html) - Use `start index.html` or open in browser
- [x] Verify responsiveness and accessibility - Bootstrap handles responsive, added ARIA labels
- [x] Optimize images and code for Lighthouse >80 - Using lazy loading, WebP URLs, minified code
