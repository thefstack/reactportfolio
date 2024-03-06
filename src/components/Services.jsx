import React from 'react'
import ServiceBox from './ServiceBox';

const Services=()=>{
    return (
        <>
                   <section className="services" id="services">
            <h2 className="heading">Key <span>Competencies</span></h2>
            <div className="services-container">
                <ServiceBox  title='H T M L' icon="https://cdn-icons-png.flaticon.com/128/1051/1051277.png"/>
                <ServiceBox  title='CSS' icon="https://cdn-icons-png.flaticon.com/128/732/732190.png"/>
                <ServiceBox  title='JAVASCRIPT' icon="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"/>
                <ServiceBox  title='NodeJS' icon="https://cdn-icons-png.flaticon.com/128/919/919825.png"/>
                <ServiceBox  title='ExpressJs' icon="https://img.icons8.com/?size=48&id=SDVmtZ6VBGXt&format=png"/>
                <ServiceBox  title='MongoDb' icon="https://cdn-icons-png.flaticon.com/128/5983/5983417.png"/>
                <ServiceBox  title='ReactJs' icon="https://cdn-icons-png.flaticon.com/128/1126/1126012.png"/>
                <ServiceBox  title='C++' icon="https://cdn-icons-png.flaticon.com/128/6132/6132222.png"/>
            </div>
        </section>
        </>
    )
}

export default Services;
