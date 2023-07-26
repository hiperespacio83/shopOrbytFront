import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Contacto = () => {

    const { handleSubmit, register, reset } = useForm();


    const envioFormulario = (data) => {
        reset();


        return Swal.fire({ title: 'Envio de formulario', text: 'Se ha enviado el formulario correctamente', icon: 'success', confirmButtonText: 'Aceptar' })

    }

    return <div className="container mt-5">


        <div className="row">

            <div className="col-md-12 col-12 offset-md-3 ">
                

                <div className='col-md-6 col-12'>
                <h1 className="mt-4 mb-4">Contacto ShopOrbit</h1>
                    <p>
                        <strong>Teléfono:</strong> 123-456-7890 <br />
                        <strong>Email:</strong> contacto@shoporbit.com <br />
                        <strong>Dirección:</strong> 123 Calle Ficticia, Ciudad, Provincia, País
                    </p>
                </div>





                <div className="col-md-6">
                    <h3>Contactar con nosotros</h3>
                    <form onSubmit={handleSubmit(envioFormulario)}>
                        <div className="form-group">
                            <label className='form-label'>Nombre</label>
                            <input type="text" className="form-control border border-info" id="name" required {...register('nombre')} />
                        </div>
                        <div className="form-group">
                            <label className='form-label'>Email</label>
                            <input type="email" className="form-control border border-info" id="email" required  {...register('email')} />
                        </div>
                        <div className="form-group mb-4">
                            <label className='form-label'>Mensaje</label>
                            <textarea className="form-control border border-info" id="message" rows="3" required {...register('mensaje')}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

}

export default Contacto;
