window.onload = function() {
    const aboutMeLink = document.querySelector('#about-me-link');
    const projectLink = document.querySelector('#project-link');
    const aboutMeSection = document.querySelector('#about-me-section');
    const projectSection = document.querySelector('#project-section');
 
  
    aboutMeLink.addEventListener('click', function(event) {
      event.preventDefault();
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
    });
    projectLink.addEventListener('click', function(event) {
      event.preventDefault();
      projectSection.scrollIntoView({ behavior: 'smooth' });
    });
  };
  