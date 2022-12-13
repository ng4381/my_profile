import React, { useState } from 'react';
import '../Styles/CV.css'
export const CV = () => {
    const my_photo = require('../Img/me.png')
    return (
        <div className='main_container'>
            <div className='content'>

                <div className='name_div'>
                    <div>
                        <img src={my_photo} className='img' />
                    </div>
                    <div>
                        <p className='name_p'>Nikita Goloveshko</p>
                        <p className='position_p'>Java Developer</p>
                    </div>
                </div>


                <div>
                    Enthusiastic software developer with more than 10 years of experience including the last 3 years of Java programming, highly skilled in business process automation, implementation, maintenance, and optimization of software. Highly motivated, and greedy for new knowledge, I'm constantly engaged in professional development and self-education.
                </div>

                <h4>Work experience</h4>
                <div className='main_div'>
                    <small>12/2021 – 12/2022</small>
                    <p><span>Java developer in</span> IBS InfiniSoft (formerly Luxoft Russia)</p>
                    <small>04/2021 – 12/2021</small>
                    <p><span>Java developer in</span> EPAM Systems</p>
                    <small>07/2019 – 03/2021</small>
                    <p><span>Java developer / 1c software developer in</span> Ladoga-Energo, LLC</p>
                </div>

                <h4>Education</h4>
                <div className='main_div'>
                    <small>09/1998 - 05/2004</small>
                    <p><span>Bachelor in robots and robotic systems</span></p>
                    <p>Saint-Petersburg state university of aerospace instrumentation</p>
                </div>

                <h4>Certificates and courses</h4>
                <div className='main_div'>
                    <small>04/2021</small>
                    <p><span>Oracle certified associate - Java SE 8 Programmer (OCA)</span></p>
                    <small>01/2022</small>
                    <p><span>Luxoft (Java Developer) upskilling program</span></p>
                </div>



            </div>
            <div className='addInfo'>

                <div className='bage_div'>
                    <a href='https://www.credly.com/badges/077f3534-488f-451e-8384-2182b302ddeb/public_url'>
                        <img className='bage_img' src='https://images.credly.com/size/680x680/images/a9848abf-f8bd-474d-a9b4-6086da11a916/Oracle_Associates_Badge__1_.png'></img>
                    </a>
                </div>

                <div>
                    <h2>Skills</h2>
                    <h3>Back-end</h3>
                    <ul>
                        <li>Java</li>
                        <li>Spring Boot</li>
                        <li>Hibernate</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>Kafka / RabbitMQ</li>
                        <li>Testing</li>
                        <li>Docker/Docker compose</li>
                        <li>AWS EC2 S3 RDS e.t.c</li>
                        
                    </ul>

                    <h3>Front-end</h3>
                    <ul>
                        <li>React</li>
                        <li>Java Script</li>
                        <li>Type Script</li>
                        <li>Redux</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>CASS</li>
                    </ul>


                </div>
            </div>
        </div>
    )
}