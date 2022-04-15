import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useEffect } from "react"
// import {  } from "react"

import productos from "../array/productos"

const AgregarFirestore = ()=>{
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    // const [first, setfirst] = useState(second)
    useEffect(()=>{
        productos.map(item=>{
            addDoc(queryCollection,item)
            .catch(err=> console.log(err))
            .finally(()=>console.log('Orden agregada'))
    
        })
    },[])
    
    return<>
    </>
}

export default AgregarFirestore