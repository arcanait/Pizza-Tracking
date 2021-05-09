import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

/** Componentes */
import { CreatePizza } from '../components/create/CreatePizza';
import { DashBoard } from '../components/dashboard/DashBoard';
import { PizzaDetail } from '../components/dashboard/detail/PizzaDetail';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <>
            <Router>

                <div>
                    <Navbar />

                    <Switch>
                        <Route exact path="/create" component={ CreatePizza } />
                        <Route exact path="/pizzaDetail/:pizzaId" component={ PizzaDetail } />
                        <Route exact path="/dashboard" component={ DashBoard } />

                        <Redirect to="/create" />
                    </Switch>
                </div>
            </Router>

        </>
    )
}
