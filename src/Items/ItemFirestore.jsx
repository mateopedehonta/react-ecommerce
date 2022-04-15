import React, { useEffect, useState } from 'react';
import { getFirestore , doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'



const ListFirestore =()=>{//mostrar productos por id 
    const [producto, setProducto] = useState([])
    const [productos, setProductos] = useState([])
    const [prueba, setPrueba] = useState([])

    const db = getFirestore()


    useEffect(()=>{
        const queryDb = doc(db,'Productos','ePH5Xki9bEngXN4aXxuf')
        getDoc(queryDb)
            .then(resp => setProducto({...resp.data()}))
    },[])

    useEffect(()=>{
        const queryColection = collection(db,'Productos')
        getDocs(queryColection)//mostrar todo la base de datos
        .then(resp=> setProductos( resp.docs.map(item => ({ ...item.data(),id:item.id}))))

        const queryFilter = query( queryColection, where('precio','==', 300))
        getDocs(queryFilter)//mostrar datos filtrados
        .then(resp=> setPrueba( resp.docs.map(item => ({ ...item.data(),id:item.id}))))


    },[])
    // console.log(producto);
    // console.log(prueba);
    // console.log(productos.map(item=>item));
    return(
        <>
        </>
    )
}



export default ListFirestore