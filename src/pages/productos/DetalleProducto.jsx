import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getById } from "../../services/productos.service";

const DetalleProducto = () => {

    const [producto, setProducto] = useState(null);
    const navigate = useNavigate();

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

    const handleBack = ()=> {
        navigate(-1);
    }

    return <div className="container mt-5">
        {producto ?
            <div className="row">
                <div className="col-md-6 col-12 offset-md-2 text-center card">
                    <h2>{producto.nombre}</h2>
                    <p>Descripción: {producto.descripcion}</p>
                    <p>Categoría: {producto.categoria}</p>
                    <p>Precio: {producto.precio} euros</p>
                    <p>Stock: {producto.stock} unidades</p>
                    
                        <button className="btn btn-info mb-5" onClick={handleBack}>Volver</button>
                    
                </div>


            </div>

            : <h2>El producto no existe</h2>
        }

    </div>;
}

export default DetalleProducto;