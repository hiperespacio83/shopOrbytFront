import { Link, useNavigate, useParams } from 'react-router-dom';
import classes from '../usuarios/usuarios.module.css'
import { useEffect, useState } from 'react';
import { getUsuarioById } from '../../services/usuarios.service';
import Dashboard from './Dashboard';
import ActualizaUsuario from '../usuarios/ActualizaUsuario';
import { getById } from '../../services/productos.service';
import Login from '../usuarios/Login';



const MenuCliente = ({ user }) => {


    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(user);
    const [cesta, setCesta] = useState(user.cart);


    const logout = () => {
        // 2. Eliminar cualquier información de sesión del almacenamiento local.
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');

    };


    // useEffect(() => {

    //     // getUsuarioById(usuario._id)
    //     // .then(({data}) => {
    //     //     // esto es por si la respuesta lleva algun error por ejemplo si se mete un id que no existe
    //     //     if (data.error) {
    //     //         return setUsuario(null);
    //     //     }
    //     //     console.log(data);
    //     //     setUsuario(data);
    //     //     console.log(usuario);
    //     // })
    //     // .catch(error => console.log(error));
    // }, []);


    return (
       usuario && usuario.role === "admin" ?
            <Dashboard /> : <div className="container mt-5">

                <div className="row mb-5 pt-5">

                    <div className='col-12 border border-3 rounded-4 border-info border-start'>


                        <h2>Mi cesta</h2>

                        <ul>
                            {cesta.map(producto => (
                                <li>{producto}</li>
                            ))}
                        </ul>

                    </div>

                </div>

                <div className="row mb-5">

                    <div className='col-12 border border-3 rounded-4 border-info border-start pb-5 '>

                        <h2>Editar mi perfil</h2>

                        <ActualizaUsuario user={usuario} className='mt-2' />  

                    </div>

                </div>

                <div className='row'>

                    <div className='col-12 d-flex justify-content-center'>


                        <button className='btn btn-info' onClick={logout}>
                            Cerrar sesión
                        </button>

                    </div>

                </div>
</div>  
            )

}

export default MenuCliente;