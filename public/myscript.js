document.addEventListener("DOMContentLoaded",()=>{
    // toogle icon navbar
let menuicon=document.getElementById('menu-icon');
let navbar=document.querySelector('.navbar');
console.log("Js Connected");

console.log(menuicon);
menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// scroll section active link

let sections=document.querySelectorAll('section');
let navLink=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });

    // sticky navbar

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);

    // remove toggle icon and navbar when click navbar link(scroll)

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


// Scroll reveal 

ScrollReveal({ 
 
    distance: '100px',
    duration:1000,
    delay:100
});

ScrollReveal().reveal('.home-content,.heading', {origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img', {origin:'left'});
ScrollReveal().reveal('home-content p,.about-content', {origin:'right'});


// typed text 

const typed1=new Typed('.multiple-text',{
    strings:['Frontend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
const typed2=new Typed('.multiple-expertise',{
    strings:['HTML','CSS','JavaScript','C++ Programming'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
})