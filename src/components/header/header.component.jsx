import React from 'react';

import { Button } from '@material-ui/core';

import Logo from "../../logo.svg";

import "./header.styles.scss"

const Header = () => {
    return <div className="header">
        <img src={Logo} alt="logo" width="100" />
        <div className="sign-buttons">
            <Button variant="outlined" className="sign-in-button">Ingresar</Button>
            <Button variant="outlined" className="sign-up-button">Registrarse</Button>
        </div>
    </div>
}

export default Header;