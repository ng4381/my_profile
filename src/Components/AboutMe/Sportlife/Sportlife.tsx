import React from "react";
import '../../Styles/Personal.css'

export const Sportlife = () => {
    const gym1 = require('../../Img/Sportlife/gym1.png')
    const gym2 = require('../../Img/Sportlife/gym2.png')
    const gym3 = require('../../Img/Sportlife/gym3.png')
    const dummy = require('../../Img/Sportlife/dummy.png')
    const karate = require('../../Img/Sportlife/karate.png')



    return (
        <div className="personal_content">
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2005</h2>
                    <p>Karate</p>
                </div>

                <div className="personal_item_content">
                    <p>Started to lern</p>
                    <img src={karate} />
                </div>

            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2007</h2>
                    <p>Wing tsun</p>
                </div>

                <div className="personal_item_content">
                    <p>Started to lern</p>
                    <img src={dummy} />
                </div>

            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2009</h2>
                    <p>My first gym</p>
                </div>

                <div className="personal_item_content">
                    <p>My first gym</p>
                    <img src={gym1} />
                </div>

            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2012</h2>
                    <p>My second gym</p>
                </div>
                <div className="personal_item_content">
                    <p>My second gym</p>
                    <img src={gym2} />
                </div>
            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2017</h2>
                    <p>My thierd gym</p>
                </div>
                <div className="personal_item_content">
                    <p>My thierd gym</p>
                    <img src={gym3} />
                </div>
            </div>

        </div >
    )
}