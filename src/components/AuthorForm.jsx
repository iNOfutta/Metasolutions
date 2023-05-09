import Sample from "./Sample";


export  default  function AuthorForm({pic, legend}){
    return(
        <>
            <Sample pic={pic} legend={legend}/>
            
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