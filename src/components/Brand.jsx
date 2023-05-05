import { Link } from "react-router-dom"


export default function Brand(){
    return(
        <div>
                <nav className="bg-primary dark:bg-gray-800  shadow">
                    <div className="px-8 mx-auto max-w-7xl">
                        <div className="flex items-center justify-between h-16">
                            <div className="w-full justify-between flex items-center">
                                <Link className="flex-shrink-0 text-white" to="/">
                                    <img className="w-15 h-10" src="" alt="Logo-Metasolutions"/>
                            </Link>
                                <div className="hidden md:block">
                                    <div className="flex items-baseline ml-10 space-x-4">
                                    <Link className="text-terciary  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/#">
                                            Top 50
                                        </Link>
                                        <Link className="text-terciary  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/#">
                                            Meta
                                        </Link>
                                        <Link className="text-terciary dark:text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/sobre">
                                            About us
                                        </Link>
                                        <Link className="text-terciary  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                            Loja
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
</div>
    )
}