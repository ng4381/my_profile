import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/AboutMe.css'
export const AboutMe = () => {
    const my_wing_chun = require('../Img/my_wing_chun_group.png')
    const personal = require('../Img/personal.png')
    const professional = require('../Img/professional.png')
    return (
        <div className='container'>
            <Link to='/personal'>
                <div className='menu_item'>
                    <img src={personal} className='item_img' />
                    <div className='item_caption'>
                        Personal
                    </div>
                </div>
            </Link>
            <Link to='/it'>
                <div className='menu_item'>
                    <img src={professional} className='item_img' />
                    <div className='item_caption'>
                        IT
                    </div>
                </div>
            </Link>
            <Link to='/sportlife'>
                <div className='menu_item'>
                    <img src={my_wing_chun} className='item_img' />
                    <div className='item_caption'>
                        Sport
                    </div>
                </div>
            </Link>
        </div>
    )
}