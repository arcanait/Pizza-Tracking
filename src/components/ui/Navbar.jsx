import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark" style={{backgroundColor: '#6610F2'}}>
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Pizza Tracking
            </Link>

            <div className="navbar-collapse justify-content-between">
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
                <div >
                    <button 
                        className='logout-button'
                        onClick={startLogout}
                    >
                        Salir
                    </button>
                </div>
            </div>

        </nav>
    )
}
