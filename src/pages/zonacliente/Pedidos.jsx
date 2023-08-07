import { Link, useNavigate } from "react-router-dom";
import classes from './../usuarios/usuarios.module.css'

const Pedidos = () => {

const navigate = useNavigate();

const handleBack = ()=>{
    navigate(-1);
}



return <div className="container mt-5">

<div className="row mb-1 pt-5">

    <div className='col-12 border border-3 rounded-4 border-info border-start'>
        <div className={classes.ficha}>

            <h3>Gelocatil gripe 10 comprimidos</h3>
            
            <div>
                <h5>Unidades : 2</h5>
            <h5>Precio: 18 euros</h5>
                  <button className='btn btn-success me-2'>Validar</button>
                <button className="btn btn-danger">Rechazar</button>
            </div>

        </div>

    </div>

</div>
<div className="row mb-5 pt-5">

    <div className='col-12 border border-3 rounded-4 border-info border-start'>
        <div className={classes.ficha}>

            <h3>Dormidina</h3>
            
            <div>

                <h5>Unidades : 1</h5>
            <h5>Precio: 9 euros</h5>
                  <button className='btn btn-success me-2'>Validar</button>
                <button className="btn btn-danger">Rechazar</button>
            </div>

        </div>

    </div>

</div>

<div className='row'>

    <div className='col-12 d-flex justify-content-center'>

<Link to={`/dashboard`}>

 <button className='btn btn-info' >
            Volver
        </button>
</Link>
       

    </div>

</div>


</div>



}

export default Pedidos;