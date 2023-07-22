import { useEffect, useState } from "react";
import { getUsuarios } from "../../services/usuarios.service";
import { useQuery } from "react-query";

const Usuarios = () => {

    const { data, status } = useQuery('usuarios', getUsuarios);
    console.log(data);


    if (status === 'loading') return <h2>Recuperando clientes...</h2>;
    if (status === 'error') return <h2>Error en la descarga.</h2>;

    return <div className="row">
        <div className="col-md-6 col-12 offset-md-3">

            <ul>
                {data.map(usuario => (
                    <li>{usuario.username} {usuario.email}</li>

                ))}
            </ul>
        </div>


    </div>


}

export default Usuarios;