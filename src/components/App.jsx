import React, { useEffect } from 'react'
import "./app.css"
import ScrollReveal from 'scrollreveal';
import Typed from 'typed.js'
import Header from './Header'
import Neck from './Neck'
import About from './About'
import Services from "./Services"
import Portfolio from './PortFolio';
import Contact from './Contact';
import Footer from './Footer';



const App=()=>{
    useEffect(()=>{
        let menuicon=document.getElementById('menu-icon');
        let navbar=document.querySelector('.navbar');
        menuicon.onclick=()=>{
            navbar.classList.toggle('active');
            menuicon.classList.toggle('bx-x');
        };

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
    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>100);
    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');

}
ScrollReveal({ 
 
    distance: '100px',
    duration:1000,
    delay:100
});

ScrollReveal().reveal('.home-content,.heading', {origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form', {origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img', {origin:'left'});
ScrollReveal().reveal('home-content p,.about-content', {origin:'right'});


const typed1=new Typed('.multiple-text',{
    strings:['Full-Stack Developer','Front-end Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
const typed2=new Typed('.multiple-expertise',{
    strings:['HTML','CSS','JavaScript','NodeJs','ExpressJs','MongoDb'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

    })
    return (
    <>
    <div className="wrapper">
        <div className="mycontainer">
        <Header/>
        <Neck/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        </div>
        <Footer/>
    </div>
    </>
    )
}

export default App;