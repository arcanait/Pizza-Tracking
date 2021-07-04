import React from 'react'
import PropTypes from 'prop-types';
import { formatNumber } from '../../../scripts/formatNumber';

/**
 * 
 * @param {string} name nombre del input   
 * @param {string, number} value Valor con el cual se va vincular el input, en este caso un state
 * @param {function} callback controlador del evento cuando cambie los valores del campo
 * @returns Input tipo checkbox con características similares reutilizable
 */
export const IngredientsItems = ({
    name,
    value,
    callback
}) => {
    return (
        <div
            className="ingredient-list-item"
        >
            <input 
                type="checkbox" 
                id={`check_${name}`} 
                value={value}
                onChange={ callback }
                className="ingredient-list-checkbox"
            >
            </input>
            <label htmlFor={`check_${name}`}>
                {name} - ${formatNumber.format(value)}
            </label>
        </div>
    )
}

IngredientsItems.propTypes = {
    name: PropTypes.string,
    callback: PropTypes.func
}
