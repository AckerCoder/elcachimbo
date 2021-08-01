import React from 'react';

import { FormControl, TextField, Button } from '@material-ui/core';

import './sign-in.styles.scss'

const SignIn = () => {
    return <div className="sign-in">
        <FormControl className="form">
            <TextField id="outlined-basic" label="Correo Electrónico" variant="outlined" className="text-field"/>
            <TextField id="outlined-basic" label="Contraseña" type="password" variant="outlined" className="text-field"/>
            <div className="buttons">
                <Button variant="contained" color="primary">Ingresar</Button>
                <Button variant="contained" color="secondary">Registrarse</Button>
            </div>
        </FormControl>
    </div>

}

export default SignIn;