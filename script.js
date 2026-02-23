// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };

    try {
        // Send to backend
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
        } else {
            showNotification('Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        // Fallback: Show success message even without backend
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        this.reset();
    }
});

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
            z-index: 1000;
            animation: slideIn 0.3s ease-in;
        }
        
        .notification-success {
            background: #10b981;
        }
        
        .notification-error {
            background: #ef4444;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    if (!document.querySelector('style[data-notification="true"]')) {
        document.head.appendChild(style);
        style.setAttribute('data-notification', 'true');
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.project-card, .skill-card, .contact-item').forEach(el => {
    observer.observe(el);
});

// Project details modal: fetch projects once and show details on click
let PROJECTS = [];

async function loadProjects() {
    try {
        const res = await fetch('/projects.json');
        if (res.ok) PROJECTS = await res.json();
    } catch (e) {
        console.error('Failed to load projects', e);
    }
}

function createModal(project) {
    // overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    const modal = document.createElement('div');
    modal.className = 'modal-content';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => overlay.remove());

    const title = document.createElement('h3');
    title.textContent = project.title;

    const tech = document.createElement('p');
    tech.className = 'modal-tech';
    tech.textContent = project.tech.join(' • ');

    const img = document.createElement('img');
    img.src = project.screenshots && project.screenshots.length ? encodeURI(project.screenshots[0]) : '';
    img.alt = project.title;
    img.className = 'modal-image';

    const captionEl = document.createElement('p');
    captionEl.className = 'modal-caption';
    captionEl.textContent = project.screenshotCaptions && project.screenshotCaptions.length ? project.screenshotCaptions[0] : '';

    const desc = document.createElement('p');
    desc.className = 'modal-desc';
    desc.textContent = project.long;

    modal.appendChild(closeBtn);
    modal.appendChild(title);
    modal.appendChild(tech);
    modal.appendChild(img);
    modal.appendChild(captionEl);
    // thumbnails if multiple screenshots
    if (project.screenshots && project.screenshots.length > 1) {
        const thumbs = document.createElement('div');
        thumbs.className = 'modal-thumbnails';
        project.screenshots.forEach((s, idx) => {
            const t = document.createElement('img');
            t.className = 'modal-thumb';
            t.src = encodeURI(s);
            t.alt = project.title + ' ' + (idx + 1);
            t.addEventListener('click', () => {
                img.src = encodeURI(s);
                captionEl.textContent = (project.screenshotCaptions && project.screenshotCaptions[idx]) ? project.screenshotCaptions[idx] : '';
                // mark active
                Array.from(thumbs.children).forEach(c => c.classList.remove('active'));
                t.classList.add('active');
            });
            if (idx === 0) t.classList.add('active');
            thumbs.appendChild(t);
        });
        modal.appendChild(thumbs);
    }
    modal.appendChild(desc);

    overlay.appendChild(modal);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

    document.body.appendChild(overlay);
}

document.addEventListener('click', (e) => {
    const el = e.target.closest && e.target.closest('.project-link');
    if (!el) return;
    // If link navigates to project.html, allow navigation (open full page)
    const href = el.getAttribute('href');
    if (href && href.includes('project.html')) return;
    e.preventDefault();
    const id = parseInt(el.getAttribute('data-id'), 10);
    const proj = PROJECTS.find(p => p.id === id);
    if (proj) createModal(proj);
    else {
        // try loading then open
        loadProjects().then(() => {
            const p = PROJECTS.find(x => x.id === id);
            if (p) createModal(p);
        });
    }
});

// initial load
loadProjects();
