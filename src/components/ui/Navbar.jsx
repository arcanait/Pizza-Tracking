import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#6610F2'}}>
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Pizza Tracking
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-capitalize" 
                        exact
                        to="/dashboard"
                    >
                        dashboard
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-capitalize" 
                        exact
                        to="/create"
                    >
                        Crear pizza
                    </NavLink>
                    
                </div>
            </div>

        </nav>
    )
}
