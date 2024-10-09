function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const scrollDownLink = document.querySelector('.scroll-down-link');
const aboutSection = document.getElementById('about');

scrollDownLink.addEventListener('click', function() {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

function scrollToFooter() {
    const footerSection = document.getElementById("getin-touch");
    footerSection.scrollIntoView({ behavior: "smooth" }); 
}

// document.addEventListener("DOMContentLoaded", function () {
  
//   new TypeIt(".section__text__p2", {
//     cursor: false,
//     speed : 100,
//     loop: true
//   })
//   .type(' Freelancer')
//   .pause(1000)
//   .delete(10)
//   .type(' Hardware Designer')
//   .pause(1000)
//   .delete(17)
//   .type(' Automation Engineer')
//   .pause(7500)
//   .go();

  

// });