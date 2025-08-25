document.addEventListener('DOMContentLoaded', function() {
  // Variables
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const navIndicator = document.createElement('div');
  
  // Setup nav indicator
  navIndicator.classList.add('nav-indicator');
  navMenu.appendChild(navIndicator);
  
  // Set initial position of nav indicator to active link
  setIndicatorPosition(document.querySelector('.nav-link.active'));
  
  // Mobile menu toggle
  menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Toggle hamburger animation
      const bars = document.querySelectorAll('.bar');
      if (menuToggle.classList.contains('active')) {
          bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
          bars[1].style.opacity = '0';
          bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
          bars[0].style.transform = 'none';
          bars[1].style.opacity = '1';
          bars[2].style.transform = 'none';
      }
  });
  
  // Navigation links hover effect
  navLinks.forEach(link => {
      link.addEventListener('mouseenter', function() {
          if (window.innerWidth > 768) {
              setIndicatorPosition(this);
          }
      });
      
      link.addEventListener('click', function(e) {
          if (!this.parentElement.classList.contains('dropdown') || window.innerWidth <= 768) {
              e.preventDefault();
              navLinks.forEach(navLink => navLink.classList.remove('active'));
              this.classList.add('active');
              setIndicatorPosition(this);
          }
      });
  });
  
  // Reset indicator position when mouse leaves the nav menu
  navMenu.addEventListener('mouseleave', function() {
      if (window.innerWidth > 768) {
          const activeLink = document.querySelector('.nav-link.active');
          setIndicatorPosition(activeLink);
      }
  });
  
  // Scroll effect for header
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          header.style.padding = '5px 0';
          header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      } else {
          header.style.padding = '0';
          header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      }
  });
  
  // Window resize handler
  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          navMenu.classList.remove('active');
          menuToggle.classList.remove('active');
          const bars = document.querySelectorAll('.bar');
          bars[0].style.transform = 'none';
          bars[1].style.opacity = '1';
          bars[2].style.transform = 'none';
          
          // Reset indicator position
          const activeLink = document.querySelector('.nav-link.active');
          setIndicatorPosition(activeLink);
      }
  });
  
  // Function to set nav indicator position
  function setIndicatorPosition(el) {
      if (!el || window.innerWidth <= 768) return;
      
      const width = el.offsetWidth;
      const left = el.offsetLeft;
      
      navIndicator.style.width = `${width}px`;
      navIndicator.style.left = `${left}px`;
  }
});
