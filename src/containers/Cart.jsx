// import { useState } from "react"
import { useCartContext } from "../context/cartContex"
import ItemCart from "./ItemCart"

const Cart = ()=>{
    const {cartList,clean,eliminarProd}= useCartContext()
    // const [id, setId] = useState(null)
    const cleanCart =()=>{
        clean()
    }
    const eliminar =id=>{
        eliminarProd(id)
    }
    return <>
        {cartList.map(
            (item) => <ItemCart item={item} key={item.id} eliminar={eliminar}/>
        )}
        <button onClick={cleanCart}>Eliminar todos los productos</button>
    </>
}

export default Cart