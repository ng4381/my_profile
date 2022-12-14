import React from "react";
// import '../../Styles/Personal.css'
import cl from '../AboutMe.module.css'
import { HistoryItem } from "../../UI/HistoryItem/HistoryItem";

export const Personal = () => {
    const dog = require('../../Img/Personal/dog.png')
    const doughter = require('../../Img/Personal/doughter.png')
    const country = require('../../Img/Personal/country.png')
    const aist = require('../../Img/Personal/aist.png')
    const Israel = require('../../Img/Personal/Israel.png')
    const rats = require('../../Img/Personal/rats.png')
    const cat = require('../../Img/Personal/cat.png')
    const rings = require('../../Img/Personal/rings.png')


    const historyItems = [
        {
            year: '1981',
            title: 'Birthday',
            subtitle: 'Was born',
            img: aist,
            children: <></>
        },
        {
            year: '2011',
            title: 'Married',
            subtitle: 'Married',
            img: rings,
            children: <></>
        },
        {
            year: '2012',
            title: "Daughter's birthday",
            subtitle: "Sonya",
            img: doughter,
            children: <></>
        },
        {
            year: '2015',
            title: "New members",
            subtitle: "Busia, Kuzia and Zoya",
            img: rats,
            children: <></>
        },
        {
            year: '2017',
            title: "Moved to country",
            subtitle: "Moved to country",
            img: country,
            children: <></>
        },
        {
            year: '2017',
            title: "New member",
            subtitle: "Umka",
            img: dog,
            children: <></>
        },
        {
            year: '2017',
            title: "New member",
            subtitle: "Karmen",
            img: cat,
            children: <></>
        },
        {
            year: '2022',
            title: "Moved to Israel",
            subtitle: "Moved to Israel",
            img: Israel,
            children: <></>
        },
    ]

    return (
        <div className={`${cl.container} ${cl.history_column_gap}`}>
            {historyItems.map((items, index)=>(
                <HistoryItem {...items}/>
            ))}
        </div >
    )
}