import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
// import getFetch from "../array/getFetch"
import ItemDitail from "./ItemDetail"
const ItemDitalContainer =()=>{
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(false)
    const { detalleId } = useParams()
    

    useEffect(()=>{
        const db = getFirestore()
        const queryDb = doc(db,'items',detalleId)
        getDoc(queryDb)
            .then(resp => setProducto({...resp.data(),id:resp.id}))
            .finally(()=>setLoading(true))
    },[detalleId])
    return <>
        {
            loading?
            <ItemDitail producto={producto}/>
            :
            <h1>Cargando...</h1>
        }
    </>
}
export default ItemDitalContainer