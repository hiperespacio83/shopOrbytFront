import { useEffect, useState } from "react";
import { deleteUser, getUsuarios } from "../../services/usuarios.service";
import { useQuery } from "react-query";
import classes from './usuarios.module.css'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Usuarios = () => {

    const { data, status } = useQuery('usuarios', getUsuarios);
    const [arrUsuarios,setArrUsuarios] = useState([]);

    useEffect(()=>{
        setArrUsuarios(data);
    },[]);



    if (status === 'loading') return <h2>Recuperando clientes...</h2>;
    if (status === 'error') return <h2>Error en la descarga.</h2>;

   


    const borrarUsuario = async(usuarioId) => {
        const alert = await Swal.fire({
            title: '¿Estás seguro?',
            text: 'Vas a borrar un usuario',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar',
            confirmButtonColor: '#FF0000'
        });
        if (alert.isConfirmed) {
            const { data: dataBorrado } = await deleteUser(usuarioId);
            console.log(dataBorrado);
            // cargo de nuevo los usuarios
            const {data} = await getUsuarios();
            setArrUsuarios(data);
        }
    }



    return <div className="container mt-5">

        <div className={classes.productos}>
            {data.map(usuario => (
                <div className={classes.producto} key={usuario._id}>
                    <h4>{usuario.username}</h4>
                    <h5>{usuario.email}</h5>
                    <div>
                        <button onClick={() => borrarUsuario(usuario._id)} className="btn btn-danger ms-3">Borrar</button>
                    </div>
                    

                    {/* <p>{producto.descripcion}</p>
                    <p>Precio: {producto.precio}</p>
                    <p>Categoria: {producto.categoria}</p>
                    <p>Stock: {producto.stock}</p>
                    <p>Disponible: {producto.disponible}</p> */}

                    {/* <div>
                                <Link to={`/productos/${producto._id}`}>
                                    <button className="btn btn-info">Ver detalle</button>
                                </Link>

                                <Link to={`/productos/edit/${producto._id}`}>
                                    <button className="btn btn-success ms-3">Editar</button>
                                </Link>
                                <button onClick={() => borrarProducto(producto._id)} className="btn btn-danger ms-3">Borrar</button>

                            </div> */}

                </div>
            ))}
        </div>

        <div>
            <Link to='/dashboard'>
                <button className="btn btn-info">Volver</button>
            </Link>
            <Link to='/registro'>
                <button className="btn btn-dark ms-3">Nuevo Usuario</button>
            </Link>
        </div>
    </div>

}

export default Usuarios;