import { useState } from "react";

const ItemCart = ({item, eliminar}) => {
    const [idCart, setIdCart] = useState(item.id)
    const eliminarProd =()=>{
        eliminar(idCart)
    }
    return(
        <div className="itemCart" key={item.id}>
                    <p>{item.cantidad} {item.name}</p>
                    <button onClick={eliminarProd}>Eliminar </button>
                </div>
    )
}

export default ItemCart