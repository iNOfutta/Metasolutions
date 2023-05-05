import { Link } from "react-router-dom";
import Icon from "./Icon";
import {FaProjectDiagram, FaHome} from "react-icons/fa";
import {VscOrganization} from "react-icons/vsc"


export default function NavMenu(){
    return(
        <>
            
<ul className="flex flex-wrap items-center text-base justify-center">
    <li className="mr-2 p-5">
        <Link to="/" className="inline-block p-4 rounded-t-lg hover:bg-primary hover:border-solid-5 hover:text-white hover:font-bold">
            <Icon icon={<FaHome size='50'/>}/>
            Home
        </Link>
    </li>
    <li className="mr-2 p-5">
        <Link to="/projects" className="inline-block p-4 rounded-t-lg hover:bg-primary hover:border-solid-5 hover:text-white hover:font-bold">
            <Icon icon={<FaProjectDiagram size='50'/>}/>
            Projects
        </Link>
    </li>
    <li className="mr-2 p-5">
        <Link to="" className="inline-block p-4 rounded-t-lg hover:bg-primary hover:border-solid-5 hover:text-white hover:font-bold">
            <Icon icon={<VscOrganization size="50"/>}/>
            Organizations
        </Link>
    </li>
</ul>
<hr/>

        </>
        )
}


