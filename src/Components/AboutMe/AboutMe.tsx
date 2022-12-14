import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItemBox } from '../UI/MenuItemBox/MenuItemBox';
import cl from './AboutMe.module.css'
export const AboutMe = () => {
    const my_wing_chun = require('../Img/my_wing_chun_group.png')
    const personal = require('../Img/personal.png')
    const professional = require('../Img/professional.png')

    const menuItems = [
        { img: personal, title: 'Personal', link: '/personal'},
        { img: professional, title: 'IT', link: '/it'},
        { img: my_wing_chun, title: 'Sport', link: '/sportlife'},
    ]

    return (
        <div className={cl.container}>

            {menuItems.map((item, index) =>
                <Link to={item.link} className={cl.menu_item_container}>
                    <MenuItemBox {...item} key={index} />
                </Link>
            )}

        </div>
    )
}