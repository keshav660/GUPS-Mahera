// GUPS Mahera Official Website - JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Language Toggle Functionality
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            const langEnElements = document.querySelectorAll('.lang-en');
            const langHiElements = document.querySelectorAll('.lang-hi');

            langEnElements.forEach(el => {
                el.style.display = el.style.display === 'none' ? 'block' : 'none';
            });

            langHiElements.forEach(el => {
                el.style.display = el.style.display === 'none' ? 'block' : 'none';
            });

            // Toggle button text
            this.textContent = this.textContent === 'हिंदी' ? 'English' : 'हिंदी';
        });
    }

    // Tilt Effect for Cards
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'rotateX(5deg) rotateY(5deg) scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'rotateX(0) rotateY(0) scale(1)';
        });
    });

    // Load Teachers Data
    if (document.getElementById('teachersGrid')) {
        loadTeachers();
    }

    // Load Events Data
    if (document.getElementById('eventsTimeline')) {
        loadEvents();
    }

    // Load Gallery Data
    if (document.getElementById('galleryGrid')) {
        loadGallery();
    }

    // Form Handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // For Formspree forms, let them submit normally
            if (this.action.includes('formspree.io')) {
                return;
            }

            e.preventDefault();
            // Custom form handling if needed
            alert('Form submitted successfully!');
        });
    });

    // Gallery Lightbox
    setupLightbox();
});

// Load Teachers Data
async function loadTeachers() {
    try {
        const response = await fetch('../data/teachers.json');
        const teachers = await response.json();
        const grid = document.getElementById('teachersGrid');

        teachers.forEach(teacher => {
            const card = document.createElement('div');
            card.className = 'col-md-4 mb-4';
            card.innerHTML = `
                <div class="card teacher-card glassmorphism h-100 text-center p-3" data-bs-toggle="modal" data-bs-target="#teacherModal" data-teacher='${JSON.stringify(teacher)}'>
                    <img src="${teacher.image}" alt="${teacher.name}" class="card-img-top rounded-circle mx-auto mt-3" style="width: 120px; height: 120px; object-fit: cover;" loading="lazy">
                    <div class="card-body">
                        <h5 class="card-title lang-en">${teacher.name}</h5>
                        <h5 class="card-title lang-hi" style="display: none;">${teacher.nameHi}</h5>
                        <p class="card-text lang-en">${teacher.bio.substring(0, 100)}...</p>
                        <p class="card-text lang-hi" style="display: none;">${teacher.bioHi.substring(0, 100)}...</p>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        // Setup modal
        setupTeacherModal();
    } catch (error) {
        console.error('Error loading teachers:', error);
    }
}

// Setup Teacher Modal
function setupTeacherModal() {
    const modal = new bootstrap.Modal(document.getElementById('teacherModal'));
    const modalTitle = document.getElementById('teacherModalLabel');
    const modalBody = document.getElementById('teacherModalBody');

    document.addEventListener('click', function(e) {
        if (e.target.closest('.teacher-card')) {
            const teacher = JSON.parse(e.target.closest('.teacher-card').dataset.teacher);
            modalTitle.innerHTML = `<span class="lang-en">${teacher.name}</span><span class="lang-hi" style="display: none;">${teacher.nameHi}</span>`;
            modalBody.innerHTML = `
                <img src="${teacher.image}" alt="${teacher.name}" class="img-fluid rounded-circle mb-3" style="width: 150px; height: 150px; object-fit: cover;">
                <p class="lang-en">${teacher.bio}</p>
                <p class="lang-hi" style="display: none;">${teacher.bioHi}</p>
            `;
            modal.show();
        }
    });
}

// Load Events Data
async function loadEvents() {
    try {
        const response = await fetch('../data/events.json');
        const events = await response.json();
        const timeline = document.getElementById('eventsTimeline');

        events.forEach(event => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="glassmorphism p-3">
                    <h5 class="lang-en">${event.title}</h5>
                    <h5 class="lang-hi" style="display: none;">${event.titleHi}</h5>
                    <p class="text-muted lang-en">${event.date}</p>
                    <p class="text-muted lang-hi" style="display: none;">${event.dateHi}</p>
                    <p class="lang-en">${event.description}</p>
                    <p class="lang-hi" style="display: none;">${event.descriptionHi}</p>
                </div>
            `;
            timeline.appendChild(item);
        });
    } catch (error) {
        console.error('Error loading events:', error);
    }
}

// Load Gallery Data
async function loadGallery() {
    try {
        const response = await fetch('../data/gallery.json');
        const images = await response.json();
        const grid = document.getElementById('galleryGrid');

        images.forEach(image => {
            const item = document.createElement('div');
            item.className = 'col-md-4 col-sm-6 mb-4';
            item.innerHTML = `
                <img src="${image.url}" alt="${image.alt}" class="img-fluid gallery-item rounded" loading="lazy" data-src="${image.url}">
            `;
            grid.appendChild(item);
        });

        // Re-setup lightbox after loading
        setupLightbox();
    } catch (error) {
        console.error('Error loading gallery:', error);
    }
}

// Setup Gallery Lightbox
function setupLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <img src="" alt="">
        <button class="btn btn-light position-absolute top-0 end-0 m-3" onclick="this.parentElement.classList.remove('show')">&times;</button>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('gallery-item')) {
            lightboxImg.src = e.target.dataset.src || e.target.src;
            lightbox.classList.add('show');
        }
    });

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.classList.contains('btn')) {
            lightbox.classList.remove('show');
        }
    });
}

// Utility function to get current language
function getCurrentLanguage() {
    const langToggle = document.getElementById('langToggle');
    return langToggle ? (langToggle.textContent === 'English' ? 'hi' : 'en') : 'en';
}
