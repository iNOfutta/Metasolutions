
export default function Avatar({ avatar, name, duty }){
    return(
        <div>
            <img src={avatar} alt="Avatar"/>
            <p>{name}</p>
            <p>{duty}</p>
        </div>
    )
}