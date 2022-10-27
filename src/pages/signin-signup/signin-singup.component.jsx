import './signin-singup.styles.scss'

import React from 'react'
import SignIn from '../../components/sign-in/Sing-in.component'
import { Login } from '../../components'

const SignInAndSignUpPage = () => (
    <>
    <div className="signin-signup">
        <Login/>
        <SignIn/>

    </div>
    </>
)

export default SignInAndSignUpPage
