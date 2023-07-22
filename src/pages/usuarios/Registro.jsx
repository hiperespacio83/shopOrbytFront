import { useForm } from "react-hook-form";
import { registro } from "../../services/usuarios.service";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

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
        <div className="row">
            <div className="col-md-6 col-12 offset-md-3">
                <form onSubmit={handleSubmit(envioRegistro)}>
                    <div className="mb-3">
                        <label className="form-label">
                                Username
                        </label>
                        <input type="text" className="form-control" {...register('username')} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                                Email
                        </label>
                        <input type="email" className="form-control" {...register('email')} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">
                                Password
                        </label>
                        <input type="password" className="form-control" {...register('password')} />
                    </div>
                    <input type="submit" value="Enviar" className="btn btn-info" />
                </form>
            </div>

        </div>
    );

}

export default Registro;