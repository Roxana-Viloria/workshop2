import {useState} from 'react'
import './Card.css';



function Card(props) {
    const [contador,actualizar]= useState (0)
    const {name, description, usuario, picture,productSort,id} = props;

    const incrementar =()=>{
        const data= {contador:contador +1,id:id}
        actualizar (contador +1)
        productSort(data)
    }
    const decrementar =()=>{
        const data= {contador:contador -1,id:id}
        actualizar (contador -1)
        productSort(data)
    }
    
    return (
        <div className="Card">
            <img src={picture}></img>
            <div className="information">
                <button onClick={incrementar}> me gusta</button>
                <button onClick={decrementar}> no me gusta</button>
                <span>
                    {contador}
                </span>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}
  
  export default Card;

