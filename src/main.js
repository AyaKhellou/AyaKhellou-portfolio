import './style.css'


let linksButton = document.querySelector(".openLinks");
let navbar = document.querySelector(".navbar")
let links = document.querySelector(".links");
let scrollToTopButton = document.querySelector('.scroll-to-top');
let appDetails = document.querySelectorAll('.app-details');
let skillsBoxes = document.querySelectorAll('.skills-card');
let headers = document.querySelectorAll('.headers span');
let buttons = document.querySelectorAll('.btn-style');

let features = document.querySelectorAll('.features .feature')


//animation on skill cards

const boxesObs = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
        }else{
            entry.target.classList.remove('opacity-100');
            entry.target.classList.add('opacity-0');
        }
    });
}, {threshold: 0.3});


skillsBoxes.forEach((skill, index) => {
    boxesObs.observe(skill);
    skill.style.transitionDelay = `${index * 70}ms`;
});

features.forEach((feature, index) => {
    boxesObs.observe(feature);
    feature.style.transitionDelay = `${index * 70}ms`;
});

//making app details slide out


const appDetailsObserverRight = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.remove('-translate-x-64','opacity-0');
            entry.target.classList.add('translate-x-0','opacity-100');
        }else{
            entry.target.classList.remove('translate-x-0','opacity-100');
            entry.target.classList.add('-translate-x-64','opacity-0');
        }
    });
}, {threshold: 0.1});

const appDetailsObserverLeft = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('translate-x-64','opacity-0');
            entry.target.classList.add('translate-x-0','opacity-100');
        }else{
            entry.target.classList.remove('translate-x-0','opacity-100');
            entry.target.classList.add('translate-x-64','opacity-0');
        }
    });
}, {threshold: 0.1});

let projectImage = document.querySelectorAll('.project .project-image');

appDetailsObserverRight.observe(appDetails[0]);
appDetailsObserverRight.observe(appDetails[2]);
appDetailsObserverRight.observe(appDetails[4]);
// appDetailsObserverRight.observe(appDetails[2]);
appDetailsObserverRight.observe(projectImage[1]);
appDetailsObserverRight.observe(projectImage[3]);

appDetailsObserverLeft.observe(appDetails[1]);
appDetailsObserverLeft.observe(appDetails[3]);
appDetailsObserverLeft.observe(projectImage[0]);
appDetailsObserverLeft.observe(projectImage[2]);
appDetailsObserverLeft.observe(projectImage[4]);
// appDetailsObserverLeft.observe(projectImage[2]);

//extending header underline when scrolling

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.width = "50%";
        }else{
            entry.target.style.width = "0";
        }
    });

}, {threshold: 0.5});

headers.forEach(header => {
    observer.observe(header);
});

//making about me slide outta the border

let aboutMePar = document.querySelectorAll('.desc .intro span');


const slideOut = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
            entry.target.classList.add('opacity-100');
        }else{
            entry.target.classList.remove('opacity-100');
            entry.target.classList.add('opacity-0');
        }

    });

}, {threshold: 0.7});

aboutMePar.forEach(p => {
    slideOut.observe(p);
});


//manage links appearance on small screens

//show/hide links when click on button:

linksButton.addEventListener('click', (e) => {
    e.stopPropagation();
    links.classList.toggle('hidden');
    links.classList.toggle('flex');
});

//hide links when clicking somewhere else:

document.addEventListener('click', (e) => {
    if (!links.classList.contains('hidden')) {
        links.classList.add('hidden');
    }
});

//hide links when scroll:

document.addEventListener('scroll', (e) => {
    if (!links.classList.contains('hidden')) {
        links.classList.add('hidden');
    }
});

//stop previous events on click on a link(so the list dosn't disappear when clicking)
links.addEventListener('click', (e) => {
    e.stopPropagation();
});

//manage when scroll down button appear

function scrollbuttonappearance() {
    if (window.scrollY <= 0) {

        scrollToTopButton.style.opacity = '0%'        
        
    }else{
        scrollToTopButton.style.opacity = '100%'
    }
}

//show navbar when scroll up , hide it when scroll down

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {

    if (window.scrollY > 48) {
        navbar.style.position = 'fixed';
        if (window.scrollY > lastScrollY) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
    }
    
});

let contactMe = document.querySelector(".contact-me");
let form = document.querySelector('form[name="contact"]')
let close = document.querySelector('.close')

contactMe.addEventListener('click', function(){
    form.classList.remove('hidden');
})
close.addEventListener('click',(e)=>{
    e.preventDefault();
    form.classList.add('hidden')
})

window.addEventListener('load', ()=>{
    if (window.scrollY === 0) {
        scrollToTopButton.style.opacity = '0%';
    }
    window.addEventListener('scroll' ,()=>{
        scrollbuttonappearance();
    })
})
