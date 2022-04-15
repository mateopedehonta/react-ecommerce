import { useState } from "react"
import { useCartContext } from "../context/cartContex"
import { useFirestoreContext } from "../context/firestoreContex"

const GenerarCompra = ()=>{
    const {cartList,precioTotal,setEstadoOrden}= useCartContext()
    const { agregarOrden }= useFirestoreContext()
    const [datosComprador, setDatosComprador] = useState({
        nombre:'',
        telefono:'',
        email:''
    })
    const agregarDatosComprador = (e)=>{
        setDatosComprador({
            ...datosComprador,
            [e.target.name] : e.target.value
        })
    }
    const generarCompra = (e)=>{
        e.preventDefault()
        console.log(datosComprador);
        let orden={}

        orden.comprador = datosComprador
        orden.total = precioTotal()
        orden.items = cartList.map(item =>{
            const id = item.id;
            const nombre = item.name;
            const precio = item.precio
            return {id,nombre,precio}
        })
        agregarOrden(orden)
        setEstadoOrden(false)
        
    }
    return <>      
            <form className="form" onSubmit={generarCompra}>
                <input type="text" placeholder="Nombre" onChange={agregarDatosComprador} name='nombre'/>
                <input type="number" placeholder="Telefono" onChange={agregarDatosComprador} name='telefono'/>
                <input type="email" placeholder="Email" onChange={agregarDatosComprador} name='email'/>
                <input type="submit" value="Terminar compra"  />
            </form>

    </>
}


export default GenerarCompra