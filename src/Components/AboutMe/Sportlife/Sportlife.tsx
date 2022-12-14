import React from "react";
import cl from '../AboutMe.module.css'
import { HistoryItem } from "../../UI/HistoryItem/HistoryItem";

export const Sportlife = () => {
    const gym1 = require('../../Img/Sportlife/gym1.png')
    const gym2 = require('../../Img/Sportlife/gym2.png')
    const gym3 = require('../../Img/Sportlife/gym3.png')
    const dummy = require('../../Img/Sportlife/dummy.png')
    const karate = require('../../Img/Sportlife/karate.png')

    const historyItems = [
        {
            year: '2005',
            title: 'Karate',
            subtitle: 'Started to lern',
            img: karate,
            children: <></>
        },
        {
            year: '2007',
            title: 'Wing tsun',
            subtitle: 'Started to lern',
            img: dummy,
            children: <></>
        },
        {
            year: '2009',
            title: 'My first gym',
            subtitle: 'My first gym',
            img: gym1,
            children: <></>
        },
        {
            year: '2012',
            title: 'My second gym',
            subtitle: 'My second gym',
            img: gym2,
            children: <></>
        },
        {
            year: '2017',
            title: 'My thierd gym',
            subtitle: 'My thierd gym',
            img: gym3,
            children: <></>
        },

    ]

    return (
        <div className={`${cl.container} ${cl.history_column_gap}`}>
            {historyItems.map((items, index) => (
                <HistoryItem {...items} />
            ))}
        </div >
    )
}