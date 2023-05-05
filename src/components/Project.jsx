import Sample from "./Sample"

export default function Project({pic, description, icon }){
    return(
        <>
            <Sample pic={pic} description={description}/>
            <img src={icon} alt={icon === undefined? "":""}/>
        </>
    )
}