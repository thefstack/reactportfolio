import React from 'react'
import "./app.css"

const PortFolioBox=(props)=>{
    return (
        <>
            <div className="portfolio-box">
                <img src={props.img} alt="failed to load" />
                <div className="portfolio-layer">
                    <h4>{props.title}</h4>
                    <p>{props.about}</p>
                    <a target='_blank' href={props.link}><i className='bx bx-link-external'></i></a>
                </div>
            </div>
        </>
    )
}

export default PortFolioBox;