import { useEffect, useState } from 'react';
import classes from './products.module.css'
import { deleteById, getAll } from '../../services/productos.service';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { compra } from '../../services/usuarios.service';
import axios from 'axios';


const ProductosCompra = () => {

    const [arrProductos, setArrProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [token, setToken] = useState(localStorage.getItem('token'));

    useEffect(() => {
        getAll()
            .then(response => setArrProductos(response.data))
            .catch(error => console.log(error))

        console.log(token);

    }, []);

    const comprarProducto = async (productoId) => {
        const alert = await Swal.fire({
            title: 'Estas seguro',
            text: 'Vas a añadir un producto',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Añadir',
            confirmButtonColor: '#008F39'
        });
        if (alert.isConfirmed) {
            
            const { data: user } = await compra(productoId,token);
            console.log(user);
           
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
                            <input type="number" />
                            <Link to={`/productos/${producto._id}`}>
                                <button className="btn btn-info ms-2 me-2">Ver detalle</button>
                            </Link>
                            
                                <button className="btn btn-success" onClick={()=>comprarProducto(producto._id)}>Añadir a la cesta</button>
                          
                        </div>
                    
                </div>
            ))}
        </div>

        <div>
            <Link to='/'>
                <button className="btn btn-info">Volver</button>
            </Link>
           

        </div>
    </div>
</div>


}

export default ProductosCompra;