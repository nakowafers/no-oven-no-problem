import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div classNam="navbar">
                <nav>
                    <ul>
                        <li>
                            <a href="#bottom">Go to Bottom</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#recipes">Recipes</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

}

export default Navbar;