import React from "react";
import cl from './MenuItemBox.module.css';
export interface IMenuItemBox {
    img: any
    title: string
}

export const MenuItemBox = (props: IMenuItemBox) => {
    return (

        <div className={cl.menu_item}>
            <img src={props.img} className={cl.item_img} />
            <div className={cl.item_caption}>
                {props.title}
            </div>
        </div>

    )
}