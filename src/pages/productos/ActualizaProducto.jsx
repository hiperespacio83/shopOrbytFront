import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getById, update } from "../../services/productos.service";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ActualizaProducto = () => {

    const navigate = useNavigate();
    const {productoId} = useParams();
    const { register, handleSubmit, reset } = useForm(); // setvalue nos permite colocar valores a los campos del formulario

    useEffect(()=>{
        getById(productoId)
        .then(({data}) => {  // del objeto response hago un destructuring para quedarme con data que es lo que me interesa
            console.log(data);
            reset(data);

        })
        .catch(error => console.log(error));
    },[]);

    const envioFormulario = async (values) => {
        const {data} = await update(productoId, values);

        // gestion de error del servidor

        if (data.error) {
            // si no pongo el return salta el swal y tambien lo que venga en gestion de edicion correcta
            return await Swal.fire({title:'ERROR!!',text: ' Se ha producido un error de la edicion.Revisa los datos',icon: 'error',confirmButtonText: 'Aceptar'});
        }

        //gestión de la edicion correcta

        await Swal.fire({title:'Edición correcta', text: 'Se ha editado correctamente el producto', icon:'success',confirmButtonText:'Aceptar'});
        navigate(`/productos`);
    }

    return <div className="row">
    <div className="col-md-6 col-12 offset-md-3">
        <form onSubmit={handleSubmit(envioFormulario)}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input className="form-control" type="text" {...register('nombre')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input className="form-control" type="text" {...register('descripcion')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Precio</label>
                <input className="form-control" type="number" {...register('precio')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Categoria</label>
                <select className="form-select" {...register('categoria')}>
                    <option value="Antigripales">Antigripales</option>
                    <option value="Antihistamínicos">Antihistamínicos</option>
                    <option value="Antiinflamatorios">Antiinflamatorios</option>
                    <option value="Antitérmicos">Antitérmicos</option>
                </select>
            </div>
            <div className="mb-3">
                <label className="form-label">Stock</label>
                <input className="form-control" type="number" {...register('stock')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Disponible</label>
                <input className="form-control" type="boolean" {...register('disponible')} />
            </div>
            <input type="submit" value="Enviar" />
           
        </form>
    </div>
</div>
}

export default ActualizaProducto;