import React, { useEffect, useState } from 'react';
import Contador from '../components/Contador';
import Item from './Items';
const productos= [
    {name:'Teclado',id:1},
    {name:'Mause',id:2},
    {name:'Monitor',id:3}
    
]
const peticion = new Promise((res,rej)=>{
    setTimeout(() => {
        res(productos)
    }, 3000);
})
const ItemListConatiner = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    peticion
     .then((res)=>{
         return res
     })
     .then((resp)=>{setProductos(resp)})
     .finally(()=>setLoading(false))
    }, [])
    
    return(
        <div>
            {
                loading ? <h1>Cargando...</h1>
                :
                productos.map(
                    (item)=><Item item={item} />)
            }
        </div>
    )
} 

export default ItemListConatiner