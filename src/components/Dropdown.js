import React from "react";
import './Dropdown.css';
import { Link } from 'react-router-dom';

const Dropdown = () => {

    return (
        <div className="dropdown">
            <div className="dropdownContainer">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projetos">Projetos</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
            </div>
        </div>
    );
};

export default Dropdown;