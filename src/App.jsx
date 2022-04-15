import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Cart from './containers/Cart';
import ItemDitailContainer from './Items/ItemDitailContainer';
import ItemListContainer from './Items/ItemListContainer';
import CartContextProvider from './context/cartContex';
import ListFirestore from './Items/ItemFirestore'
import Form from './containers/Form';
import FirestoreContextProvider from './context/firestoreContex';
import AgregarFirestore from './components/agregarFirestore';

function App() {
  return <>
    <ListFirestore/>
    {/* <AgregarFirestore/> */}

      <FirestoreContextProvider>
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <section className='container'>
              <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='/:categoriaId' element={<ItemListContainer/>}/>
                  <Route path='/detalle/:detalleId' element={<ItemDitailContainer/>}/>
                  <Route path='/cart' element={<Cart/>}/>
                  <Route path='/Form' element={<Form/>}/>
                  <Route path='/*' element={<Navigate to='/' replace />}/>
              </Routes>
            </section>
          </BrowserRouter>
      </CartContextProvider>
      </FirestoreContextProvider>
    
      
  </>
}
export default App;
