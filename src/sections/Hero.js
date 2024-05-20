import React from "react";
import './Hero.css';
import Button from "../components/Button";
import { Link } from 'react-router-dom';

const Hero = () => {
    return(
        <section className="heroContainer">
            <h1>Bem-vindo ao meu mundo digital!</h1>
            <Link to="/projetos">
            <Button style="primary">Meus trabalhos</Button>
            </Link>
        </section>
    );
}

export default Hero;