import { useEffect, useState } from "react";
import { deleteById, getAll } from "../../services/productos.service";
import classes from './products.module.css';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Productos = () => {

    const [arrProductos,setArrProductos] = useState([]);

    useEffect(() => {
        getAll()
        .then(response => setArrProductos(response.data))
        .catch(error => console.log(error))
    },[]);

    const borrarProducto = async (productoId) => {
        const alert = await Swal.fire({
            title:'¿Estás seguro',
            text:'Vas a borrar un producto',
            icon:'warning',
            showCancelButton:true,
            confirmButtonText:'Borrar',
            confirmButtonColor:'#FF0000'
        });
        if (alert.isConfirmed) {
            const {data:dataBorrado} = await deleteById(productoId);
            console.log(dataBorrado);
            // cargo de nuevo los productos
            const {data} = await getAll();
            setArrProductos(data);
        }
    }

    return <div>
        <h2>Lista de productos</h2>
        <div className={classes.productos}>
            {arrProductos.map(producto => (
                <div className={classes.producto} key={producto._id}>
                    <h4>{producto.nombre}</h4>
                    <p>{producto.descripcion}</p>
                    <p>Precio: {producto.precio}</p>
                    <p>Categoria: {producto.categoria}</p>
                    <p>Stock: {producto.stock}</p>
                    <p>Disponible: {producto.disponible}</p>
                    <Link to={`/productos/${producto._id}`}>
                        <button className="btn btn-info">Ver detalle</button>
                    </Link>
                    <Link to={`/productos/edit/${producto._id}`}>
                        <button className="btn btn-success ms-3">Editar</button>
                    </Link>
                    <button onClick={()=>borrarProducto(producto._id)} className="btn btn-danger">Borrar</button>
                    
                </div>
            ))}
        </div>
    </div>;

}

export default Productos;