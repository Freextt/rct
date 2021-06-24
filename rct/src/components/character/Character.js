import Simpsons from "../simpsons/Simpsons";
export default function Character({item:{name,surname,age,info,photo}}){
    return(
        <div>
            <h2>{name} {surname}. Age - {age}</h2>
            <img src={photo} alt=""/>
            <p>{info}</p>
        </div>
    )
}