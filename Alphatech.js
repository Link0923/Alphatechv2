// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Scroll to next section function
function scrollToNextSection() {
    const currentSection = document.querySelector('section');
    const nextSection = currentSection.nextElementSibling;
    
    if (nextSection && nextSection.tagName.toLowerCase() === 'section') {
        nextSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Mobile menu functions
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger-btn');
    
    if (mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    } else {
        mobileMenu.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburger = document.querySelector('.hamburger-btn');
    
    mobileMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

// Typewriter effect for landing text
function typeWriter(text, elementId, speed = 100) {
    const element = document.getElementById(elementId);
    let i = 0;
    
    function typeChar() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);
        }
    }
    
    element.innerHTML = '';
    typeChar();
}

// Start typewriter effect when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter('Scaling Smart by Staying Connected', 'typewriter-text', 80);
    }, 500);
});

// Trigger contact typewriter when scrolling into view
window.addEventListener('scroll', () => {
    const contactSection = document.getElementById('contact');
    const contactTypewriterElement = document.getElementById('contact-typewriter-text');
    
    if (contactSection && contactTypewriterElement) {
        const contactRect = contactSection.getBoundingClientRect();
        
        // Trigger when contact section is 50% into view and hasn't been typed yet
        if (contactRect.top <= window.innerHeight * 0.5 && contactRect.bottom > 0 && !contactTypewriterElement.dataset.typed) {
            contactTypewriterElement.dataset.typed = 'true';
            setTimeout(() => {
                typeWriter('You want to scale?\nWe get shit done.', 'contact-typewriter-text', 80);
            }, 300);
        }
    }
});

// Jordan story functionality - replaces main content
(() => {
    let originalContent = null;
    let isStoryShown = false;

    function toggleStory() {
      const mainContent = document.querySelector('#intro .main-content');
      
      if (!isStoryShown) {
        // Save original content
        originalContent = mainContent.innerHTML;
        
        // Get story text from the original link
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = originalContent;
        const link = tempDiv.querySelector('.jordan-story-link[data-bubble]');
        
        // Get the raw text and replace literal \n with actual newlines
        let storyText = link.getAttribute('data-bubble');
        storyText = storyText.replace(/\\n/g, '\n'); // Convert literal \n to actual newlines
        
        // Now split by double newlines and create paragraphs
        const paragraphs = storyText
          .split('\n\n')
          .filter(para => para.trim())
          .map(para => {
            // Replace any remaining single newlines with spaces
            const cleaned = para.trim().replace(/\n/g, ' ');
            return `<p>${cleaned}</p>`;
          })
          .join('');
        
        // Create story content
        const storyHTML = `
          <div class="jordan-story-container">
            <button class="back-btn" id="backToMain">← Back</button>
            <h2>Jordan's Story</h2>
            <div class="story-content">
              ${paragraphs}
            </div>
          </div>
        `;
        
        // Replace content with story
        mainContent.innerHTML = storyHTML;
        isStoryShown = true;
        
        // Scroll to top of section
        document.getElementById('intro').scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Restore original content
        mainContent.innerHTML = originalContent;
        isStoryShown = false;
      }
    }

    // Use event delegation - attach to document, works even after content replacement
    document.addEventListener('click', (e) => {
      // Check for Jordan story link
      const link = e.target.closest('.jordan-story-link[data-bubble]');
      if (link) {
        e.preventDefault();
        toggleStory();
        return;
      }
      
      // Check for back button
      const backBtn = e.target.closest('#backToMain');
      if (backBtn) {
        e.preventDefault();
        toggleStory();
        return;
      } 
    });
    document.addEventListener("DOMContentLoaded", () => {
        // Remove the old event listener code - now using inline onclick
    });
})();

// Simple show more/show less function
function toggleText() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("moreText");
    const btnText = document.getElementById("seeMoreBtn");

    if (dots.style.display === "none") {
        // Currently expanded, so collapse
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.textContent = "Show more";
    } else {
        // Currently collapsed, so expand
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.textContent = "Show less";
    }
}

// Simple show more/show less function for offering 2
function toggleText2() {
    const dots = document.getElementById("dots-offering2");
    const moreText = document.getElementById("moreText-offering2");
    const btnText = document.getElementById("seeMoreBtn-offering2");

    if (dots.style.display === "none") {
        // Currently expanded, so collapse
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.textContent = "Show more";
    } else {
        // Currently collapsed, so expand
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.textContent = "Show less";
    }
}

// Simple show more/show less function for offering 3
function toggleText3() {
    const dots = document.getElementById("dots-offering3");
    const moreText = document.getElementById("moreText-offering3");
    const btnText = document.getElementById("seeMoreBtn-offering3");

    if (dots.style.display === "none") {
        // Currently expanded, so collapse
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.textContent = "Show more";
    } else {
        // Currently collapsed, so expand
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.textContent = "Show less";
    }
}

// Simple show more/show less function for offering 4
function toggleText4() {
    const dots = document.getElementById("dots-offering4");
    const moreText = document.getElementById("moreText-offering4");
    const btnText = document.getElementById("seeMoreBtn-offering4");

    if (dots.style.display === "none") {
        // Currently expanded, so collapse
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.textContent = "Show more";
    } else {
        // Currently collapsed, so expand
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.textContent = "Show less";
    }
}

// Simple show more/show less function for offering 3
function toggleText3() {
    const dots = document.getElementById("dots-offering3");
    const moreText = document.getElementById("moreText-offering3");
    const btnText = document.getElementById("seeMoreBtn-offering3");

    if (dots.style.display === "none") {
        // Currently expanded, so collapse
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.textContent = "Show more";
    } else {
        // Currently collapsed, so expand
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.textContent = "Show less";
    }
}