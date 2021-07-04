import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Button } from 'reactstrap';
/** Componentes */
import {ingredients} from '../../data/ingredients';
import { formatNumber } from '../../scripts/formatNumber';
import { showSwalFire } from '../../scripts/showSwalFire';
import { CustomModal } from './sub-components/CustomModal';
/** Otros */
import { IngredientsItems } from './sub-components/IngredientsItems';

export const CreatePizza = () => {

    const [pizzaName, setPizzaName] = useState('');
    const [pizzaPrice, setPizzaPrice] = useState(10000);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [ingredientList, setIngredientList] = useState(0);
    const [feedbackName, setFeedbackName] = useState(false);

    let history = useHistory();
    
    const modalToggle = (e) => {
        e.preventDefault();
        if (pizzaName.trim() === '') {
            setFeedbackName(true);
            return;
        }
        setModalIsOpen(!modalIsOpen)
    };

    /** Método para sumar tanto la cantidad como el precio de los ingredientes de la pizza */
    const handleInputCheckboxChange = (e) => {
        if (e.target.checked) {
            setPizzaPrice(prevPizzaPrice => prevPizzaPrice + parseInt(e.target.value))
            setIngredientList((prevIngredientList) => prevIngredientList + 1)
        } else {
            setPizzaPrice(prevPizzaPrice => prevPizzaPrice - parseInt(e.target.value))
            setIngredientList((prevIngredientList) => prevIngredientList - 1)
        }
    }
    
    const handleInputNameChange = (e) => {
        setPizzaName(e.target.value)
        setFeedbackName(false)
    }

    /** Método para controlar el envío de datos al local storage */
    const handleSubmit = async(nameBuyer, phoneBuyer) => {
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
            showSwalFire({
                closeModal: setModalIsOpen(false),
                callback: history.push('/dashboard')
            })
        } else {
            await localStorage.setItem('pizzaList', JSON.stringify([newPizza]));
            showSwalFire({
                closeModal: setModalIsOpen(false),
                callback: history.push('/dashboard')
            });
        }
    }

    return (
        <div className='create-pizza-container'>
            <div className='create-pizza-title'>
                <h2>¡Elige un nombre y elige los ingredientes que desees!</h2>
                <span> 
                    <strong>número de ingredientes seleccionados: {ingredientList}</strong>
                </span>                
                
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
                                className="form-control input-name "
                                name="nameText"
                                autoComplete="off"
                                value={pizzaName}
                                onChange={ handleInputNameChange }
                            />
                            {
                                feedbackName && 
                                <>
                                    <span style={{color: 'red'}}>El nombre de la pizza es requerido</span>
                                </>
                            }
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
                                            <IngredientsItems
                                                key={`list_${ingredient.name}`}
                                                name={ingredient.name}
                                                value={ingredient.price}
                                                callback={handleInputCheckboxChange}
                                            />
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="form-submit">
                        <Button 
                            className='button-submit' 
                            onClick={(e) => {modalToggle(e)}}
                            disabled={ingredientList < 1}
                        >
                            Siguiente
                        </Button>
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
