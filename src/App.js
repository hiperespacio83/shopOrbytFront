
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Productos from './pages/productos/Productos';
import FormProductos from './pages/productos/FormProductos';
import DetalleProducto from './pages/productos/DetalleProducto';
import ActualizaProducto from './pages/productos/ActualizaProducto';
import Registro from './pages/usuarios/Registro';
import Login from './pages/usuarios/Login';
import { QueryClient, QueryClientProvider } from 'react-query';
import Usuarios from './pages/usuarios/Usuarios';
import Inicio from './pages/Inicio';
import Header from './components/Header';
import Footer from './components/Footer';
import MenuCliente from './pages/zonacliente/MenuCliente';
import ActualizaUsuario from './pages/usuarios/ActualizaUsuario.jsx';
import Contacto from './pages/zonacliente/Contacto';
import Dashboard from './pages/zonacliente/Dashboard';

const queryClient = new QueryClient();

function App() {
  return (

    <QueryClientProvider client={queryClient}>


      <BrowserRouter>

        <div className='wrapper'>

          <Header />
            <div className='main'>
              <Routes>
            {/* <Route path='' element={<Navigate to='/productos' />} /> */}
            <Route path='' element={<Inicio />} />
            <Route path='productos' element={<Productos />} />
            <Route path='productos/nuevo' element={<FormProductos />} />
            <Route path='productos/:productoId' element={<DetalleProducto />} />
            <Route path='productos/edit/:productoId' element={<ActualizaProducto />} />
            <Route path='registro' element={<Registro />} />
            <Route path='login' element={<Login />} />
            <Route path='edit' element={<ActualizaUsuario />} />
            <Route path='usuarios' element={<Usuarios/>} />
            <Route path='menucliente' element={<MenuCliente />} />
            <Route path='contacto' element={<Contacto/>} />
            <Route path='dashboard' element={<Dashboard />}/>
          </Routes>
            </div>
          

          <Footer/>

        </div>

      </BrowserRouter>


    </QueryClientProvider>




  );
}

export default App;
