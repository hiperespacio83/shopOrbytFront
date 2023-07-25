import { useForm } from "react-hook-form";
import { registro } from "../../services/usuarios.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import classes from './usuarios.module.css'

const Registro = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const envioRegistro = async (values) => {
       const {data} = await registro(values);

       console.log(data);

       if (data) {
        await Swal.fire({title:'Registro completo',text:data.success,icon:'success'});
        navigate('/login');
       }
    }

    return (
        <div className={classes.top}>
               <div className="row">
            <div className="col-md-4 col-12 offset-md-4">
                <h2>Registro</h2>
                <form onSubmit={handleSubmit(envioRegistro)}>
                    <div className="mb-3">
                        <label className="form-label">
                                Username
                        </label>
                        <input type="text" className="form-control border border-info" {...register('username')} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                                Email
                        </label>
                        <input type="email" className="form-control border border-info" {...register('email')} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                                Password
                        </label>
                        <input type="password" className="form-control border border-info" {...register('password')} />
                    </div>
                    <input type="submit" value="Enviar" className="btn btn-info" />
                </form>
            </div>

        </div>
        </div>
     
    );

}

export default Registro;