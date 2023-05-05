import Sample from "./Sample";


export  default  function AuthorForm({pic, legend}){
    return(
        <>
            <Sample pic={pic} legend={legend}/>
            <form method="post">
                <Box type="checkbox" boxMessage="Conta institucional?"/>
                <InputText type="text" inputValue="Nome  da Instituição"/>
                <InputText type="password" inputValue="Senha"/>
                <InputText type="password" inputValue="Repita a Senha"/>
                <InputText type="date" inputValue="Data de Nascimento"/>
                <InputText type="email" inputValue="E-mail"/>
                <InputText type="number" inputValue="Contacto"/>
                <Button type="submit" value="Enviar"/>
            </form>
        </>
        )
}

export function Box({ boxType, boxMessage }){
    return (
        <>
            <input type={boxType}/>{boxMessage}
        </>
    )
}

export function InputText({inpuType, inputValue}){
    return(
        <>
            <div>{inputValue}</div><input type={inpuType}/>
        </>
    )
}

export function Button({type, value}){
    return(
        <>
            <input type={type} value={value}/>
        </>
    )
}