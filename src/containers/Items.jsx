import { Link } from "react-router-dom"
import Contador from "./../components/Contador"
const Item =({item})=>{
    return(
        <li className="liCatalogo" key={item.id}>
            <h2>{item.name}</h2>
            {/* <p>{item.categoria}</p> */}
            <Contador/>
            <Link to={`/detalle/${item.id}`}>Mas detalles</Link>
        </li>
    )
}
export default Item