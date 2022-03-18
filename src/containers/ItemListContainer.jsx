import React, { useEffect, useState } from 'react';
import Item from './Items';
import { useParams } from 'react-router-dom';
import getFetch from '../array/getFetch';

const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()
    useEffect(() => {
        
        if (categoriaId) {
            getFetch
                .then((res)=>{
                    return res
                })
                .then((resp)=>{setProductos(resp.filter(pro => pro.categoria===categoriaId))})
                .finally(()=>setLoading(false))
        }else{
            getFetch
                .then((res)=>{
                    return res
                })
                .then((resp)=>{setProductos(resp)})
                .catch(err => console.log(err))
                .finally(()=>setLoading(false))
        }
    
    }, [categoriaId])

    return(
        <div className='catalogo'>
            {
                loading ? <h1>Cargando...</h1>
                :
                productos.map(
                    (item)=><Item item={item} key={item.id} />)
            }
        </div>
    )
} 

export default ItemListContainer