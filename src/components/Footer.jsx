import React from 'react'

const Footer=()=>{
    return (
        <>
            <footer className="footer">
            <div className="footer-content">
                <div><p>Created by @Raj</p></div>
            <div className="contact-info">
                <p id="contact-info-header">
                    Contact info: 
                </p>
                <p>Email: rajsharmahwh19@gmail.com</p>
                <p>Contact No: +91 91428 92678</p>
            </div>
            
            <div className="social-info">
                <a href="https://www.instagram.com/thefstack/"><i className='bx bxl-instagram-alt'></i></a>
                <a href="#"><i className='bx bxl-facebook-square'></i></a>
                <a href="#"><i className='bx bxl-linkedin-square'></i></a>
            </div>
            </div>
    
        </footer>
        </>
    )
}

export default Footer;
