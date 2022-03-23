import { useContext, createContext , useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children})=>{
    const [ cartList , setCartList ]=useState([])
    const agregarProd = (item) =>{
        setCartList([...cartList,item])
    }
    const eliminarProd =(id)=>{
        setCartList( cartList.filter(prod => prod.id !== id))
    }
    const clean =()=>{
        setCartList([])
    }


    return(
        <CartContext.Provider value={{
            cartList,
            agregarProd,
            clean,
            eliminarProd

        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContextProvider