import React from "react";
import cl from '../AboutMe.module.css'
import { HistoryItem } from "../../UI/HistoryItem/HistoryItem";

export const IT = () => {
    const gym1 = require('../../Img/Sportlife/gym1.png')
    const gym2 = require('../../Img/Sportlife/gym2.png')
    const gym3 = require('../../Img/Sportlife/gym3.png')
    const dummy = require('../../Img/Sportlife/dummy.png')
    const karate = require('../../Img/Sportlife/karate.png')

    const historyItems = [
        {
            year: '2005-2007',
            title: 'Optima / BusinessPro',
            subtitle: 'Started to lern',
            children:
                <><p>Technology: Fast Repord, Cristal Report</p>
                    <ul>
                        <li>Design of new reports using SQL</li>
                        <li>Implementing programm on a side of the client</li>
                        <li>Teaching employes</li>
                    </ul>
                </>
        },
        {
            year: '2008-2019',
            title: 'Altair / EVK Group',
            subtitle: 'Started to lern',
            children:
                <>
                    <p>Technology: 1C</p>
                    <ul>
                        <li>Disign and developing new features</li>
                        <li>Implementing programm on a side of the client</li>
                        <li>Teaching employes</li>
                    </ul>
                </>
        },
        {
            year: '2019',
            title: 'Java',
            subtitle: 'Beginig of my journey',
            children:
                <>
                    <ul>
                        <li>Learning ... Learning ... Learning</li>
                    </ul>
                </>
        },
        {
            year: '2019',
            title: 'Ladoga Energo',
            subtitle: 'Full-stack developer',
            children:
                <>
                    <ul>
                        <li>First commercial project</li>
                    </ul>
                </>
        },
        {
            year: '2021',
            title: 'Java OCA',
            subtitle: 'Pass the exam',
            children:
                <>
                    <ul>
                        <li>Pass the exam and become Oracle certified associated</li>
                    </ul>
                </>
        },
        {
            year: '2020',
            title: 'EPAM',
            subtitle: 'Java developer',
            children:
                <>
                    <ul>
                        <li>Software developer</li>
                    </ul>
                </>
        },
        {
            year: '2020',
            title: 'Luxoft',
            subtitle: 'Java developer',
            children:
                <>
                    <ul>
                        <li>Software developer</li>
                    </ul>
                </>
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