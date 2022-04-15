import React, { useEffect, useState } from 'react';
import Item from './Items';
import { useParams } from 'react-router-dom';
import { collection, Firestore, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemListContainer = ()=>{
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoriaId } = useParams()
    useEffect(() => {
        const db = getFirestore()
        const queryColection = collection(db,'items')
        const queryFilter = categoriaId ?
            query(queryColection,where('categoria', '==', categoriaId))
            :
            queryColection
        
        getDocs(queryFilter)
        .then(resp => setProductos(resp.docs.map(item=>({ id:item.id, ...item.data()}))))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
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