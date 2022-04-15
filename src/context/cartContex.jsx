import { useContext, createContext , useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children})=>{
    const [ cartList , setCartList ]=useState([])
    const [estadoOrden, setEstadoOrden] = useState(true)

    const agregarProd = (item) =>{
        if (cartList.some((element)=>element.id === item.id)){
            // item.stock = item.stock - item.cantidad
            const newCantidad = cartList.find(element => element.id === item.id).cantidad+item.cantidad
            cartList.map(element => {
                if(element.id === item.id) {
                    element.cantidad = newCantidad
                    // element.stock = element.stock - item.stock
                }
            })
        }else{
            item.stock = item.stock - item.cantidad
            setCartList([...cartList,item])
        }
       
    }
    const eliminarProd =(id)=>{
        setCartList( cartList.filter(prod => prod.id !== id))
    }
    const clean =()=>{
        setCartList([])
    }

    const precioTotal=()=>{
        return cartList.reduce((acum, prod) => 
        acum + (prod.cantidad * prod.precio)
        ,0
        );

    }
    return(
        <CartContext.Provider value={{
            cartList,
            estadoOrden,
            setEstadoOrden,
            agregarProd,
            clean,
            eliminarProd,
            precioTotal,
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider