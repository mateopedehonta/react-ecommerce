import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import getFetch from "../array/getFetch"
import ItemDitail from "../Items/ItemDetail"
const ItemDitalContainer =()=>{
    const [producto, setProducto] = useState({})
    const { detalleId } = useParams()


    useEffect(()=>{
        getFetch
        .then(resp => setProducto(resp.find(prod =>prod.id === detalleId)))
    },[detalleId])
    return (
        <ItemDitail producto={producto}/>
    )
}
export default ItemDitalContainer