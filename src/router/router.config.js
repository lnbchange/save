import Home from '../views/home/Home'
import Detial from '../views/detial/Detial'
let routes=[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/detial',
        component:Detial
    },
    {
        path:'/',
        redirect:'/home'
    }
]

export default routes