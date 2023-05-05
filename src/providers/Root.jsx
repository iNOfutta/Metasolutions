import NavMenu from "../components/NavMenu";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Root(){
    return(
        <>
            <Brand/>
            <NavMenu/>
            <Outlet/>
            <Footer/>
        </>
    )
}