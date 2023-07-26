import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getById } from "../../services/productos.service";

const DetalleProducto = () => {

    const [producto, setProducto] = useState(null);

    const { productoId } = useParams();

    useEffect(() => {
        getById(productoId)
            .then(response => {
                // esto es por si la respuesta lleva algun error por ejemplo si se mete un id que no existe
                if (response.data.error) {
                    return setProducto(null);
                }
                setProducto(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return <div className="container mt-5">
        {producto ?
            <div className="row">
                <div className="col-md-6 col-12 offset-md-2 text-center card">
                    <h2>{producto.nombre}</h2>
                    <p>Descripción: {producto.descripcion}</p>
                    <p>Categoría: {producto.categoria}</p>
                    <p>Precio: {producto.precio} euros</p>
                    <p>Stock: {producto.stock} unidades</p>
                    <Link to='/productos'>
                        <button className="btn btn-info mb-5">Volver</button>
                    </Link>
                </div>


            </div>

            : <h2>El producto no existe</h2>
        }

    </div>;
}

export default DetalleProducto;