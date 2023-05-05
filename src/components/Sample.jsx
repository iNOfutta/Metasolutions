
export default function Sample({ pic, description, legend }){
    let img = "";
    if(pic !== undefined){
        img = <img src={pic} alt="Picture"/>; 
    }
    return(
        <div>
            {img}
            <p>{description === undefined? legend : description}</p>
        </div>
    )
}