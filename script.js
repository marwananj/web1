// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  };

  // Add event listeners to navigation buttons
  const skillsBtn = document.querySelector('.skills-btn');
  const testimonyBtn = document.querySelector('.testimony-btn');
  const contactBtn = document.querySelector('.contact-btn');

  if (skillsBtn) {
    skillsBtn.addEventListener('click', () => scrollToSection('skills'));
  }

  if (testimonyBtn) {
    testimonyBtn.addEventListener('click', () => scrollToSection('testimony'));
  }

  if (contactBtn) {
    contactBtn.addEventListener('click', () => scrollToSection('contact'));
  }

  // Form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const message = document.getElementById('message').value;
      
      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // Word count validation for message
      const wordCount = message.trim().split(/\s+/).length;
      if (wordCount > 300) {
        alert('Your message exceeds the 300 word limit');
        return;
      }
      
      // If validation passes, you would normally send the form data to a server
      // For this demo, we'll just show a success message
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }

  // Add animation to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.skill-item, .project-card, .section-title, .testimony-container, .contact-container');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animate-visible');
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial opacity for animated elements
  document.querySelectorAll('.skill-item, .project-card, .section-title:not(:first-child), .testimony-container, .contact-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  // Initial call to animate elements that are already in view
  animateOnScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', animateOnScroll);

  // Add hover effects to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      if (!this.classList.contains('animate-visible')) {
        this.style.transform = 'translateY(20px)';
        this.style.opacity = '0';
      } else {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
      }
    });
  });

  // Add typing effect to the main title
  const titleElement = document.querySelector('.title');
  if (titleElement) {
    const originalText = titleElement.textContent;
    titleElement.innerHTML = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < originalText.length) {
        titleElement.innerHTML += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else {
        // Add blinking cursor at the end
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        titleElement.appendChild(cursor);
        
        // Remove cursor after 3 seconds
        setTimeout(() => {
          cursor.remove();
        }, 3000);
      }
    };
    
    // Start the typing effect after a short delay
    setTimeout(typeWriter, 500);
  }
  
  // Add floating animation to skill icons
  const skillIcons = document.querySelectorAll('.skill-icon');
  skillIcons.forEach((icon, index) => {
    icon.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
  });
  
  // Add glow effect to buttons on hover
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 0 15px rgba(74, 108, 247, 0.5)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.boxShadow = 'none';
    });
  });
  
  // Add parallax effect to profile image
  const profileImage = document.querySelector('.profile-image-container');
  if (profileImage) {
    window.addEventListener('mousemove', (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 30;
      const y = (window.innerHeight / 2 - e.pageY) / 30;
      
      profileImage.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }

  // Country code selector for phone input
  const countrySelector = document.getElementById('countrySelector');
  const countryDropdown = document.getElementById('countryDropdown');
  const countryOptions = document.querySelectorAll('.country-option');
  const selectedFlag = document.getElementById('selectedFlag');
  const selectedCode = document.getElementById('selectedCode');

  if (countrySelector && countryDropdown) {
    // Toggle dropdown
    countrySelector.addEventListener('click', function() {
      countryDropdown.style.display = countryDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!countrySelector.contains(e.target) && !countryDropdown.contains(e.target)) {
        countryDropdown.style.display = 'none';
      }
    });

    // Select country
    countryOptions.forEach(option => {
      option.addEventListener('click', function() {
        const code = this.getAttribute('data-code');
        const country = this.getAttribute('data-country');
        
        selectedCode.textContent = code;
        selectedFlag.src = `https://flagcdn.com/w20/${country}.png`;
        selectedFlag.alt = country.toUpperCase();
        
        countryDropdown.style.display = 'none';
      });
    });
  }

  // Word counter for message
  const messageTextarea = document.getElementById('message');
  if (messageTextarea) {
    messageTextarea.addEventListener('input', function() {
      const wordCount = this.value.trim().split(/\s+/).filter(Boolean).length;
      const wordCountDisplay = document.createElement('div');
      wordCountDisplay.id = 'wordCount';
      wordCountDisplay.style.textAlign = 'right';
      wordCountDisplay.style.fontSize = '0.8rem';
      wordCountDisplay.style.color = '#777';
      wordCountDisplay.style.marginTop = '5px';
      
      const existingWordCount = document.getElementById('wordCount');
      if (existingWordCount) {
        existingWordCount.textContent = `${wordCount}/300 words`;
      } else {
        wordCountDisplay.textContent = `${wordCount}/300 words`;
        this.parentNode.appendChild(wordCountDisplay);
      }
      
      if (wordCount > 300) {
        document.getElementById('wordCount').style.color = 'red';
      } else {
        if (document.getElementById('wordCount')) {
          document.getElementById('wordCount').style.color = '#777';
        }
      }
    });
  }
});
