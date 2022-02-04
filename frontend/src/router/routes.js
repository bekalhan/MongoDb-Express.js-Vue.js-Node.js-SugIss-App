import Home from '../components/Home'
import Sug from '../components/suggestion'
import Iss from '../components/issue'
import Main from '../components/Main'

export const routes = [
    {path:"/",component:Main,name:"Main"},
    {path : "/subject", component : Home,name : "HomePage"},
    {path : "/subject/suggestion/:id",component : Sug},
    {path : "/subject/issue/:id",component : Iss},
]