import React from 'react';

import Header from "../../components/header/header.component"
import Product from "../../components/product/product.component"
import { faChalkboardTeacher, faCoffee, faNewspaper } from '@fortawesome/free-solid-svg-icons'

import "./homepage.styles.scss"

const HomePage = () => {
    return <div className="homepage">
        <Header/>
        <div className="content">
            <Product title="Generador de Caratulas" description="Genera tus caratulas para cualquier trabajo o entregable. De 1-6 integrantes" icon= {faChalkboardTeacher}/>
            <Product title="Calculadora de Promedios" description="Calcula tus promedios de tu semestre actual" icon={faNewspaper}/>
            <Product title="Noticias" description="Desventuradas noticias de la universidad y la vida en ella" icon={faCoffee}/>
        </div>
    </div>

}

export default HomePage;