import React, { useEffect, useState } from 'react';
import Item from './Items';
import productos from '../array/productos';

const peticion = new Promise((res,rej)=>{
    setTimeout(() => {
        res(productos)
    }, 1000);
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
        <div className='catalogo'>
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