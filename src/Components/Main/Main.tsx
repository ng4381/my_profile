import React, { ReactNode } from "react";
import '../Styles/Main.css'
import { Routers } from '../Routing/Routing'
import { NavLink } from 'react-router-dom'

export interface IMain {
  children: ReactNode
}

export const Main = (props: IMain) => {
  return (
    <div className='grid_container'>
      <div className='menu'>
        <div className="navbar">
          {/* <a className="" href="#" >About me</a>
            <a className="active" href="#" >CV</a>
            <a className="" href="#" >Portfolio</a> */}
          {Routers.routes.map((item, index) => (
            <NavLink to={item.path} key={index}>{item.name}</NavLink>
          ))}
        </div>
      </div>
      <div className='content'>

        {props.children}

      </div>
      <div className='footer'>
        &copy; Nikita Goloveshko
      </div>
    </div>
  )
}