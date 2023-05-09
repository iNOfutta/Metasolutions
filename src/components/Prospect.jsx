import { useState } from "react";
import { useNavigate } from "react-router-dom";

//import AuthorForm from "./AuthorForm";

export default function Register(){
    let author = JSON.parse(window.localStorage.getItem("AUTHOR"));

    let [formValue, setFormValue] = useState({name:"", description:"", stakeholders:"", issue:"", croquis:"", timing:"", interest:"", place:"", ref:author.id});
    const navigate = useNavigate();

    function handleInput(e){
        let {name, value} = e.target;
        setFormValue({...formValue, [name]:value});
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        fetch(`https://metasolutions.onrender.com/projects`,{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formValue)
        })
        .then(res=>{
            let msg = res.ok? "Success":"Something went wrong";
            if(res.ok){
                navigate("/perfil");
            }
            console.log(msg)

        })
        .then(data=>console.log(data))
        .catch(error=>console.log(error.message))
    }

    return(
        <>
                <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col">
                <p className="text-center text-2xl p-10 font-bold">Register a Project</p>
                <div className="grid w-full gap-4 md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={handleInput} value={formValue.name}/>
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Name</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="description" id="floating_password" className="w-full block py-2.5 px-0 w-sm text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required   onChange={handleInput} value={formValue.description}/>
                    <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Descricao em 240 palavras</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="stakeholders" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required   onChange={handleInput} value={formValue.stakeholders}/>
                    <label htmlFor="stakeholders" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Produtos e beneficiarios</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="issue" id="issue" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required   onChange={handleInput} value={formValue.issue}/>
                    <label htmlFor="issue" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Problematica a se resolver</label>
                </div>
                </div>
                <div className="grid gap-4 w-full md:grid-cols-2 md:gap-6">

                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="croquis" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required   onChange={handleInput} value={formValue.croquis}/>
                    <label htmlFor="croquis" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dar um croquis</label>
                </div>
                
                <div className="relative z-0 w-full mb-6 group">
                    <input type="date" name="timing" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={handleInput} value={formValue.timing}/>
                    <label htmlFor="timing" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Timing</label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="interest" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={handleInput} value={formValue.interest}/>
                    <label htmlFor="interest" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Area de Interesse</label>
                </div>
                      <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="place" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required  onChange={handleInput} value={formValue.place}/>
                    <label htmlFor="place" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Localização
                        Geográfica</label>
                </div>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4">Submit</button>
            </form>
  
        </>
    )
}
