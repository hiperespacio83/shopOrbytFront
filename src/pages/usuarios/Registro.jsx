import { useForm } from "react-hook-form";
import { registro } from "../../services/usuarios.service";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import classes from './usuarios.module.css'
import { useLocalStorage } from "react-use";
import { useEffect } from "react";


const Registro = () => {

    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [role ,setRole]= useLocalStorage('role');

    useEffect(()=>{

        setRole(localStorage.getItem('role'));

    },[]);
    

    function handleBack() {
       
        navigate(-1);
      
      }

    const envioRegistro = async (values) => {
       const {data} = await registro(values);

       console.log(data);

       if (data) {
        await Swal.fire({title:'Registro completo',text:data.success,icon:'success'});
        navigate('/usuarios');
       }
    }

    return (
        <div className={classes.top}>
               <div className="row">
            <div className="col-md-4 col-12 offset-md-4">
                <h2>Registro</h2>
                <div className="d-flex flex-column">
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
                <button className="btn btn-info mt-5" onClick={handleBack}>Volver</button>
                </div>
                
            </div>

        </div>
        
       
        </div>
     
    );

}

export default Registro;