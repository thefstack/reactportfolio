import React from 'react'
import PortFolioBox from './PortfolioBox';
import projects from './projects'
import "./app.css"

const Portfolio=()=>{

    function nprojects(val){
        return (
            <PortFolioBox img={val.img} title={val.title} about={val.about} link={val.link}/>
        )
    }
    
    return (
        <>       
            <section className="portfolio" id="portfolio">
            <h2 className="heading">
                Latest <span>Project</span>
            </h2>
            <div className="portfolio-container">
            {projects.map(nprojects)}
                            
            </div>
        </section>
        </>
    )
}

export default Portfolio;
