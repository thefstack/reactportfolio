import React from 'react'

const Neck=()=>{
    return (
        <>
            <section className="home" id="home">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Raj Sharma</h1>
                <h3>And I'm a <span className="multiple-text"></span></h3>
                <h3>with expertise in <span className="multiple-expertise"></span></h3>
                <div className="social-media">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                    <a href="#"><i className='bx bxl-instagram-alt'></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                </div>
                <a target='_blank' href="https://drive.google.com/file/d/1AkQGetc6eXfF7IdifbThFx5TilNe-0BW/view?usp=sharing" className="btn">Download CV</a>
            </div>
    
            <div className="home-img">
                <img src="images/mypic.jpg" alt="failed to load Profile Pic"/>
            </div>
    
        </section>
        </>
    )
}

export default Neck;
