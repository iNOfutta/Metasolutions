import { useState } from "react";
import { useNavigate } from "react-router-dom";

//import AuthorForm from "./AuthorForm";


export default function Register(){
    let [formValue, setFormValue] = useState({type:"", name:"", password:"", check:"", birthdate:"", email:"", tel:""});
    const navigate = useNavigate();

    function handleInput(e){
        let {name, value} = e.target;
        setFormValue({...formValue, [name]:value});
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        fetch("https://metasolutions.onrender.com/authors",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formValue)
        })
        .then(res=>{
            let msg = res.ok? "Success":"Something went wrong";
            button = res.ok? "Entrar no perfil":null;
            console.log(msg+' : '+button)

        })
        .then(data=>console.log(data))
        .catch(error=>console.log(error.message))
    }
    const handleClick = ()=>navigate("/logon");
    let button;

    return(
        <>
            <div className="w-full h-32 flex justify-center items-center">
                <button type="button" className="focus:outline-none text-white bg-primary hover:bg-primary/25 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 -mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-1/6" onClick={handleClick}>{button}</button>
                </div>
            <form onSubmit={handleSubmit}>
                <input type="checkbox" name="type" onChange={handleInput} value={formValue.type}/>
                <p>Conta institucional?</p>
                {" "}
                <input type="text" placeholder="Nome" name="name" onChange={handleInput} value={formValue.name}/>
                <input type="password" placeholder="Senha" name="password" onChange={handleInput} value={formValue.password}/>
                <input type="password" placeholder="Repita a Senha" name="check" onChange={handleInput}  value={formValue.check}/>
                <p>Data de Nascimento</p>
                <input type="text" name="birthdate" onChange={handleInput} value={formValue.birthdate}/>
                <input type="email" placeholder="E-mail" name="email" onChange={handleInput} value={formValue.email}/>
                <p>Contacto</p>
                <input type="tel" name="tel" onChange={handleInput} value={formValue.tel}/>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}
