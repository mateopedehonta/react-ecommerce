// import { useState } from "react"
import { useCartContext } from "../context/cartContex"
import ItemCart from "./ItemCart"
import { Link } from "react-router-dom";


const Cart = ()=>{
    const {cartList,clean,eliminarProd,precioTotal}= useCartContext()

    // const [id, setId] = useState(null)
    const cleanCart =()=>{
        clean()
    }
    const eliminar =id=>{
        eliminarProd(id)
    }
    return <div className=" cart ">
            <h2> Mi carrtito de compra</h2>
            {
                
                cartList.length === 0 ? 
                <div>
                    <h3>Tu carrito está vacío</h3> 
                    <Link to={'/'}>Ir a comprar</Link>
                </div>
                :
                <div>
                <div className="itemCart" >
                    <h3>Nombre</h3>
                    <h3>Descripcion</h3>
                   <h3>Cantdidad</h3>
                   <h3>Eliminar</h3>
                    <h3>Precio</h3>
                </div>
                {cartList.map(
                    (item) => <ItemCart item={item} key={item.id} eliminar={eliminar}/>
                )}
                <div className="itemCart" >
                    <div></div><div></div><div></div>
                   <h3>Total</h3>
                    <h3>{precioTotal()}</h3>
                </div>
                <button onClick={cleanCart}>Eliminar todos los productos</button>
            </div>
            }
            
    </div> 
}

export default Cart