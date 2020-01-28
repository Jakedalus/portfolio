const introSection = document.querySelector('#intro');
//const servicesSection = document.querySelector('#services');
const portfolioSection = document.querySelector('#projects');
const aboutSection = document.querySelector('#about');
//const teamSection = document.querySelector('#team');
const contactSection = document.querySelector('#contact');

const header = document.querySelector('header');
const hamburger = document.querySelector('#hamburger');
const innerNav = document.querySelector('#inner-nav');
const home = document.querySelector('#home-page');
const headerContainer = document.querySelector('header .container');
//const servicesNav = document.querySelector('a[href="#services"]');
const portfolioNav = document.querySelector('a[href="#projects"]');
const aboutNav = document.querySelector('a[href="#about"]');
//const teamNav = document.querySelector('a[href="#team"]');
const contactNav = document.querySelector('a[href="#contact"]');


// open and close nav links on click hamburger
hamburger.addEventListener('click', () => {
  innerNav.style.transform === 'scaleY(1)' 
    ? innerNav.style.transform = 'scaleY(0)' 
    : innerNav.style.transform = 'scaleY(1)';
});


// Click functionality for Portfolio imgs
const projectImages = document.querySelectorAll('.img-container'); // the thumbnails in the portfolio
const projectDetails = Array.from(document.querySelectorAll('.project-detail')); // the detailed project modals
const body = document.querySelector('body');
console.log("projectImages:", projectImages);
console.log("projectDetails:", projectDetails);

projectImages.forEach((image) => {
  image.addEventListener('click', () => {
    console.log(`Clicked ${image}`);
    const projectId = image.getAttribute('data-project'); // get the projectId of the image clicked
    console.log(projectId);
    // find the project detail modal with the same projectId in their data-project attr
    const detail = projectDetails.find((project) => project.getAttribute('data-project') === projectId); 
    console.log(detail);
    detail.style.display = 'block';
    body.style.overflow = 'hidden'; // stop page from scrolling in the background
    
    // update top and opacity styles .2s after change display to block
    setTimeout(() => {
      detail.style.top = '55%';  // creates slight top down movement animation
      detail.style.opacity = '1';
    }, 200);
    
    const close = document.querySelector(`[data-project='${projectId}'] .close-project-detail`);
    console.log(close);
    close.addEventListener('click', () => {
      console.log('Clicked close!', close);
      detail.style.top = '45%';
      detail.style.opacity = '0';
      body.style.overflow = 'auto';
      
      // remove from document flow after animations are finished
      setTimeout(() => {
        detail.style.display = 'none';
      }, 200);
    
    });
  });
});


// Update Copyright Year
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();


// Scroll behavior
window.addEventListener('scroll', () => {
//  console.log("window.innerHeight:", window.innerHeight);
//  console.log("shrink navbar:", introSection.getBoundingClientRect().bottom - window.innerHeight <= 0);
//  console.log("highlight SERVICES:", servicesSection.getBoundingClientRect().top <= 10);
  
  // Shrink navbar and make background darkgray
  if (introSection.getBoundingClientRect().bottom - window.innerHeight <= 0) {
    header.style.backgroundColor = 'var(--darkgray)';
    innerNav.style.backgroundColor = 'var(--darkgray)';
    home.style.fontSize = '25px';
    headerContainer.style.padding = '10px 100px';
  } else if (introSection.getBoundingClientRect().top <= 10) {
    header.style.backgroundColor = 'transparent';
    innerNav.style.backgroundColor = 'transparent';
    home.style.fontSize = '30px';
    headerContainer.style.padding = '20px 100px';
  }
  
  //Highlight the navbar links when section is in view
//  if (servicesSection.getBoundingClientRect().top <= 10 && servicesSection.getBoundingClientRect().bottom >= 10) {
//    servicesNav.style.color = 'orange';
//  } else {
//    servicesNav.style.color = 'white';
//  }
  
  if (portfolioSection.getBoundingClientRect().top <= 10 && portfolioSection.getBoundingClientRect().bottom >= 10) {
    portfolioNav.style.color = 'var(--lightblue)';
  } else {
    portfolioNav.style.color = 'white';
  }
  
  if (aboutSection.getBoundingClientRect().top <= 10 && aboutSection.getBoundingClientRect().bottom >= 10) {
    aboutNav.style.color = 'var(--lightblue)';
  } else {
    aboutNav.style.color = 'white';
  }
  
//  if (teamSection.getBoundingClientRect().top <= 10 && teamSection.getBoundingClientRect().bottom >= -100) {
//    teamNav.style.color = 'orange';
//  } else {
//    teamNav.style.color = 'white';
//  }
  
  if (contactSection.getBoundingClientRect().top <= 100) {
    contactNav.style.color = 'var(--lightblue)';
  } else {
    contactNav.style.color = 'white';
  }
  
});























