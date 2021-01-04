import React, { lazy, Suspense } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import Loader from '../youtube/components/loader'


const load = (Component) => (props) => (
    <Suspense fallback={<Loader/>}>
        <Component {...props}/>
    </Suspense>
)

const Youtube       = load(lazy(()  => import('../youtube'))) 
const routes = [
    { exact:true,   path:"/",                                   component: Youtube},
    {               path:"/",                                   component: Youtube},
    {               path: "/channel/UCib793mnUOhWymCh2VJKplQ",  component: () => {  window.location.href = 'https://www.youtube.com/channel/UCib793mnUOhWymCh2VJKplQ'; return null; }},
    {               path: "/channel/UCU5JicSrEM5A63jkJ2QvGYw",  component: () => {  window.location.href = 'https://www.youtube.com/channel/UCU5JicSrEM5A63jkJ2QvGYw'; return null; }},
    {               path: "/channel/UC5fWvbBnaFAi2hJlHRmg5kw",  component: () => {  window.location.href = 'https://www.youtube.com/channel/UC5fWvbBnaFAi2hJlHRmg5kw'; return null; }}
]

const Router = () => {
    return(
        <BrowserRouter>       
                {routes.map( (route , index)=> <Route key={index} {...route}/>)}
        </BrowserRouter>
    );
}

export default Router;

