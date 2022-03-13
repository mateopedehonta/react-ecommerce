import Descripcion from "../components/Descripcion"
import Contador from "./../components/Contador"
const Item =({item})=>{
    return(
        <li className="liCatalogo" key={item.id}>
            <h2>{item.name}</h2>
            {/* <img href={item.img} alt="" /> */}
            {/* <img src="./../img/mause.png" alt="" /> */}
            <Contador/>
            <Descripcion item={item}/>
        </li>
    )
}
export default Item