// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.innerHTML = navLinks.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});








document.addEventListener('DOMContentLoaded', () => {

    const contactForm = document.getElementById('contactForm');
    const contactModal = document.getElementById('contactModal');
    const formButtons = document.querySelectorAll('.form-btn');

    /* OPEN FORM FROM ANY BUTTON */
    formButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (contactModal) {
                contactModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    /* FORM SUBMIT */
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();

                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                if (contactModal) {
                    contactModal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            }, 1500);
        });
    }

});




// Modal functionality
/*const openFormBtn = document.querySelector('.form-btn');
const contactModal = document.getElementById('contactModal');
const closeModalBtn = document.getElementById('closeModal');

if (openFormBtn && contactModal) {
    openFormBtn.addEventListener('click', () => {
        contactModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
}

if (closeModalBtn && contactModal) {
    closeModalBtn.addEventListener('click', () => {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside
if (contactModal) {
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}*/
/*
// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // In a real implementation, you would send this to your server
        // For now, we'll just show a success message
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            contactModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 1500);
    });
}
*/


// Get modal and form
const contactModal = document.getElementById('contactModal');
const contactForm = document.getElementById('contactForm');

// 1️⃣ OPEN FORM FROM ANY BUTTON
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('form-btn')) {
        contactModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
});

// 2️⃣ CLOSE MODAL (optional but recommended)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-modal') || e.target === contactModal) {
        contactModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// 3️⃣ HANDLE FORM SUBMISSION
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');

            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;

            contactModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 1500);
    });
}

// Animate elements on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll('.service-item, .stat-card, .team-card, .work-card').forEach(el => {
    observer.observe(el);
});

// Add active class to nav links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add hover effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('HopperCloud Creative Agency website loaded');

    // Add animation class to hero elements
    setTimeout(() => {
        document.querySelector('.hero-title').style.opacity = '1';
        document.querySelector('.hero-description').style.opacity = '1';
        document.querySelector('.hero-buttons').style.opacity = '1';
    }, 300);
});