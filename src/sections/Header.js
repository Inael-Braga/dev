import React from "react";
import './Header.css';
import { Link } from 'react-router-dom'; //Função de linkar pra outra página
import Menulines from "../assets/Menulines.svg";
import Dropdown from "../components/Dropdown";


const Header = () => {
    
    return(
        <div className="Header">
            <div className="HeaderContainer">
                <div className="HeaderLogo">
                    <h4><Link to="/">Braga</Link></h4>
                </div>
                <div className="HeaderMenu">
                    <img src={Menulines} alt="teste" className="menuIcon"/>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projetos">Projetos</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                    {/* <Dropdown/> */}
                </div>
            </div>

        </div>
    );
}

export default Header;