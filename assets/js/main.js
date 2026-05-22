/* =====================================================
   PORTFOLIO WEBSITE - MAIN JAVASCRIPT
   ===================================================== */

// Navigation Toggle for Mobile
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }

  // Close mobile menu when a link is clicked
  const navItems = document.querySelectorAll('.nav-links a');
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  });

  // Set active nav link based on current page
  setActiveNavLink();
});

// Set Active Navigation Link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Fade-in Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Apply fade-in to cards and sections
document.querySelectorAll('.card, .section, .vision-mission').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Form Validation for Contact Page
function validateForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const inputs = form.querySelectorAll('input, textarea, select');
  let isValid = true;

  inputs.forEach(input => {
    if (input.hasAttribute('required') && input.value.trim() === '') {
      input.classList.add('error');
      isValid = false;
    } else {
      input.classList.remove('error');
    }

    // Email validation
    if (input.type === 'email' && input.value.trim() !== '') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        input.classList.add('error');
        isValid = false;
      }
    }
  });

  return isValid;
}

// Handle Form Submission
function handleFormSubmit(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (validateForm(formId)) {
      // Show success message
      const successMsg = document.createElement('div');
      successMsg.className = 'success-message';
      successMsg.textContent = 'Thank you! Your message has been sent.';
      form.parentNode.insertBefore(successMsg, form);

      // Reset form
      form.reset();

      // Remove success message after 3 seconds
      setTimeout(() => {
        successMsg.remove();
      }, 3000);
    }
  });
}

// Experience Toggle Functionality
function setupExperienceToggle() {
  const toggleButtons = document.querySelectorAll('[data-toggle]');
  
  toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
      const target = this.getAttribute('data-toggle');
      const items = document.querySelectorAll('[data-experience]');

      toggleButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      items.forEach(item => {
        if (item.getAttribute('data-experience') === target) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.3s ease';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Lazy Load Images
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    images.forEach(img => {
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
    });
  }
}

// Initialize Lazy Loading
lazyLoadImages();

// Modal Functionality
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      const modalId = this.id;
      closeModal(modalId);
    }
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

if (scrollToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .error {
    border-color: #ff3b30 !important;
  }

  .success-message {
    background-color: #34c759;
    color: white;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 16px;
    animation: fadeIn 0.3s ease;
  }

  .modal {
    display: none;
    position: fixed;
    z-index: 2000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
  }

  .modal-content {
    background-color: white;
    padding: 32px;
    border-radius: 12px;
    max-width: 600px;
    width: 90%;
    position: relative;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  }

  .modal-close {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
    color: #999;
  }

  .modal-close:hover {
    color: #333;
  }

  #scrollToTopBtn {
    display: none;
    position: fixed;
    bottom: 32px;
    right: 32px;
    background-color: #0071e3;
    color: white;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    font-size: 20px;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(0, 113, 227, 0.4);
  }

  #scrollToTopBtn:hover {
    background-color: #0077ed;
    box-shadow: 0 8px 24px rgba(0, 113, 227, 0.5);
  }
`;
document.head.appendChild(style);

console.log('Portfolio website initialized');
