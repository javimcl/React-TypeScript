import React, { ChangeEvent, useState } from 'react'
import { useForm } from '../hooks/useForm';


interface FormData {
    email: string;
    nombre: string,
    edad: number
}

export const Formulario = () => {

    const { nombre, email, edad , handleChange, formulario } = useForm<FormData>({
        email: 'javi@gmail.com',
        nombre: 'Javier Lucero',
        edad: 35
    });

   // const {email, nombre, edad} = formulario;


    return (
        <form autoCorrect="off">
            <div className='mb-3'>
                <label className='form-label'>Email:</label>
                <input type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />

            </div>

            <div className='mb-3'>
                <label className='form-label'>Nombre:</label>
                <input type="text"
                    className="form-control"
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                />

            </div>

            <div className='mb-3'>
                <label className='form-label'>Edad:</label>
                <input type="number"
                    className="form-control"
                    name="edad"
                    value={edad}
                    onChange={handleChange}
                />

            </div>


            <pre>{JSON.stringify(formulario)}</pre>

        </form>
    )
}
