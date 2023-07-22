import { useForm } from "react-hook-form";
import { login } from "../../services/usuarios.service";
import { useState } from "react";
import { useLocalStorage } from "react-use";

const Login = () => {

    const [error, setError] = useState(null);
    const [token,setToken]= useLocalStorage('token');
    const {register, handleSubmit} = useForm();

    const envioLogin = async (values) => {
        const {data}= await login(values);
        console.log(data);

        if(data.fatal) {
            return setError(data.fatal);
        }

        // si el login es correcto recibo el token
        console.log(data.token);
        setToken(data.token);
    }

    return (
        <div className="row">
            <div className="col-md-4 col-12 offset-md-4">
                <form onSubmit={handleSubmit(envioLogin)}>
                    <label className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" {...register('email')}/>
                    <label className="form-label">
                        Password
                    </label>
                    <input type="password" className="form-control" {...register('password')}/>
                    <input type="submit" className="btn btn-info"  />
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>

    )
}

export default Login;