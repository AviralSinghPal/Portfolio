window.onload = function() {
    const aboutMeLink = document.querySelector('#about-me-link');
    const projectLink = document.querySelector('#project-link');
    const contactLink = document.querySelector('#contactme-link');
    const aboutMeSection = document.querySelector('#about-me-section');
    const projectSection = document.querySelector('#project-section');
    const contactSection = document.querySelector('#contactme-section');
 
  
    aboutMeLink.addEventListener('click', function(event) {
      event.preventDefault();
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    });
    projectLink.addEventListener('click', function(event) {
      event.preventDefault();
      projectSection.scrollIntoView({ behavior: 'smooth' });
    });
    contactLink.addEventListener('click', function(event) {
      event.preventDefault();
      contactSection.scrollIntoView({ behavior: 'smooth' });
    });


    const hamburger = document.querySelector(".hamburger");
    const navItems = document.querySelector(".nav-items");

    hamburger.addEventListener("click", () => {
    navItems.classList.toggle("show");
    });

    };
  