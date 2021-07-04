import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch,  Redirect } from 'react-router-dom';

/** Firebase */
import { firebase } from '../firebase/firebase-config'

/** Componentes */
import { CreatePizza } from '../components/createPizza/CreatePizza';
import { DashBoard } from '../components/dashboard/DashBoard';
import { Navbar } from '../components/ui/Navbar';

/** Routes */
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthRouter } from './AuthRouter';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';


export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {
            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);
        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <>
            <Router>

                <div>
                    <Navbar />

                    <Switch>

                        <PublicRoute 
                            path="/auth"
                            component={ AuthRouter }
                            isAuthenticated={ isLoggedIn }
                        />

                        <PrivateRoute 
                            exact
                            isAuthenticated={ isLoggedIn }
                            path="/"
                            component={ CreatePizza }
                        />

                        <PrivateRoute 
                            exact
                            isAuthenticated={ isLoggedIn }
                            path="/dashboard"
                            component={ DashBoard }
                        />  

                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </Router>

        </>
    )
}
