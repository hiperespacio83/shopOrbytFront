import { Link, useParams } from 'react-router-dom';
import classes from '../usuarios/usuarios.module.css'
import { useEffect, useState } from 'react';
import { getUsuarioById } from '../../services/usuarios.service';
import Dashboard from './Dashboard';



const MenuCliente = ({user}) => {

    const {userId} = useParams();

    const [usuario, setUsuario] = useState(user);
    

    

    useEffect(()=> {
        getUsuarioById(usuario._id)
        .then(({data}) => {
            // esto es por si la respuesta lleva algun error por ejemplo si se mete un id que no existe
            if (data.error) {
                return setUsuario(null);
            }
            console.log(data);
            setUsuario(data);
            console.log(usuario);
        })
        .catch(error => console.log(error));
    }, []);

   




    

    return ( 
        usuario.role === "admin" ?
    <Dashboard /> : <div className="container mt-5">

        <div className="row mb-5 pt-5">

            <div className='col-12 border border-3 rounded-4 border-info border-start'>
                <div className={classes.ficha}>

                    <h3>Mis pedidos</h3>
                    <button className='btn btn-info'>Acceder</button>

                </div>

            </div>

        </div>

        <div className="row">

            <div className='col-12 border border-3 rounded-4 border-info border-start '>
                <div className={classes.ficha}>

                    <h3>Mi perfil</h3>
                    <Link to={`/edit/${usuario._id}`}>
                    <button className='btn btn-info'>Acceder</button>
                    </Link>
                    

                </div>

            </div>

        </div>





    </div>)
    
    
    






}

export default MenuCliente;