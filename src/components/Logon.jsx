import { useState } from "react";
import { useNavigate } from "react-router-dom";

//import AuthorForm from "./AuthorForm";


export default function Logon(){
    let [formValue, setFormValue] = useState({email:"", password:""});
    const navigate = useNavigate();
/*    let [authors, setAuthors] = useState([]);
    let [author, setAuthor] = useState({});*/

    function handleInput(e){
        let {name, value} = e.target;
        setFormValue({...formValue, [name]:value});
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        fetch("https://metasolutions.onrender.com/authors")
        .then(res=>{
            let msg = res.ok? "Success":"Something went wrong";
            console.log(msg)
            return res.json();
        })
        .then(data=>window.localStorage.setItem("AUTHORS", JSON.stringify(data)))
        .catch(error=>console.log(error.message))
        let authors = JSON.parse(window.localStorage.getItem("AUTHORS"));
        authors.map(author=>{
            if(author.email === formValue.email && author.password === formValue.password){
                window.localStorage.setItem("AUTHOR", JSON.stringify(author));
                console.log(author);
                navigate("/perfil");
            }
        })
    }
        

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="E-mail" name="email" onChange={handleInput} value={formValue.email}/>
                <input type="password" placeholder="Senha" name="password" onChange={handleInput} value={formValue.password}/>
                <input type="submit" value="Enviar"/>
            </form>
        </>
    )
}
