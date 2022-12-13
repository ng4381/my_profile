import { AboutMe } from "../AboutMe/AboutMe"
import { CV } from "../CV/CV"
import { Portfolio } from "../Portfolio/Portfolio"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from "../Main/Main"
import { Personal } from "../AboutMe/Personal/Personal"
import { Sportlife } from "../AboutMe/Sportlife/Sportlife"
import { IT } from "../AboutMe/IT/IT"

export const Routers = {
    routes: [
        {path: '/', element: <AboutMe/>, name:'About me'},
        {path: '/cv', element: <CV/>, name:'CV'},
        {path: '/portfolio', element: <Portfolio/>, name:'Portfolio'},
    ]
}

export const Routers_items = {
    routes: [
        {path: '/personal', element: <Personal/>, name:'Personal'},
        {path: '/sportlife', element: <Sportlife/>, name:'Sportlife'},
        {path: '/it', element: <IT/>, name:'IT'},
    ]
}

export const Routing = () => {

    return (
        <BrowserRouter>
        <Main>
            <Routes>
                    {Routers.routes.map((item, index) => (
                        <Route {...item} key={index}/>
                    ))}
                    {Routers_items.routes.map((item, index) => (
                        <Route {...item} key={index}/>
                    ))}
            </Routes>
        </Main>    
        </BrowserRouter>
    )

}