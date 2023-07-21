import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../../services/productos.service";

const DetalleProducto = () => {

    const [producto,setProducto] = useState(null);

    const {productoId} = useParams();

    useEffect(()=> {
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

    return <div>
        {producto ? 
        <>
            <h2>{producto.nombre}</h2>
            <p>Descripción: {producto.descripcion}</p>
            <p>Categoría: {producto.categoria}</p>
            <p>Precio: {producto.precio} euros</p>
            <p>Stock: {producto.stock} unidades</p>
        </> 
        :
        <h2>El producto no existe</h2>
        }
        
    </div>;
}

export default DetalleProducto;