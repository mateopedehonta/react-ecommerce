import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import Cart from './containers/Cart';
import ItemDitailContainer from './containers/ItemDitailContainer';
import ItemListContainer from './containers/ItemListContainer';
import CartContextProvider from './context/cartContex';


function App() {
  return <>
    <CartContextProvider>
      <BrowserRouter>
          <NavBar />
          <Routes>
            {/* <div> */}
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/:categoriaId' element={<ItemListContainer/>}/>
              <Route path='/detalle/:detalleId' element={<ItemDitailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              
              <Route path='/*' element={<Navigate to='/' replace />}/>
            {/* </div> */}
          </Routes>
        </BrowserRouter>
    </CartContextProvider>
      
  </>
}
export default App;
