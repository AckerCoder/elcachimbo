import React from 'react';

import RightSideHero from '../../components/right-side-hero/right-side-hero.component';
import SignUp from '../../components/sign-up/sign-up.component';

import "./sign-in-sign-up.styles.scss"
const SignInSignUp = () => {
    return <div className="sign-in-sign-up">
        <SignUp/>
        <RightSideHero/>
    </div>

}

export default SignInSignUp;