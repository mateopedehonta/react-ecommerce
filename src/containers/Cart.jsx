import { useCartContext } from "../context/cartContex"
import ItemCart from "../Items/ItemCart"
import { Link } from "react-router-dom";
import GenerarCompra from "../components/GenerarCompra";


const Cart = ()=>{
    const {cartList,clean,eliminarProd,precioTotal,estadoOrden,setEstadoOrden}= useCartContext()

  
    const cleanCart =()=>{
        clean()
    }
    const eliminar =id=>{
        eliminarProd(id)
    }
    const otraCompra =()=>{
        setEstadoOrden(true)
        clean()
    }
    // console.log(estadoOrden);
    return <div className=" cart ">
            <h2> Mi carrtito de compra</h2>
            {
                
                cartList.length === 0 ? 
                <div>
                    <h3>Tu carrito está vacío</h3> 
                    <Link to={'/'}>Ir a comprar</Link>
                </div>
                :
                estadoOrden?
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
                <GenerarCompra />
                </div>
               
                    :
                    <div>
                        <h2>Compra terminada</h2>
                        <Link to={'/'}><input type="button" value="Hacer otra compra" onClick={otraCompra}/></Link>
                        
                    </div>
                    
            
             }
    </div> 
}

export default Cart