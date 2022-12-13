import React from "react";
import '../../Styles/Personal.css'

export const Personal = () => {
    const dog = require('../../Img/Personal/dog.png')
    const doughter = require('../../Img/Personal/doughter.png')
    const country = require('../../Img/Personal/country.png')
    const aist = require('../../Img/Personal/aist.png')
    const Israel = require('../../Img/Personal/Israel.png')
    const rats = require('../../Img/Personal/rats.png')
    const cat = require('../../Img/Personal/cat.png')
    const rings = require('../../Img/Personal/rings.png')

    return (
        <div className="personal_content">
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>1981</h2>
                    <p>Birthday</p>
                </div>

                <div className="personal_item_content">
                    <p>Was born</p>
                    <img src={aist} />
                </div>

            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2011</h2>
                    <p>Married</p>
                </div>
                <div className="personal_item_content">
                    <p>Married</p>
                    <img src={rings} />
                </div>
            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2012</h2>
                    <p>Doughter's birthday</p>
                </div>
                <div className="personal_item_content">
                    <p>Doughter's birthday</p>
                    <img src={doughter} />
                </div>
            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2015</h2>
                    <p>New members</p>
                </div>
                <div className="personal_item_content">
                    <p>Busia, Kuzia and Zoya</p>
                    <img src={rats} />
                </div>
            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2017</h2>
                    <p>Moved to country</p>
                </div>
                <div className="personal_item_content">
                    <p>Moved to country</p>
                    <img src={country} />
                </div>
            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2017</h2>
                    <p>New member</p>
                </div>
                <div className="personal_item_content">
                    <p>Umka</p>
                    <img src={dog} />
                </div>
            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2017</h2>
                    <p>New member</p>
                </div>
                <div className="personal_item_content">
                    <p>Karmen</p>
                    <img src={cat} />
                </div>
            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2022</h2>
                    <p>Moved to Israel</p>
                </div>
                <div className="personal_item_content">
                    <p>Moved to Israel</p>
                    <img src={Israel} />
                </div>
            </div>
        </div >
    )
}