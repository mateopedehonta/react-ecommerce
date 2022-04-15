import { 
    getFirestore ,
    collection,
    addDoc,
} from 'firebase/firestore'
import { 
    useState,
    useContext,
    createContext
} from "react";
import { useCartContext } from './cartContex';

const FirestoreContext = createContext([])

export const useFirestoreContext = ()=> useContext(FirestoreContext)

const FirestoreContextProvider = ({children})=>{
    const [productos, setProductos] = useState([])
    const { setEstadoOrden }= useCartContext
    const db = getFirestore()
    
    const agregarOrden=(orden)=>{   
        console.log(orden);     
        const queryCollection = collection(db, 'ordenes')
        addDoc(queryCollection,orden)
            .catch(err=> console.log(err))
            .finally(()=>{
                setEstadoOrden(false)
                console.log('terminado')
            })
    }
    
    return(
        <FirestoreContext.Provider value={{
            agregarOrden,
            // mostrarPrductos,
            productos
        }}>
            {children}
        </FirestoreContext.Provider>
    )
}

export default FirestoreContextProvider