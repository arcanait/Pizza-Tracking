import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
/** Componentes */
import {ingredients} from '../../data/ingredients';
import { formatNumber } from '../../scripts/formatNumber';
import { CustomModal } from './sub-components/CustomModal';
/** Otros */
import Swal from 'sweetalert2'

export const CreatePizza = () => {

    const [pizzaName, setPizzaName] = useState('');
    const [pizzaPrice, setPizzaPrice] = useState(10000);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    let history = useHistory();

    const modalToggle = (e) => {
        e.preventDefault();
        setModalIsOpen(!modalIsOpen)
    };

    const handleInputCheckboxChange = (e) => {
        if (e.target.checked) {
            setPizzaPrice(prevPizzaPrice => prevPizzaPrice + parseInt(e.target.value))

        } else {
            setPizzaPrice(prevPizzaPrice => prevPizzaPrice - parseInt(e.target.value))
        }
    }
    
    const handleInputNameChange = (e) => {
        setPizzaName(e.target.value)
    }

    const handleSubmit = async({nameBuyer, phoneBuyer}) => {
        const newPizza = {
            pizzaName,
            pizzaPrice,
            phoneBuyer,
            nameBuyer,
            date: new Date()
        }
        if (localStorage.getItem('pizzaList')) {
            let pizzaList = JSON.parse(localStorage.getItem('pizzaList'));
            pizzaList.push(newPizza);
            await localStorage.setItem('pizzaList', JSON.stringify(pizzaList));
            showSwalFire()
        } else {
            await localStorage.setItem('pizzaList', JSON.stringify([newPizza]));
            showSwalFire();
        }
    }

    const showSwalFire = () => {
        return(
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Proceso exitoso',
                showConfirmButton: true,
            }).then(() => {
                history.push('/dashboard')
            })
        )
    }

    return (
        <div className='create-pizza-container'>
            <div className='create-pizza-title'>
                <h2>¡Elige un nombre y elige los ingredientes que desees!</h2>
            </div>
            <div className='create-pizza-box'>
                <div className='create-pizza-price'>
                    <strong>Precio : {formatNumber.format(pizzaPrice)}</strong>
                </div>
                <form>
                    <div className="form-container">
                        <div className="input-img-container">
                            <input 
                                type="text" 
                                placeholder="Ponle un nombre a tu pizza!"
                                className="form-control input-name"
                                name="nameText"
                                autoComplete="off"
                                value={pizzaName}
                                onChange={ handleInputNameChange }
                            />
                            <img 
                                src={'./assets/pizza-img.png'} 
                                alt="Niño pizzero" 
                                className='pizza-img'
                            />
                        </div>
                        <div className='ingredient-list-container'>
                            <ul className="ingredient-list">
                                {
                                    ingredients.map( ingredient => {
                                        return (
                                            <div
                                            key={`list_${ingredient.name}`} 
                                            className="ingredient-list-item">
                                                <input 
                                                    type="checkbox" 
                                                    id={`check_${ingredient.name}`} 
                                                    value={ingredient.price}
                                                    onChange={ handleInputCheckboxChange }
                                                    className="ingredient-list-checkbox">
                                                </input>
                                                <label htmlFor={`check_${ingredient.name}`}>{ingredient.name}</label>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="form-submit">
                        <button className='button-submit' onClick={(e) => {modalToggle(e)}}>
                            Siguiente
                        </button>
                    </div>            
                    <CustomModal
                        modalIsOpen={modalIsOpen}
                        toggle={modalToggle}
                        submit={handleSubmit}
                    />
                </form>
            </div>
        </div>
    )
}
