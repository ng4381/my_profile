import React, { useState } from 'react';
import '../Styles/Portfolio.css'
import '../Styles/FlipCard.css'
export const Portfolio = () => {

    const my_pet = require('../Img/my_pet.png')
    const macros = require('../Img/macros.png')
    const _1c = require('../Img/1c.png')
    return (
        <div className='container'>

            <div className='portfolio_menu_item'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src={my_pet} className='item_img' />
                        </div>
                        <div className="flip-card-back">
                            <h1>My Pet</h1>
                            <p>Back-end: Java; Spring Boot; Hybernate; Postgresql; Quartz</p>
                            <p>Front-end: React js</p>
                            <p>This is my pet project. I wrote this online game for my daughter and her friends.
                                You need to take care for your pet and pets of your friends.</p>
                            <a href='http://mypet2022.s3-website-us-east-1.amazonaws.com/'>My Pet</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='portfolio_menu_item'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                        <img src={_1c} className='item_img' />
                        </div>
                        <div className="flip-card-back">
                            <h1>Bussines Automation</h1>
                            <p>Back-end: 1C platform</p>
                            <p>Front-end: 1C platform</p>
                            <p>I wrote this software from scratch for a saling company. My programm designed for automat Sales, Accounting, Payroll, and the Assembly Department</p>
                            <a href='http://mypet2022.s3-website-us-east-1.amazonaws.com/'>Presentation</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='portfolio_menu_item'>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={macros} className='item_img' />
                        </div>
                        <div className="flip-card-back">
                            <h1>Furniture calculation</h1>
                            <p>Back-end: Design complex alghorim and database for calculation of furniture for windows</p>
                            <p>Front-end: Designed with coloboration of front-end developer</p>
                            <p>This is my first commesial project. It is more than 10 years old</p>
                            <a href='http://calc.makrosspb.ru/'>Macros calculation</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}