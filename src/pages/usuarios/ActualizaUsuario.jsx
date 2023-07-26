import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { getUsuarioById, update } from "../../services/usuarios.service";
import Swal from "sweetalert2";


const ActualizaUsuario = ({user}) => {

    
    const {register,handleSubmit,reset} = useForm();
    const [usuario,setUsuario] = useState(user);
    

    useEffect(()=>{
        // getUsuarioById(userId)
        // .then(({data}) => {
        //     console.log(data);
        //     reset(data);
        // })
        // .catch(error => console.log(error));

        reset(usuario);
        
    },[]);

    const envioFormulario = async (values) => {
        const {data} = await update(usuario._id,values);
        console.log(data);

        // gestion de error del servidor

        if (data.error) {
            // si no pongo el return salta el swal y tambien lo que venga en gestion de edicion correcta
            return await Swal.fire({title:'ERROR!!',text: ' Se ha producido un error de la edicion.Revisa los datos',icon: 'error',confirmButtonText: 'Aceptar'});
        }

        //gestión de la edicion correcta

        await Swal.fire({title:'Edición correcta', text: 'Has editado correctamente tus datos', icon:'success',confirmButtonText:'Aceptar'});
        
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