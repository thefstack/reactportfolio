import React from 'react'

const ServiceBox=(props)=>{
    return (
        <>
            <div className="services-box">
                    <i className='bx bxs-paint'></i>
                    <h3>{props.title}</h3>
                    <p>{props.info}</p>
                    <a href="#" className="btn">Read More</a>
                </div>
        </>
    )
}
export default ServiceBox