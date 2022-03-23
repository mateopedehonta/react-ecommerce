import { Link } from "react-router-dom"
const Item =({item})=>{
    return(
        <li className="liCatalogo" key={item.id}>
            <h2>{item.name}</h2>
            <Link to={`/detalle/${item.id}`}>Mas detalles</Link>
        </li>
    )
}
export default Item