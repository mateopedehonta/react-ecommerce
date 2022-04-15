import { useState } from "react";
// import Contador from "../components/Contador";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faX} from '@fortawesome/free-solid-svg-icons'
const ItemCart = ({item, eliminar}) => {
    const [idCart, setIdCart] = useState(item.id)
    const eliminarProd =()=>{
        eliminar(idCart)
    }
    return(
        <div className="itemCart" key={item.id}>
                    <div>{item.name}</div>
                    <div></div>
                   <div>{item.cantidad}</div>
                   <div><FontAwesomeIcon icon={faX} onClick={eliminarProd} className='xIcon'/></div>                   
                    <div> {item.precio * item.cantidad}</div>
                </div>
    )
}

export default ItemCart