const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('nav ul');
  
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });

    window.onscroll = function() {
        toggleScrollButton();
      };
    
      function toggleScrollButton() {
        const scrollBtn = document.getElementById("scrollBtn");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          scrollBtn.style.display = "block";
        } else {
          scrollBtn.style.display = "none";
        }
      }
    
      function scrollToTop() {
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }