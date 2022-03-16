const ItemDitail =({producto})=>{
    
    return(
        <li className="liCatalogo" key={producto.id}>
            <h2>{producto.name}</h2>
            <p>{producto.categoria}</p>
            <p>{producto.id}</p>
        </li>
    )
}
export default ItemDitail