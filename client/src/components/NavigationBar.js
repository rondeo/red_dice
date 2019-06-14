import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navber-header">
                    <Link to="/" className="navbar-brand">Red Dice</Link>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/signup" className="navbar-brand">Sign Up</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavigationBar;