/**
 * HAY2010 Main JavaScript
 * Mobile navigation, scroll animations, form handling
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initMobileNav();
  initScrollAnimations();
  initSmoothScroll();
  initHeaderScroll();
  initCounterAnimation();
  initFormValidation();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const navToggle = document.querySelector('.nav__toggle');
  const navList = document.querySelector('.nav__list');
  
  if (!navToggle || !navList) return;
  
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navList.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  });
  
  // Close nav when clicking a link
  navList.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navList.classList.remove('active');
      document.body.classList.remove('nav-open');
    });
  });
  
  // Close nav when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
      navToggle.classList.remove('active');
      navList.classList.remove('active');
      document.body.classList.remove('nav-open');
    }
  });
}

/**
 * Scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  const staggerElements = document.querySelectorAll('[data-stagger]');
  
  if (!animatedElements.length && !staggerElements.length) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animatedElements.forEach(el => observer.observe(el));
  staggerElements.forEach(el => observer.observe(el));
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Header styling on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
}

/**
 * Counter animation for stats
 */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;
  
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-counter'));
  const suffix = element.getAttribute('data-suffix') || '';
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  
  const updateCounter = () => {
    current += step;
    if (current < target) {
      element.textContent = Math.floor(current) + suffix;
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + suffix;
    }
  };
  
  updateCounter();
}

/**
 * Form validation and submission
 */
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
    
    // Real-time validation on blur
    form.querySelectorAll('input, textarea, select').forEach(field => {
      field.addEventListener('blur', () => validateField(field));
      field.addEventListener('input', () => clearError(field));
    });
  });
}

function handleFormSubmit(e) {
  const form = e.target;
  const fields = form.querySelectorAll('[required]');
  let isValid = true;
  
  fields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });
  
  if (!isValid) {
    e.preventDefault();
    // Focus first invalid field
    const firstInvalid = form.querySelector('.error');
    if (firstInvalid) {
      firstInvalid.querySelector('input, textarea, select')?.focus();
    }
  }
}

function validateField(field) {
  const wrapper = field.closest('.form-group');
  const value = field.value.trim();
  let isValid = true;
  let errorMessage = '';
  
  // Required check
  if (field.hasAttribute('required') && !value) {
    isValid = false;
    errorMessage = 'Ce champ est requis';
  }
  
  // Email validation
  if (isValid && field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Veuillez entrer une adresse email valide';
    }
  }
  
  // Phone validation
  if (isValid && field.type === 'tel' && value) {
    const phoneRegex = /^[\d\s\-\+\(\)]{8,}$/;
    if (!phoneRegex.test(value)) {
      isValid = false;
      errorMessage = 'Veuillez entrer un numéro de téléphone valide';
    }
  }
  
  // Update UI
  if (wrapper) {
    if (isValid) {
      clearError(field);
    } else {
      showError(field, errorMessage);
    }
  }
  
  return isValid;
}

function showError(field, message) {
  const wrapper = field.closest('.form-group');
  if (!wrapper) return;
  
  wrapper.classList.add('error');
  field.setAttribute('aria-invalid', 'true');
  
  let errorEl = wrapper.querySelector('.form-error');
  if (!errorEl) {
    errorEl = document.createElement('span');
    errorEl.className = 'form-error';
    errorEl.setAttribute('role', 'alert');
    wrapper.appendChild(errorEl);
  }
  errorEl.textContent = message;
}

function clearError(field) {
  const wrapper = field.closest('.form-group');
  if (!wrapper) return;
  
  wrapper.classList.remove('error');
  field.removeAttribute('aria-invalid');
  
  const errorEl = wrapper.querySelector('.form-error');
  if (errorEl) {
    errorEl.remove();
  }
}

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
