import React from 'react'
import ServiceBox from './ServiceBox';

const Services=()=>{
    return (
        <>
                   <section className="services" id="services">
            <h2 className="heading">Our <span>Services</span></h2>
            <div className="services-container">
                <ServiceBox  title='Front-End Developer' info='1 Year of Experience in HTML, CSS, JAVASCRIPT'/>
                <ServiceBox  title='Web Designing' info='more than 5 months of Experience in creating attractive Designs'/>
                <ServiceBox  title='Back-End Developer' info='more than 6 months of Experience in NodeJs, ExpressJs, MongoDb'/>
            </div>
        </section>
        </>
    )
}

export default Services;
