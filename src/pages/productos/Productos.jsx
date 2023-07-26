import { useEffect, useState } from "react";
import { deleteById, getAll } from "../../services/productos.service";
import classes from './products.module.css';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Productos = () => {

    const [arrProductos, setArrProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [role, setRole] = useState(localStorage.getItem('role'));

    useEffect(() => {
        getAll()
            .then(response => setArrProductos(response.data))
            .catch(error => console.log(error))





        console.log(role);


    }, []);

    const borrarProducto = async (productoId) => {
        const alert = await Swal.fire({
            title: '¿Estás seguro',
            text: 'Vas a borrar un producto',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Borrar',
            confirmButtonColor: '#FF0000'
        });
        if (alert.isConfirmed) {
            const { data: dataBorrado } = await deleteById(productoId);
            console.log(dataBorrado);
            // cargo de nuevo los productos
            const { data } = await getAll();
            setArrProductos(data);
        }
    }

    const handleChange = (event) => {

        setSearchTerm(event.target.value);
    }

    const searchByCategory = (event) => {
        setSearchCategory(event.target.value);
    }

    let listaFiltrada = !searchTerm
        ? arrProductos
        : arrProductos.filter(producto =>
            producto.nombre.toLowerCase().includes(searchTerm.toLocaleLowerCase())
        );

    if (searchCategory) {
        listaFiltrada = arrProductos.filter(producto => producto.categoria.toLowerCase().includes(searchCategory.toLocaleLowerCase()));
    }




    return <div className="container">
        <div className={classes.seccionProductos}>
            <h2>Lista de productos</h2>
            <div className={classes.busqueda}>
                <input type="text" placeholder="Busqueda por nombre" className="form-control" onChange={handleChange} />
                <select name="" id="" className="form-select" onChange={searchByCategory}>
                    <option value="">Todas las categorías</option>
                    <option value="Antihistamínicos">Antihistamínicos</option>
                    <option value="Antitérmicos">Antitérmicos</option>
                    <option value="Antiinflamatorios">Antiinflamatorios</option>
                    <option value="Antigripales">Antigripales</option>
                    <option value="Antitusivos">Antitusivos</option>
                </select>
            </div>


            <div className={classes.productos}>
                {listaFiltrada.map(producto => (
                    <div className={classes.producto} key={producto._id}>
                        <h4>{producto.nombre}</h4>
                        {/* <p>{producto.descripcion}</p>
                    <p>Precio: {producto.precio}</p>
                    <p>Categoria: {producto.categoria}</p>
                    <p>Stock: {producto.stock}</p>
                    <p>Disponible: {producto.disponible}</p> */}
                    
                            <div>
                                <Link to={`/productos/${producto._id}`}>
                                    <button className="btn btn-info">Ver detalle</button>
                                </Link>

                                <Link to={`/productos/edit/${producto._id}`}>
                                    <button className="btn btn-success ms-3">Editar</button>
                                </Link>
                                <button onClick={() => borrarProducto(producto._id)} className="btn btn-danger ms-3">Borrar</button>

                            </div>
                        
                    </div>
                ))}
            </div>

            <div>
                <Link to='/dashboard'>
                    <button className="btn btn-info">Volver</button>
                </Link>
                <Link to='/productos/nuevo'>
                    <button className="btn btn-dark ms-3">Nuevo Producto</button>
                </Link>

            </div>
        </div>
    </div>


}

export default Productos;