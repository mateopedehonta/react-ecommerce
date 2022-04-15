import { useState } from "react"
import { Link } from "react-router-dom";
import Contador from "../components/Contador"
import {useCartContext} from '../context/cartContex'
const ItemDitail =({producto})=>{
   const [count, setCount] = useState(null)
   const { agregarProd } = useCartContext()
   const onAdd = cant => {
       setCount(cant)
       agregarProd({...producto,cantidad:cant})
   }

    return(
        <li className="liCatalogo" key={producto.id}>
            <h2>{producto.name}</h2>
            {
                

                count ?
                <>
                 <Link to="/cart"><button>Ir al carrito</button></Link>
                 <Link to="/"><button>Seguir comprando</button></Link>
                </>
               
                :
                <Contador stock={producto.stock} onAdd={onAdd}/>
            }
        </li>
    )
}
export default ItemDitail