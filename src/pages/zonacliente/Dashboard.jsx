import { Link, useNavigate } from 'react-router-dom';
import classes from './../usuarios/usuarios.module.css'

const Dashboard = () => {

    const navigate = useNavigate();


    const logout = () => {
        // 2. Eliminar cualquier información de sesión del almacenamiento local.
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
        
    };


    return <div className="container mt-5">

        <div className="row mb-5 pt-5">

            <div className='col-12 border border-3 rounded-4 border-info border-start'>
                <div className={classes.ficha}>

                    <h3>Gestión de usuarios</h3>
                    <Link to={'/usuarios'}>
                    <button className='btn btn-info'>Acceder</button>
                    </Link>
                    

                </div>

            </div>

        </div>

        <div className="row mb-5">

            <div className='col-12 border border-3 rounded-4 border-info border-start '>
                <div className={classes.ficha}>

                    <h3>Gestión de productos</h3>
                    <Link to={`/productos`}>
                        <button className='btn btn-info'>Acceder</button>
                    </Link>


                </div>

            </div>

        </div>

        <div className="row mb-5">

            <div className='col-12 border border-3 rounded-4 border-info border-start '>
                <div className={classes.ficha}>

                    <h3>Gestión de pedidos</h3>
                    <Link to={``}>
                        <button className='btn btn-info'>Acceder</button>
                    </Link>


                </div>

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
}

export default Dashboard;