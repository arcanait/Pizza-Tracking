import React from 'react'
import PropTypes from 'prop-types';
/**
 * 
 * @param {string, number} value Valor con el cual se va vincular el input, en este caso un state
 * @param {string} id id del input  
 * @param {string} placeHolder texto que se desea en el campo | guía para el usuario
 * @param {string} className clases que se desean en el input 
 * @param {string} label label que se desea tener encima del campo
 * @param {function} callback controlador del evento cuando cambie los valores del campo
 * @returns Input tipo checkbox con características similares reutilizable
 */
export const InputForm = ({
    value, 
    id, 
    placeHolder,
    className,
    label,
    callback
}) => {
    return (
        <React.Fragment key={id}>
           <label htmlFor={id}>{label}</label>
            <input 
                type="text" 
                id={id}
                placeholder={placeHolder}
                className={className}
                name={id}
                autoComplete="off"
                value={value}
                onChange={ callback }
            /> 
        </React.Fragment >
    )
}

InputForm.propTypes = {
    id: PropTypes.string,
    placeHolde: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    callback: PropTypes.func,
}
