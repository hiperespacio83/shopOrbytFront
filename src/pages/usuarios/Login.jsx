import { useForm } from "react-hook-form";
import { login } from "../../services/usuarios.service";
import { useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import classes from './usuarios.module.css'
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import MenuCliente from "../zonacliente/MenuCliente";

const Login = () => {

    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [token, setToken] = useLocalStorage('token');
    const [role, setRole] = useLocalStorage('role');
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    useEffect(()=>{



    },[]);

    const envioLogin = async (values) => {
        const { data } = await login(values);
        console.log(data);

        if (data.fatal) {
            return setError(data.fatal);
        }

        // si el login es correcto recibo el token
        console.log(data.token);
        setToken(data.token);
        console.log(data.user);
        setUser(data.user);
        setRole(data.user.role);


         await Swal.fire({ title: 'Logín realizado con éxito', text: data.success, icon: 'success' });
       

    }

    return (
     user === null ? 
    <div className={classes.top}>
        <div className="row">
            <div className="col-md-4 col-12 offset-md-4">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(envioLogin)}>
                    <label className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control border border-info" {...register('email')} />
                    <label className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control border border-info" {...register('password')} />
                    <input type="submit" className="btn btn-info mt-4" />
                </form>
                {error && <p>{error}</p>}
            </div>
            <div className="col-md-4 col-12 offset-md-4 mt-4">
                Si aún no eres cliente, <Link to={'/registro'}><strong>regístrate</strong></Link>
            </div>
        </div>
    </div> :<MenuCliente user={user} /> 
    )
}





export default Login;