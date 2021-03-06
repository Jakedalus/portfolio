const introSection = document.querySelector('#intro');
//const servicesSection = document.querySelector('#services');
const portfolioSection = document.querySelector('#projects');
// const aboutSection = document.querySelector('#about');
//const teamSection = document.querySelector('#team');
const contactSection = document.querySelector('#contact');

const header = document.querySelector('header');
const hamburgerContainer = document.querySelector('#hamburger-container');
const hamburger = document.querySelector('#hamburger');
const hamburgerLines = document.querySelectorAll('#hamburger div');
const innerNav = document.querySelector('#inner-nav');
const home = document.querySelector('#home-page');
const headerContainer = document.querySelector('header .container');
//const servicesNav = document.querySelector('a[href="#services"]');
const portfolioNav = document.querySelector('a[href="#projects"]');
const aboutNav = document.querySelector('a[href="#about"]');
//const teamNav = document.querySelector('a[href="#team"]');
const contactNav = document.querySelector('a[href="#contact"]');
const pageMask = document.querySelector('#page-mask');


// open and close nav links on click hamburger
hamburger.addEventListener('click', () => {
  if (innerNav.style.transform === 'scaleY(1)') {  // if nav menu is open
    innerNav.style.transform = 'scaleY(0)';
    hamburgerLines[0].classList.remove('menu-open');
    hamburgerLines[1].classList.remove('menu-open');
    hamburgerLines[2].classList.remove('menu-open');


    // hamburgerLines[0].style.transform = 'rotate(0)';
    // hamburgerLines[1].style.opacity = '1';
    // hamburgerLines[2].style.transform = 'rotate(0)';
  } else {
    innerNav.style.transform = 'scaleY(1)';
    hamburgerLines[0].classList.add('menu-open');
    hamburgerLines[1].classList.add('menu-open');
    hamburgerLines[2].classList.add('menu-open');


    // hamburgerLines[0].style.transform = 'rotate(45deg) translateY(13px)';
    // hamburgerLines[1].style.opacity = '0';
    // hamburgerLines[2].style.transform = 'rotate(-45deg) translateY(-13px)';
  }
});

window.addEventListener('resize', () => {
  // console.log('window resized!', window.innerWidth);
  if (window.innerWidth > 1060) {
    console.log('LARGE');
    innerNav.style.transform = 'scaleY(1)';
  } else {
    innerNav.style.transform = 'scaleY(0)';
  }
});


// Click functionality for Portfolio imgs
const projectImages = document.querySelectorAll('.project__img-container'); // the thumbnails in the portfolio
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
    pageMask.style.display = 'block'; // dim the background when the modal is open
    header.style.display = 'none';
    
    // update top and opacity styles .2s after change display to block
    setTimeout(() => {
      detail.style.top = '50%';  // creates slight top down movement animation
      detail.style.opacity = '1';
    }, 200);
    
    const close = document.querySelector(`[data-project='${projectId}'] .close-project-detail`);
    console.log(close);

    function closeModal () {
      console.log('click close!');
      detail.style.top = '45%';
      detail.style.opacity = '0';
      body.style.overflow = 'auto';
      header.style.display = 'block';
      
      // remove from document flow after animations are finished
      setTimeout(() => {
        detail.style.display = 'none';
        pageMask.style.display = 'none';
      }, 200);
    }

    close.addEventListener('click', closeModal);
    pageMask.addEventListener('click', closeModal);

  });
});


// Update Copyright Year
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();


// Scroll behavior
window.addEventListener('scroll', () => {
 console.log("window.innerHeight:", window.innerHeight);  
//  console.log("shrink navbar:", introSection.getBoundingClientRect().bottom - window.innerHeight <= 0);
//  console.log("highlight SERVICES:", servicesSection.getBoundingClientRect().top <= 10);
  
  // Shrink navbar and make background darkgray
  if (introSection.getBoundingClientRect().bottom - window.innerHeight <= 0) {
    header.style.backgroundColor = 'var(--darkgray)';
    innerNav.style.backgroundColor = 'var(--darkgray)';
//    home.style.fontSize = '25px';
    headerContainer.style.height = '60px';
  } else if (introSection.getBoundingClientRect().top <= 10) {
    header.style.backgroundColor = 'transparent';
    innerNav.style.backgroundColor = 'transparent';
//    home.style.fontSize = '30px';
    headerContainer.style.height = '100px';

  }
  
  //Highlight the navbar links when section is in view
//  if (servicesSection.getBoundingClientRect().top <= 10 && servicesSection.getBoundingClientRect().bottom >= 10) {
//    servicesNav.style.color = 'orange';
//  } else {
//    servicesNav.style.color = 'white';
//  }

  console.log(portfolioSection.getBoundingClientRect().top, portfolioSection.getBoundingClientRect().bottom);

  console.log('introSection.getBoundingClientRect().bottom:', introSection.getBoundingClientRect().bottom);
  console.log('home-page button:', home);

  if (introSection.getBoundingClientRect().bottom >= 50) {
    home.style.color = 'var(--green)';
  } else {
    home.style.color = 'white';
  }
  
  if (portfolioSection.getBoundingClientRect().top <= 50 && portfolioSection.getBoundingClientRect().bottom >= 50) {
    portfolioNav.style.color = 'var(--green)';
  } else {
    portfolioNav.style.color = 'white';
  }
  
  // if (aboutSection.getBoundingClientRect().top <= 10 && aboutSection.getBoundingClientRect().bottom >= 10) {
  //   aboutNav.style.color = 'var(--lightblue)';
  // } else {
  //   aboutNav.style.color = 'white';
  // }
  
//  if (teamSection.getBoundingClientRect().top <= 10 && teamSection.getBoundingClientRect().bottom >= -100) {
//    teamNav.style.color = 'orange';
//  } else {
//    teamNav.style.color = 'white';
//  }
  
  if (contactSection.getBoundingClientRect().top <= 50) {
    contactNav.style.color = 'var(--green)';
  } else {
    contactNav.style.color = 'white';
  }
  
});























