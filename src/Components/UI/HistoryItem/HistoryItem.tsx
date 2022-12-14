import React, { ReactNode } from "react";
import cl from './HistoryItem.module.css'
export interface IHistoryItem {
    year: string
    title: string
    subtitle: string
    children: ReactNode
    img: any
}
export const HistoryItem = (props: IHistoryItem) => {
    return (
        <div className={cl.item}>
            <div className={cl.item_header}>
                <h2>{props.year}</h2>
                <p>{props.title}</p>
            </div>

            <div className={cl.item_content}>
                <p>{props.subtitle}</p>
                <img src={props.img} />
                {props.children}
            </div>
        </div>
    )
}