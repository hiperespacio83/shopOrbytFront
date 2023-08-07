import { Link } from "react-router-dom";

const Bandeja = () => {

    return (

        <table className="table mt-5 ">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Correo Electronico</th>
          <th>Mensaje</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Marta</td>
          <td>marta@gmail.com</td>
          <td>Hola tengo una consulta</td>
        </tr>
       
      </tbody>
      <Link to={'/dashboard'} >
      <button className="btn btn-info m-5">Volver</button>
      </Link>
    </table>

    

    );

}

export default Bandeja;