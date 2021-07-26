import React from 'react';

import { FormControl, TextField, Button } from '@material-ui/core';

import './sign-up.styles.scss'

const SignUp = () => {
    return <div className="sign-up">
        <FormControl className="form">
            <TextField id="outlined-basic" label="Correo Electrónico" variant="outlined" className="text-field"/>
            <TextField id="outlined-basic" label="Contraseña" type="password" variant="outlined" className="text-field"/>
            <div>
                <Button variant="contained" color="primary">Ingresar</Button>
                <Button variant="contained" color="secondary">Registrarse</Button>
            </div>
        </FormControl>
    </div>

}

export default SignUp;