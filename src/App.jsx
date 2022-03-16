import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navBar';
import ItemDitailContainer from './containers/ItemDitailContainer';
import ItemListContainer from './containers/ItemListContainer';


function App() {
  return <>
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='/detalle/:detalleId' element={<ItemDitailContainer/>}/>
      
      <Route path='/*' element={<Navigate to='/' replace />}/>
    </Routes>

  </BrowserRouter>
 
  </>
}
export default App;
