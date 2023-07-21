
import './App.css';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import Productos from './pages/productos/Productos';
import FormProductos from './pages/productos/FormProductos';
import DetalleProducto from './pages/productos/DetalleProducto';
import ActualizaProducto from './pages/productos/ActualizaProducto';
import Registro from './pages/usuarios/Registro';
import Login from './pages/usuarios/Login';

function App() {
  return (

    <BrowserRouter>

      <div className="container">

        <Routes>
          <Route path='' element = {<Navigate to='/productos' />} />
          <Route path='productos' element = {<Productos />} />
          <Route path='productos/nuevo' element = {<FormProductos />} />
          <Route path='productos/:productoId' element = {<DetalleProducto />} />
          <Route path='productos/edit/:productoId' element = {<ActualizaProducto />} />
          <Route path='registro' element = {<Registro />} />
          <Route path='login' element = {<Login />} />
        </Routes>

      </div>
    
    </BrowserRouter>
    
   
  );
}

export default App;
