import React, { ChangeEvent, useState } from 'react'
import { useForm } from '../hooks/useForm'

export const Formulario2 = () => {

    const { formulario, handleChange } = useForm({
        postal: 'abc',
        ciudad: 'ottawa'
    });

    const { postal, ciudad } = formulario

    return (
        <form autoCorrect="off">
            <div className='mb-3'>
                <label className='form-label'>Codigo postal:</label>
                <input type="text"
                    className="form-control"
                    name="postal"
                    value={postal}
                    onChange={handleChange}
                />

            </div>

            <div className='mb-3'>
                <label className='form-label'>Ciudad:</label>
                <input type="text"
                    className="form-control"
                    name="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />

            </div>


            <pre>{JSON.stringify(formulario)}</pre>

        </form>
    )
}
