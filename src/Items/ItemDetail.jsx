// import { Link } from "react-router-dom"
import { useState } from "react"
import Contador from "../components/Contador"

const ItemDitail =({producto})=>{
   const [onAdd, setOnAdd] = useState(true)

    return(
        <li className="liCatalogo" key={producto.id}>
            <h2>{producto.name}</h2>
            <Contador stock={producto.stock}/>
        </li>
    )
}
export default ItemDitail