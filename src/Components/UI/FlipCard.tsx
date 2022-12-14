import React, { ReactNode } from "react";
import cl from './FlipCard.module.css';

export interface IMain {
    title: string
    img: any
    children: ReactNode
    className: string
}

export const FlipCard = (props: IMain) => {
    return (
        <div className={props.className}>
            <div className={cl.flip_card}>
                <div className={cl.flip_card_inner}>
                    <div className={cl.flip_card_front}>
                        <img src={props.img} className={cl.flip_card_img} />
                    </div>
                    <div className={cl.flip_card_back}>
                        <h1>{props.title}</h1>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}