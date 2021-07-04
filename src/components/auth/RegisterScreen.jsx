import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });

    const { name ,email ,password ,password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if ( isFormValid() ) {
            dispatch( startRegisterWithEmailPasswordName(email, password, name) );
        }

    }

    const isFormValid = () => {
        
        if ( name.trim().length === 0 ) {
            dispatch( setError('El nombre es obligatorio') )
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError('El email es inválido') )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError('La contraseña debe tener por lomenos 6 caracteres o las contraseñas deben ser iguales') )
            return false
        }
        
        dispatch( removeError() );
       return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>

                {
                    msgError &&
                    (
                        <div className="auth__alert-error">
                            { msgError }
                        </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />

                <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInputChange }
                />

                <input 
                    type="password"
                    placeholder="Confirmar contraseña"
                    name="password2"
                    className="auth__input"
                    value={ password2 }
                    onChange={ handleInputChange }
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block "
                >
                    Registrarse
                </button>

               

                <Link 
                    to="/auth/login"
                    className="link"
                    style={{float: 'right', alignItems: 'center'}}
                >
                    ¿Ya estas registrado?
                </Link>

            </form>
        </>
    )
}
