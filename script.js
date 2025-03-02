// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS
  (function() {
    emailjs.init("asvC-7uOnfD-p7dTE");
  })();

  // Add page load animation class
  document.body.classList.add('page-loaded');

  // Hide preloader after page loads
  window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
      setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 500);
      }, 500);
    }
  });

  // Social links redirection
  const githubLink = document.getElementById('github-link');
  const linkedinLink = document.getElementById('linkedin-link');
  const emailLink = document.getElementById('email-link');

  if (githubLink) {
    githubLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://github.com/marwananj', '_blank');
    });
  }

  if (linkedinLink) {
    linkedinLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://linkedin.com/in/marwananj', '_blank');
    });
  }

  if (emailLink) {
    emailLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'mailto:contact@marwananjoul.com';
    });
  }

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

  // Initialize international telephone input
  let iti;
  if (window.intlTelInput) {
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
      iti = window.intlTelInput(phoneInput, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/18.3.3/js/utils.js",
        initialCountry: "lb", // Default to Lebanon
        separateDialCode: true,
        preferredCountries: ["lb", "us", "gb", "ca", "au"],
        formatOnDisplay: true,
        autoPlaceholder: "aggressive"
      });

      // Add validation on input
      phoneInput.addEventListener('input', function() {
        validatePhoneNumber();
      });

      // Add validation on country change
      phoneInput.addEventListener('countrychange', function() {
        validatePhoneNumber();
      });

      // Restrict to numbers only
      phoneInput.addEventListener('keypress', function(e) {
        const charCode = e.which ? e.which : e.keyCode;
        // Allow only numbers (0-9) and special keys
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          e.preventDefault();
        }
      });

      // Handle paste events to filter non-numeric characters
      phoneInput.addEventListener('paste', function(e) {
        // Get pasted data
        let pastedData = (e.clipboardData || window.clipboardData).getData('text');
        // Filter out non-numeric characters
        pastedData = pastedData.replace(/[^0-9]/g, '');
        
        // Cancel the paste event and manually insert the filtered data
        e.preventDefault();
        
        // Get cursor position
        const selectionStart = this.selectionStart;
        const selectionEnd = this.selectionEnd;
        
        // Insert the filtered text
        this.value = 
          this.value.substring(0, selectionStart) + 
          pastedData + 
          this.value.substring(selectionEnd);
        
        // Move cursor to the end of the inserted text
        this.selectionStart = this.selectionEnd = selectionStart + pastedData.length;
      });
    }
  }

  // Function to validate phone number
  function validatePhoneNumber() {
    if (!iti) return true;
    
    const phoneInput = document.getElementById('phone');
    const errorMsg = document.getElementById('phone-error');
    
    if (!phoneInput || !errorMsg) return true;

    // Clear any existing error
    errorMsg.style.display = 'none';
    phoneInput.style.borderColor = '';

    // Skip validation if empty
    if (phoneInput.value.trim() === '') return true;

    // Check if the number is valid for the selected country
    if (!iti.isValidNumber()) {
      const errorCode = iti.getValidationError();
      let errorMessage = 'Invalid phone number';
      
      // Provide more specific error messages based on error code
      switch(errorCode) {
        case 1: // INVALID_COUNTRY_CODE
          errorMessage = 'Invalid country code';
          break;
        case 2: // TOO_SHORT
          errorMessage = 'Phone number is too short';
          break;
        case 3: // TOO_LONG
          errorMessage = 'Phone number is too long';
          break;
        case 4: // INVALID_FOR_COUNTRY_OR_REGION
          errorMessage = 'Invalid number for this country';
          break;
      }
      
      errorMsg.textContent = errorMessage;
      errorMsg.style.display = 'block';
      phoneInput.style.borderColor = '#ff3333';
      return false;
    }
    
    return true;
  }
  
  // Email validation function - only allow .com domains
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;
    return regex.test(email);
  }
  
  // Create or get email error message element
  function getEmailErrorElement() {
    let emailError = document.getElementById('email-error');
    if (!emailError) {
      emailError = document.createElement('div');
      emailError.id = 'email-error';
      emailError.className = 'error-message';
      emailError.style.color = '#ff3333';
      emailError.style.fontSize = '12px';
      emailError.style.marginTop = '5px';
      emailError.style.display = 'none';
      
      const emailInput = document.getElementById('email');
      if (emailInput) {
        emailInput.parentNode.appendChild(emailError);
      }
    }
    return emailError;
  }
  
  // Add email validation on input
  const emailInput = document.getElementById('email');
  if (emailInput) {
    emailInput.addEventListener('input', function() {
      const emailError = getEmailErrorElement();
      if (!validateEmail(this.value) && this.value.length > 0) {
        emailError.textContent = 'Please enter a valid email with .com domain';
        emailError.style.display = 'block';
        this.style.borderColor = '#ff3333';
      } else {
        emailError.style.display = 'none';
        this.style.borderColor = '';
      }
    });
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('form-status');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Validate email
      if (!validateEmail(email)) {
        const emailError = getEmailErrorElement();
        emailError.textContent = 'Please enter a valid email with .com domain';
        emailError.style.display = 'block';
        document.getElementById('email').style.borderColor = '#ff3333';
        return;
      }
      
      // Validate phone number
      if (!validatePhoneNumber()) {
        return;
      }
      
      // Get formatted phone number with country code
      const phoneNumber = iti ? iti.getNumber() : '';
      
      // Show sending status with loading spinner
      if (!formStatus) return;
      
      formStatus.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending message...';
      formStatus.className = 'form-status sending';
      formStatus.style.display = 'block';
      
      // Change submit button to loading state
      const submitBtn = contactForm.querySelector('.submit-btn');
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
      
      // Prepare template parameters
      const templateParams = {
        from_name: name,
        from_email: email,
        from_phone: phoneNumber || 'Not provided',
        message: message
      };
      
      // Send email using EmailJS with your specific service ID and template ID
      emailjs.send('123456789_123456789', 'template_rgq7cwg', templateParams)
        .then(function(response) {
          // Success message
          formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
          formStatus.className = 'form-status success';
          
          // Reset form
          contactForm.reset();
          
          // Reset submit button
          submitBtn.innerHTML = originalBtnText;
          submitBtn.disabled = false;
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            formStatus.style.display = 'none';
          }, 5000);
        }, function(error) {
          console.error("EmailJS Error:", error);
          // Error message
          formStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again.';
          formStatus.className = 'form-status error';
          
          // Reset submit button
          submitBtn.innerHTML = originalBtnText;
          submitBtn.disabled = false;
        });
    });
  }
});
