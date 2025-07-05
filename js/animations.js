// Additional Animations for Portfolio Website

// GSAP-like animation utilities
class AnimationController {
    constructor() {
        this.animations = [];
        this.isAnimating = false;
    }

    // Fade in animation
    fadeIn(element, duration = 600, delay = 0) {
        return new Promise((resolve) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = `all ${duration}ms ease-out ${delay}ms`;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 50);
            
            setTimeout(resolve, duration + delay);
        });
    }

    // Slide in from left
    slideInLeft(element, duration = 600, delay = 0) {
        return new Promise((resolve) => {
            element.style.opacity = '0';
            element.style.transform = 'translateX(-50px)';
            element.style.transition = `all ${duration}ms ease-out ${delay}ms`;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }, 50);
            
            setTimeout(resolve, duration + delay);
        });
    }

    // Slide in from right
    slideInRight(element, duration = 600, delay = 0) {
        return new Promise((resolve) => {
            element.style.opacity = '0';
            element.style.transform = 'translateX(50px)';
            element.style.transition = `all ${duration}ms ease-out ${delay}ms`;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateX(0)';
            }, 50);
            
            setTimeout(resolve, duration + delay);
        });
    }

    // Scale in animation
    scaleIn(element, duration = 600, delay = 0) {
        return new Promise((resolve) => {
            element.style.opacity = '0';
            element.style.transform = 'scale(0.8)';
            element.style.transition = `all ${duration}ms ease-out ${delay}ms`;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'scale(1)';
            }, 50);
            
            setTimeout(resolve, duration + delay);
        });
    }

    // Stagger animation for multiple elements
    async stagger(elements, animationType = 'fadeIn', staggerDelay = 100) {
        for (let i = 0; i < elements.length; i++) {
            const delay = i * staggerDelay;
            await this[animationType](elements[i], 600, delay);
        }
    }
}

// Initialize animation controller
const animController = new AnimationController();

// Enhanced scroll animations
function initEnhancedScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animationType = element.dataset.animation || 'fadeIn';
                const delay = parseInt(element.dataset.delay) || index * 100;
                
                animController[animationType](element, 800, delay);
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Observe elements with animation attributes
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(el => observer.observe(el));
}

// Hero section entrance animation
function initHeroAnimations() {
    const heroElements = [
        { element: '.hero-title', animation: 'fadeIn', delay: 200 },
        { element: '.hero-subtitle', animation: 'fadeIn', delay: 400 },
        { element: '.hero-description', animation: 'fadeIn', delay: 600 },
        { element: '.hero-buttons', animation: 'fadeIn', delay: 800 },
        { element: '.profile-container', animation: 'scaleIn', delay: 1000 }
    ];

    heroElements.forEach(({ element, animation, delay }) => {
        const el = document.querySelector(element);
        if (el) {
            animController[animation](el, 1000, delay);
        }
    });
}

// Floating animation for profile icons
function initFloatingIcons() {
    const icons = document.querySelectorAll('.icon-item');
    
    icons.forEach((icon, index) => {
        const delay = index * 0.5;
        icon.style.animationDelay = `${delay}s`;
        
        // Add hover effect
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Skill bars with enhanced animation
function initEnhancedSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const targetWidth = progressBar.style.width;
                const percentage = parseInt(targetWidth);
                
                // Animate from 0 to target percentage
                progressBar.style.width = '0%';
                progressBar.style.transition = 'width 2s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    progressBar.style.width = targetWidth;
                }, 100);
                
                // Add glow effect during animation
                progressBar.style.boxShadow = '0 0 20px rgba(37, 99, 235, 0.5)';
                
                setTimeout(() => {
                    progressBar.style.boxShadow = 'none';
                }, 2000);
                
                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

// Project cards with 3D hover effect
function init3DProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `
                perspective(1000px) 
                rotateX(${rotateX}deg) 
                rotateY(${rotateY}deg) 
                translateZ(20px)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Timeline animation with staggered entrance
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const delay = index * 200;
                
                animController.slideInRight(item, 800, delay);
                timelineObserver.unobserve(item);
            }
        });
    }, { threshold: 0.3 });
    
    timelineItems.forEach(item => timelineObserver.observe(item));
}

// Particle background effect
function initParticleBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 1;
    `;
    
    hero.appendChild(particleContainer);
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        animation: float ${duration}s ${delay}s infinite linear;
    `;
    
    container.appendChild(particle);
}

// Add particle animation CSS
const particleStyles = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;

// Cursor trail effect
function initCursorTrail() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(37, 99, 235, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        const dx = mouseX - cursorX;
        const dy = mouseY - cursorY;
        
        cursorX += dx * 0.1;
        cursorY += dy * 0.1;
        
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Hide cursor on mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    }
}

// Text reveal animation
function initTextReveal() {
    const textElements = document.querySelectorAll('.reveal-text');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.cssText = `
                display: inline-block;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.3s ease;
                transition-delay: ${index * 0.05}s;
            `;
            element.appendChild(span);
        });
        
        // Trigger animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    });
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(element);
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add particle styles
    const styleSheet = document.createElement('style');
    styleSheet.textContent = particleStyles;
    document.head.appendChild(styleSheet);
    
    // Initialize animations
    initHeroAnimations();
    initFloatingIcons();
    initEnhancedScrollAnimations();
    initEnhancedSkillBars();
    init3DProjectCards();
    initTimelineAnimations();
    initParticleBackground();
    initCursorTrail();
    initTextReveal();
    
    // Add animation classes to elements
    addAnimationClasses();
});

// Add animation classes to elements
function addAnimationClasses() {
    // Add data-animation attributes to elements
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        const elements = section.querySelectorAll('h2, h3, p, .btn');
        elements.forEach((el, elIndex) => {
            el.setAttribute('data-animation', 'fadeIn');
            el.setAttribute('data-delay', (index * 200 + elIndex * 100).toString());
        });
    });
    
    // Add reveal-text class to important text elements
    const importantTexts = document.querySelectorAll('.hero-title, .section-title');
    importantTexts.forEach(text => {
        text.classList.add('reveal-text');
    });
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll-based animations
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations can be added here
}, 16)); // ~60fps 