import React, { useState } from 'react';
import { FlipCard } from '../UI/FlipCard';
import cl from './Portfolio.module.css';
export const Portfolio = () => {

    const my_pet = require('../Img/my_pet.png')
    const macros = require('../Img/macros.png')
    const _1c = require('../Img/1c.png')

    const menuItems = [
        {
            title: 'My Pet',
            img: my_pet,
            className: cl.menu_item,
            children:
                <div>
                    <p>Back-end: Java; Spring Boot; Hybernate; Postgresql; Quartz</p>
                    <p>Front-end: React js</p>
                    <p>This is my pet project. I wrote this online game for my daughter and her friends.
                        You need to take care for your pet and pets of your friends.</p>
                    <a href='http://mypet2022.s3-website-us-east-1.amazonaws.com/'>My Pet</a>
                </div>
        },
        {
            title: 'Bussines Automation',
            img: _1c,
            className: cl.menu_item,
            children:
                <div>
                    <p>Back-end: 1C platform</p>
                    <p>Front-end: 1C platform</p>
                    <p>I wrote this software from scratch for a saling company. My programm designed for automat Sales, Accounting, Payroll, and the Assembly Department</p>
                    <a href='http://mypet2022.s3-website-us-east-1.amazonaws.com/'>Presentation</a>
                </div>
        },
        {
            title: 'Furniture calculation',
            img: macros,
            className: cl.menu_item,
            children:
                <div>
                    <p>Back-end: Design complex alghorim and database for calculation of furniture for windows</p>
                    <p>Front-end: Designed with coloboration of front-end developer</p>
                    <p>This is my first commesial project. It is more than 10 years old</p>
                    <a href='http://calc.makrosspb.ru/'>Macros calculation</a>
                </div>
        },
    ]

    return (
        <div className={cl.container}>
            {menuItems.map((item, index) =>
                <FlipCard {...item} key={index} />

            )}
        </div>
    )
}