import { useForm } from "react-hook-form";
import { create } from "../../services/productos.service";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FormProductos = () => {

    const [errors, setErrors] = useState([]);

    // llamo al hook useform
    //handlesubmit para gestionar el objeto con el que recuperamos los valores
    // register para marcar los campos con los que estamos trabajando

    const { handleSubmit, register } = useForm();

    // hook para hacer navegacion interna entre nuestros componentes

    const navigate = useNavigate();

    // envio del formulario al back

    const envioFormulario = async (values) => {
        const { data } = await create(values);
        console.log(data);
        if (data.error) {
            // gestión de los errores del back
            return setErrors(data.error);
        }

        //gestión de la inserción correcta del producto
        await Swal.fire({title:'Producto creado', text: 'Se ha creado el producto en la base de datos', icon:'success',confirmButtonText:'Aceptar'});

        navigate('/productos');
    }


    return (
        <div className="row">
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
                            <option value="Antitusivos">Antitusivos</option>
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
                    <div>
                        {errors.map(error => (
                            <p>{error.msg}</p>
                        ))}
                    </div>

                </form>
            </div>
        </div>

    );
}

export default FormProductos;