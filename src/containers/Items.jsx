import Contador from "./../components/Contador"
const Item =({item})=>{
    return(
        <li key={item.id}>
            {item.name}
            <Contador/>
        </li>
    )
}
export default Item