import React from 'react'


const ServiceBox=(props)=>{
    return (
        <>
            <div className="services-box">
                    <img src={props.icon} alt="icon" />
                    <h3>{props.title}</h3>
                    <p>{props.info}</p>
                </div>
        </>
    )
}
export default ServiceBox