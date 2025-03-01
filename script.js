// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize EmailJS
  (function() {
    emailjs.init("asvC-7uOnfD-p7dTE");
  })();

  // Social links redirection
  const githubLink = document.getElementById('github-link');
  const linkedinLink = document.getElementById('linkedin-link');
  const emailLink = document.getElementById('email-link');

  if (githubLink) {
    githubLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://github.com/marwananjoul', '_blank');
    });
  }

  if (linkedinLink) {
    linkedinLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://linkedin.com/in/marwananjoul', '_blank');
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

  // Create country dropdown for phone input
  function setupPhoneInput() {
    const phoneInputContainer = document.getElementById('phoneInputContainer');
    if (!phoneInputContainer) return;

    // Clear any existing content
    phoneInputContainer.innerHTML = '';

    // Countries data - alphabetically sorted
    const countries = [
      { name: 'Afghanistan', code: 'af', dialCode: '+93' },
      { name: 'Albania', code: 'al', dialCode: '+355' },
      { name: 'Algeria', code: 'dz', dialCode: '+213' },
      { name: 'Andorra', code: 'ad', dialCode: '+376' },
      { name: 'Angola', code: 'ao', dialCode: '+244' },
      { name: 'Antigua and Barbuda', code: 'ag', dialCode: '+1' },
      { name: 'Argentina', code: 'ar', dialCode: '+54' },
      { name: 'Armenia', code: 'am', dialCode: '+374' },
      { name: 'Australia', code: 'au', dialCode: '+61' },
      { name: 'Austria', code: 'at', dialCode: '+43' },
      { name: 'Azerbaijan', code: 'az', dialCode: '+994' },
      { name: 'Bahamas', code: 'bs', dialCode: '+1' },
      { name: 'Bahrain', code: 'bh', dialCode: '+973' },
      { name: 'Bangladesh', code: 'bd', dialCode: '+880' },
      { name: 'Barbados', code: 'bb', dialCode: '+1' },
      { name: 'Belarus', code: 'by', dialCode: '+375' },
      { name: 'Belgium', code: 'be', dialCode: '+32' },
      { name: 'Belize', code: 'bz', dialCode: '+501' },
      { name: 'Benin', code: 'bj', dialCode: '+229' },
      { name: 'Bhutan', code: 'bt', dialCode: '+975' },
      { name: 'Bolivia', code: 'bo', dialCode: '+591' },
      { name: 'Bosnia and Herzegovina', code: 'ba', dialCode: '+387' },
      { name: 'Botswana', code: 'bw', dialCode: '+267' },
      { name: 'Brazil', code: 'br', dialCode: '+55' },
      { name: 'Brunei', code: 'bn', dialCode: '+673' },
      { name: 'Bulgaria', code: 'bg', dialCode: '+359' },
      { name: 'Burkina Faso', code: 'bf', dialCode: '+226' },
      { name: 'Burundi', code: 'bi', dialCode: '+257' },
      { name: 'Cambodia', code: 'kh', dialCode: '+855' },
      { name: 'Cameroon', code: 'cm', dialCode: '+237' },
      { name: 'Canada', code: 'ca', dialCode: '+1' },
      { name: 'Cape Verde', code: 'cv', dialCode: '+238' },
      { name: 'Central African Republic', code: 'cf', dialCode: '+236' },
      { name: 'Chad', code: 'td', dialCode: '+235' },
      { name: 'Chile', code: 'cl', dialCode: '+56' },
      { name: 'China', code: 'cn', dialCode: '+86' },
      { name: 'Colombia', code: 'co', dialCode: '+57' },
      { name: 'Comoros', code: 'km', dialCode: '+269' },
      { name: 'Congo', code: 'cg', dialCode: '+242' },
      { name: 'Costa Rica', code: 'cr', dialCode: '+506' },
      { name: 'Croatia', code: 'hr', dialCode: '+385' },
      { name: 'Cuba', code: 'cu', dialCode: '+53' },
      { name: 'Cyprus', code: 'cy', dialCode: '+357' },
      { name: 'Czech Republic', code: 'cz', dialCode: '+420' },
      { name: 'Denmark', code: 'dk', dialCode: '+45' },
      { name: 'Djibouti', code: 'dj', dialCode: '+253' },
      { name: 'Dominica', code: 'dm', dialCode: '+1' },
      { name: 'Dominican Republic', code: 'do', dialCode: '+1' },
      { name: 'Ecuador', code: 'ec', dialCode: '+593' },
      { name: 'Egypt', code: 'eg', dialCode: '+20' },
      { name: 'El Salvador', code: 'sv', dialCode: '+503' },
      { name: 'Equatorial Guinea', code: 'gq', dialCode: '+240' },
      { name: 'Eritrea', code: 'er', dialCode: '+291' },
      { name: 'Estonia', code: 'ee', dialCode: '+372' },
      { name: 'Ethiopia', code: 'et', dialCode: '+251' },
      { name: 'Fiji', code: 'fj', dialCode: '+679' },
      { name: 'Finland', code: 'fi', dialCode: '+358' },
      { name: 'France', code: 'fr', dialCode: '+33' },
      { name: 'Gabon', code: 'ga', dialCode: '+241' },
      { name: 'Gambia', code: 'gm', dialCode: '+220' },
      { name: 'Georgia', code: 'ge', dialCode: '+995' },
      { name: 'Germany', code: 'de', dialCode: '+49' },
      { name: 'Ghana', code: 'gh', dialCode: '+233' },
      { name: 'Greece', code: 'gr', dialCode: '+30' },
      { name: 'Grenada', code: 'gd', dialCode: '+1' },
      { name: 'Guatemala', code: 'gt', dialCode: '+502' },
      { name: 'Guinea', code: 'gn', dialCode: '+224' },
      { name: 'Guinea-Bissau', code: 'gw', dialCode: '+245' },
      { name: 'Guyana', code: 'gy', dialCode: '+592' },
      { name: 'Haiti', code: 'ht', dialCode: '+509' },
      { name: 'Honduras', code: 'hn', dialCode: '+504' },
      { name: 'Hungary', code: 'hu', dialCode: '+36' },
      { name: 'Iceland', code: 'is', dialCode: '+354' },
      { name: 'India', code: 'in', dialCode: '+91' },
      { name: 'Indonesia', code: 'id', dialCode: '+62' },
      { name: 'Iran', code: 'ir', dialCode: '+98' },
      { name: 'Iraq', code: 'iq', dialCode: '+964' },
      { name: 'Ireland', code: 'ie', dialCode: '+353' },
      { name: 'Israel', code: 'il', dialCode: '+972' },
      { name: 'Italy', code: 'it', dialCode: '+39' },
      { name: 'Jamaica', code: 'jm', dialCode: '+1' },
      { name: 'Japan', code: 'jp', dialCode: '+81' },
      { name: 'Jordan', code: 'jo', dialCode: '+962' },
      { name: 'Kazakhstan', code: 'kz', dialCode: '+7' },
      { name: 'Kenya', code: 'ke', dialCode: '+254' },
      { name: 'Kiribati', code: 'ki', dialCode: '+686' },
      { name: 'Kuwait', code: 'kw', dialCode: '+965' },
      { name: 'Kyrgyzstan', code: 'kg', dialCode: '+996' },
      { name: 'Laos', code: 'la', dialCode: '+856' },
      { name: 'Latvia', code: 'lv', dialCode: '+371' },
      { name: 'Lebanon', code: 'lb', dialCode: '+961' },
      { name: 'Lesotho', code: 'ls', dialCode: '+266' },
      { name: 'Liberia', code: 'lr', dialCode: '+231' },
      { name: 'Libya', code: 'ly', dialCode: '+218' },
      { name: 'Liechtenstein', code: 'li', dialCode: '+423' },
      { name: 'Lithuania', code: 'lt', dialCode: '+370' },
      { name: 'Luxembourg', code: 'lu', dialCode: '+352' },
      { name: 'Madagascar', code: 'mg', dialCode: '+261' },
      { name: 'Malawi', code: 'mw', dialCode: '+265' },
      { name: 'Malaysia', code: 'my', dialCode: '+60' },
      { name: 'Maldives', code: 'mv', dialCode: '+960' },
      { name: 'Mali', code: 'ml', dialCode: '+223' },
      { name: 'Malta', code: 'mt', dialCode: '+356' },
      { name: 'Marshall Islands', code: 'mh', dialCode: '+692' },
      { name: 'Mauritania', code: 'mr', dialCode: '+222' },
      { name: 'Mauritius', code: 'mu', dialCode: '+230' },
      { name: 'Mexico', code: 'mx', dialCode: '+52' },
      { name: 'Micronesia', code: 'fm', dialCode: '+691' },
      { name: 'Moldova', code: 'md', dialCode: '+373' },
      { name: 'Monaco', code: 'mc', dialCode: '+377' },
      { name: 'Mongolia', code: 'mn', dialCode: '+976' },
      { name: 'Montenegro', code: 'me', dialCode: '+382' },
      { name: 'Morocco', code: 'ma', dialCode: '+212' },
      { name: 'Mozambique', code: 'mz', dialCode: '+258' },
      { name: 'Myanmar', code: 'mm', dialCode: '+95' },
      { name: 'Namibia', code: 'na', dialCode: '+264' },
      { name: 'Nauru', code: 'nr', dialCode: '+674' },
      { name: 'Nepal', code: 'np', dialCode: '+977' },
      { name: 'Netherlands', code: 'nl', dialCode: '+31' },
      { name: 'New Zealand', code: 'nz', dialCode: '+64' },
      { name: 'Nicaragua', code: 'ni', dialCode: '+505' },
      { name: 'Niger', code: 'ne', dialCode: '+227' },
      { name: 'Nigeria', code: 'ng', dialCode: '+234' },
      { name: 'North Korea', code: 'kp', dialCode: '+850' },
      { name: 'North Macedonia', code: 'mk', dialCode: '+389' },
      { name: 'Norway', code: 'no', dialCode: '+47' },
      { name: 'Oman', code: 'om', dialCode: '+968' },
      { name: 'Pakistan', code: 'pk', dialCode: '+92' },
      { name: 'Palau', code: 'pw', dialCode: '+680' },
      { name: 'Palestine', code: 'ps', dialCode: '+970' },
      { name: 'Panama', code: 'pa', dialCode: '+507' },
      { name: 'Papua New Guinea', code: 'pg', dialCode: '+675' },
      { name: 'Paraguay', code: 'py', dialCode: '+595' },
      { name: 'Peru', code: 'pe', dialCode: '+51' },
      { name: 'Philippines', code: 'ph', dialCode: '+63' },
      { name: 'Poland', code: 'pl', dialCode: '+48' },
      { name: 'Portugal', code: 'pt', dialCode: '+351' },
      { name: 'Qatar', code: 'qa', dialCode: '+974' },
      { name: 'Romania', code: 'ro', dialCode: '+40' },
      { name: 'Russia', code: 'ru', dialCode: '+7' },
      { name: 'Rwanda', code: 'rw', dialCode: '+250' },
      { name: 'Saint Kitts and Nevis', code: 'kn', dialCode: '+1' },
      { name: 'Saint Lucia', code: 'lc', dialCode: '+1' },
      { name: 'Saint Vincent and the Grenadines', code: 'vc', dialCode: '+1' },
      { name: 'Samoa', code: 'ws', dialCode: '+685' },
      { name: 'San Marino', code: 'sm', dialCode: '+378' },
      { name: 'Sao Tome and Principe', code: 'st', dialCode: '+239' },
      { name: 'Saudi Arabia', code: 'sa', dialCode: '+966' },
      { name: 'Senegal', code: 'sn', dialCode: '+221' },
      { name: 'Serbia', code: 'rs', dialCode: '+381' },
      { name: 'Seychelles', code: 'sc', dialCode: '+248' },
      { name: 'Sierra Leone', code: 'sl', dialCode: '+232' },
      { name: 'Singapore', code: 'sg', dialCode: '+65' },
      { name: 'Slovakia', code: 'sk', dialCode: '+421' },
      { name: 'Slovenia', code: 'si', dialCode: '+386' },
      { name: 'Solomon Islands', code: 'sb', dialCode: '+677' },
      { name: 'Somalia', code: 'so', dialCode: '+252' },
      { name: 'South Africa', code: 'za', dialCode: '+27' },
      { name: 'South Korea', code: 'kr', dialCode: '+82' },
      { name: 'South Sudan', code: 'ss', dialCode: '+211' },
      { name: 'Spain', code: 'es', dialCode: '+34' },
      { name: 'Sri Lanka', code: 'lk', dialCode: '+94' },
      { name: 'Sudan', code: 'sd', dialCode: '+249' },
      { name: 'Suriname', code: 'sr', dialCode: '+597' },
      { name: 'Sweden', code: 'se', dialCode: '+46' },
      { name: 'Switzerland', code: 'ch', dialCode: '+41' },
      { name: 'Syria', code: 'sy', dialCode: '+963' },
      { name: 'Taiwan', code: 'tw', dialCode: '+886' },
      { name: 'Tajikistan', code: 'tj', dialCode: '+992' },
      { name: 'Tanzania', code: 'tz', dialCode: '+255' },
      { name: 'Thailand', code: 'th', dialCode: '+66' },
      { name: 'Timor-Leste', code: 'tl', dialCode: '+670' },
      { name: 'Togo', code: 'tg', dialCode: '+228' },
      { name: 'Tonga', code: 'to', dialCode: '+676' },
      { name: 'Trinidad and Tobago', code: 'tt', dialCode: '+1' },
      { name: 'Tunisia', code: 'tn', dialCode: '+216' },
      { name: 'Turkey', code: 'tr', dialCode: '+90' },
      { name: 'Turkmenistan', code: 'tm', dialCode: '+993' },
      { name: 'Tuvalu', code: 'tv', dialCode: '+688' },
      { name: 'Uganda', code: 'ug', dialCode: '+256' },
      { name: 'Ukraine', code: 'ua', dialCode: '+380' },
      { name: 'United Arab Emirates', code: 'ae', dialCode: '+971' },
      { name: 'United Kingdom', code: 'gb', dialCode: '+44' },
      { name: 'United States', code: 'us', dialCode: '+1' },
      { name: 'Uruguay', code: 'uy', dialCode: '+598' },
      { name: 'Uzbekistan', code: 'uz', dialCode: '+998' },
      { name: 'Vanuatu', code: 'vu', dialCode: '+678' },
      { name: 'Vatican City', code: 'va', dialCode: '+39' },
      { name: 'Venezuela', code: 've', dialCode: '+58' },
      { name: 'Vietnam', code: 'vn', dialCode: '+84' },
      { name: 'Yemen', code: 'ye', dialCode: '+967' },
      { name: 'Zambia', code: 'zm', dialCode: '+260' },
      { name: 'Zimbabwe', code: 'zw', dialCode: '+263' }
    ];

    // Create a dial code to country mapping for quick lookup
    const dialCodeMap = {};
    countries.forEach(country => {
      if (!dialCodeMap[country.dialCode]) {
        dialCodeMap[country.dialCode] = [];
      }
      dialCodeMap[country.dialCode].push(country);
    });

    // Create the main container
    const container = document.createElement('div');
    container.className = 'phone-input-wrapper';
    container.style.position = 'relative';
    container.style.width = '100%';

    // Create the phone input container
    const phoneInput = document.createElement('div');
    phoneInput.className = 'phone-input';

    // Create the country selector button
    const countrySelector = document.createElement('button');
    countrySelector.type = 'button';
    countrySelector.className = 'country-code';
    countrySelector.id = 'countrySelector';
    countrySelector.style.display = 'flex';
    countrySelector.style.alignItems = 'center';
    countrySelector.style.gap = '5px';
    countrySelector.style.padding = '0 10px';
    countrySelector.style.backgroundColor = '#f5f5f5';
    countrySelector.style.border = 'none';
    countrySelector.style.borderRight = '2px solid #4a6cf7';
    countrySelector.style.height = '46px';
    countrySelector.style.cursor = 'pointer';

    // Default country (United States)
    const defaultCountry = countries.find(country => country.code === 'us') || countries[0];
    
    // Create flag element
    const flagElement = document.createElement('span');
    flagElement.className = 'flag-icon';
    flagElement.innerHTML = `<img src="https://flagcdn.com/16x12/${defaultCountry.code}.png" alt="${defaultCountry.name}" />`;
    
    // Create dial code element
    const dialCodeElement = document.createElement('span');
    dialCodeElement.textContent = defaultCountry.dialCode;
    dialCodeElement.id = 'selected-dial-code';
    
    // Create dropdown arrow
    const arrowElement = document.createElement('span');
    arrowElement.innerHTML = '▼';
    arrowElement.style.fontSize = '10px';
    arrowElement.style.marginLeft = '5px';
    
    // Append elements to country selector
    countrySelector.appendChild(flagElement);
    countrySelector.appendChild(dialCodeElement);
    countrySelector.appendChild(arrowElement);
    
    // Create phone number input
    const phoneNumberInput = document.createElement('input');
    phoneNumberInput.type = 'tel';
    phoneNumberInput.id = 'phone';
    phoneNumberInput.name = 'phone';
    phoneNumberInput.placeholder = 'Enter phone number';
    phoneNumberInput.required = true;
    phoneNumberInput.style.border = 'none';
    phoneNumberInput.style.flex = '1';
    phoneNumberInput.style.height = '46px';
    phoneNumberInput.style.padding = '0 10px';
    phoneNumberInput.style.outline = 'none';
    
    // Create country dropdown
    const countryDropdown = document.createElement('div');
    countryDropdown.className = 'country-dropdown';
    countryDropdown.id = 'countryDropdown';
    countryDropdown.style.display = 'none';
    countryDropdown.style.position = 'absolute';
    countryDropdown.style.top = '46px';
    countryDropdown.style.left = '0';
    countryDropdown.style.zIndex = '1000';
    countryDropdown.style.maxHeight = '250px';
    countryDropdown.style.overflowY = 'auto';
    countryDropdown.style.width = '100%';
    countryDropdown.style.backgroundColor = 'white';
    countryDropdown.style.border = '2px solid #4a6cf7';
    countryDropdown.style.borderTop = 'none';
    countryDropdown.style.borderRadius = '0 0 6px 6px';
    countryDropdown.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    
    // Function to update the country selector
    function updateCountrySelector(country) {
      flagElement.innerHTML = `<img src="https://flagcdn.com/16x12/${country.code}.png" alt="${country.name}" />`;
      dialCodeElement.textContent = country.dialCode;
      
      // Hide dropdown
      countryDropdown.style.display = 'none';
    }
    
    // Add countries to dropdown
    countries.forEach(country => {
      const countryOption = document.createElement('div');
      countryOption.className = 'country-option';
      countryOption.dataset.dialCode = country.dialCode;
      countryOption.dataset.code = country.code;
      countryOption.style.display = 'flex';
      countryOption.style.alignItems = 'center';
      countryOption.style.padding = '10px 15px';
      countryOption.style.cursor = 'pointer';
      countryOption.style.transition = 'background-color 0.2s';
      countryOption.style.borderBottom = '1px solid #eee';
      
      countryOption.innerHTML = `
        <img src="https://flagcdn.com/16x12/${country.code}.png" alt="${country.name}" style="margin-right: 10px;" />
        <span style="flex: 1;">${country.name}</span>
        <span style="color: #666; font-weight: 500;">${country.dialCode}</span>
      `;
      
      countryOption.addEventListener('click', () => {
        updateCountrySelector(country);
        
        // Focus on phone input
        phoneNumberInput.focus();
      });
      
      countryOption.addEventListener('mouseover', () => {
        countryOption.style.backgroundColor = '#f0f5ff';
      });
      
      countryOption.addEventListener('mouseout', () => {
        countryOption.style.backgroundColor = 'transparent';
      });
      
      countryDropdown.appendChild(countryOption);
    });
    
    // Toggle dropdown on country selector click
    countrySelector.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Toggle dropdown visibility
      if (countryDropdown.style.display === 'none') {
        countryDropdown.style.display = 'block';
      } else {
        countryDropdown.style.display = 'none';
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      if (countryDropdown.style.display === 'block') {
        countryDropdown.style.display = 'none';
      }
    });
    
    // Prevent dropdown from closing when clicking inside it
    countryDropdown.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Handle direct dial code input
    phoneNumberInput.addEventListener('input', function(e) {
      const input = e.target.value.trim();
      
      // Check if input starts with a plus sign and might be a dial code
      if (input.startsWith('+')) {
        // Try to find a matching country
        for (const dialCode in dialCodeMap) {
          if (input.startsWith(dialCode)) {
            // If there are multiple countries with the same dial code, use the first one
            const matchedCountry = dialCodeMap[dialCode][0];
            
            // Update the country selector
            updateCountrySelector(matchedCountry);
            
            // If the input is exactly the dial code, clear it from the input field
            if (input === dialCode) {
              e.target.value = '';
            }
            
            break;
          }
        }
      }
    });
    
    // Append elements to phone input
    phoneInput.appendChild(countrySelector);
    phoneInput.appendChild(phoneNumberInput);
    
    // Append phone input to container
    container.appendChild(phoneInput);
    container.appendChild(countryDropdown);
    
    // Append container to phoneInputContainer
    phoneInputContainer.appendChild(container);
  }

  // Initialize phone input
  setupPhoneInput();

  // Form submission with EmailJS
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Create form status element if it doesn't exist
      let formStatus = document.getElementById('form-status');
      if (!formStatus) {
        formStatus = document.createElement('div');
        formStatus.id = 'form-status';
        formStatus.className = 'form-status';
        contactForm.appendChild(formStatus);
      }
      
      // Show sending status
      formStatus.textContent = 'Sending your message...';
      formStatus.className = 'form-status sending';
      formStatus.style.display = 'block';
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone') ? document.getElementById('phone').value : '';
      const message = document.getElementById('message').value;
      
      // Get selected country code
      const countryCodeElement = document.getElementById('selected-dial-code');
      const countryCode = countryCodeElement ? countryCodeElement.textContent : '';
      
      // Prepare template parameters
      const templateParams = {
        from_name: name,
        from_email: email,
        phone_number: phone ? `${countryCode} ${phone}` : 'Not provided',
        message: message
      };
      
      // Send email using EmailJS
      emailjs.send('123456789_123456789', 'template_rgq7cwg', templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          
          // Show success message
          formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
          formStatus.className = 'form-status success';
          
          // Reset form
          contactForm.reset();
          
          // Reset country selector to default (US)
          const defaultCountry = { code: 'us', dialCode: '+1', name: 'United States' };
          const flagElement = document.querySelector('.flag-icon');
          const dialCodeElement = document.getElementById('selected-dial-code');
          
          if (flagElement && dialCodeElement) {
            flagElement.innerHTML = `<img src="https://flagcdn.com/16x12/${defaultCountry.code}.png" alt="${defaultCountry.name}" />`;
            dialCodeElement.textContent = defaultCountry.dialCode;
          }
          
          // Hide success message after 5 seconds
          setTimeout(() => {
            formStatus.style.display = 'none';
          }, 5000);
        }, function(error) {
          console.log('FAILED...', error);
          
          // Show error message
          formStatus.textContent = 'Oops! Something went wrong. Please try again later.';
          formStatus.className = 'form-status error';
        });
    });
  }
});
