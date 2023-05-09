import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Sobre from "./components/Sobre";
import Register  from "./components/Register";
import Logon from "./components/Logon";
import Root from "./providers/Root";
import Perfil from "./components/Perfil";
import Prospect from "./components/Prospect"


export default function App(){
    const router = createBrowserRouter(
        createRoutesFromElements(
        <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logon' element={<Logon />}/>
        <Route path='/perfil' element={<Perfil />}/>
        <Route path='/prospect' element={<Prospect />}/>
        </Route>
    ))
    
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}
