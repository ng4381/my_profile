import React from "react";
import '../../Styles/Personal.css'

export const IT = () => {
    const gym1 = require('../../Img/Sportlife/gym1.png')
    const gym2 = require('../../Img/Sportlife/gym2.png')
    const gym3 = require('../../Img/Sportlife/gym3.png')
    const dummy = require('../../Img/Sportlife/dummy.png')
    const karate = require('../../Img/Sportlife/karate.png')



    return (
        <div className="personal_content">
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2005-2007</h2>
                    <p>Optima / BusinessPro</p>
                </div>

                <div className="personal_item_content">
                    <p>Technology: Fast Repord, Cristal Report</p>
                    <ul>
                        <li>Design of new reports using SQL</li>
                        <li>Implementing programm on a side of the client</li>
                        <li>Teaching employes</li>
                    </ul>
                </div>

            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2008-2019</h2>
                    <p>Altair / EVK Group</p>
                </div>

                <div className="personal_item_content">
                    <p>Technology: 1C</p>
                    <ul>
                        <li>Disign and developing new features</li>
                        <li>Implementing programm on a side of the client</li>
                        <li>Teaching employes</li>
                    </ul>
                </div>

            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2019</h2>
                    <p>Java</p>
                </div>

                <div className="personal_item_content">
                    <p>Beginig of my journey</p>
                    <ul>
                        <li>Learning ... Learning ... Learning</li>
                    </ul>
                </div>

            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2021</h2>
                    <p>Java OCA</p>
                </div>

                <div className="personal_item_content">
                    <p>Pass the exam</p>
                    <ul>
                        <li>Pass the exam and become Oracle certified associated</li>
                    </ul>
                </div>

            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2019</h2>
                    <p>Ladoga Energo</p>
                </div>

                <div className="personal_item_content">
                    <p>Full-stack developer</p>
                    <ul>
                        <li>First commercial project</li>
                    </ul>
                </div>

            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2020</h2>
                    <p>EPAM</p>
                </div>

                <div className="personal_item_content">
                    <p>Java developer</p>
                    <ul>
                        <li>Software developer</li>
                    </ul>
                </div>

            </div>
            <div className="personal_item">
                <div className="personal_item_header">
                    <h2>2020</h2>
                    <p>Luxoft</p>
                </div>

                <div className="personal_item_content">
                    <p>Java developer</p>
                    <ul>
                        <li>Software developer</li>
                    </ul>
                </div>

            </div>
        </div >
    )
}