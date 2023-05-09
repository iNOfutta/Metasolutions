import { Link } from "react-router-dom";

export default function Perfil(){
    fetch("https://metasolutions.onrender.com/projects")
        .then(res=>{
            return res.json();
        })
        .then(data=>window.localStorage.setItem("PROJECTS", JSON.stringify(data)))
        .catch(error=>console.log(error.message))
        console.log(window.localStorage.getItem("PROJECTS"));


    let author = JSON.parse(window.localStorage.getItem("AUTHOR"));
    let projects = JSON.parse(window.localStorage.getItem("PROJECTS"));
    
    let prospect = projects.map(project=>{
                            return <div className="max-w-sm bg-primary border border-gray-200 rounded-lg shadow-2xl dark:bg-gray-800 dark:border-gray-700 pb-10" key={project.id}>
                            <a href="#">
                                <img className="rounded-t-lg" src="" alt="Logo" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Editar
                                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div>}
                        )

    return(
        <div>
                
                
                <div className="flex items-center space-x-4 justify-center p-5">
                    <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Picture"/>
                    <div className="font-medium dark:text-white">
                        <div>{author.name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{author.email}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{author.tel}</div>
                    </div>
                </div>

                <div className="grid grid-cols-5 gap-2">{prospect}</div>

                <Link to="/prospect"><div className="w-full h-32 flex justify-center items-center">
                <button type="button" className="focus:outline-none text-white bg-secondary hover:bg-secondary/50 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 -mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-1/6">Criar prospecto</button>
                </div></Link>

        </div>
    )
}