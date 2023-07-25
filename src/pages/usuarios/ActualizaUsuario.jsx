import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { getUsuarioById, update } from "../../services/usuarios.service";
import Swal from "sweetalert2";

const ActualizaUsuario = () => {

    const {userId} = useParams();
    const {register,handleSubmit,reset} = useForm();

    useEffect(()=>{
        getUsuarioById(userId)
        .then(({data}) => {
            console.log(data);
            reset(data);
        })
        .catch(error => console.log(error));
    },[]);

    const envioFormulario = async (values) => {
        const {data} = await update(userId,values);

        // gestion de error del servidor

        if (data.error) {
            // si no pongo el return salta el swal y tambien lo que venga en gestion de edicion correcta
            return await Swal.fire({title:'ERROR!!',text: ' Se ha producido un error de la edicion.Revisa los datos',icon: 'error',confirmButtonText: 'Aceptar'});
        }

        //gestión de la edicion correcta

        await Swal.fire({title:'Edición correcta', text: 'Se ha editado correctamente el producto', icon:'success',confirmButtonText:'Aceptar'});
        
    }

    return <div className="row">
    <div className="col-md-6 col-12 offset-md-3">
        <form onSubmit={handleSubmit(envioFormulario)}>
            <div className="mb-3">
                <label className="form-label">Nombre de usuario</label>
                <input className="form-control" type="text" {...register('username')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input className="form-control" type="email" {...register('email')} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input className="form-control" type="password" {...register('password')} />
            </div>
            <input type="submit" value="Enviar" />
           
        </form>
    </div>
</div> 

}

export default ActualizaUsuario;