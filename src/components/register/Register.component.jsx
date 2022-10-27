import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.utils";
import { FormInput } from "../../components"
import { CustomButton } from "../../components";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, loading] =
    useCreateUserWithEmailAndPassword(auth, email, password);

    function handleChange(e) {
        const { value } = e.target;
        setEmail(value);
        setPassword(value);
        console.log(value);
    }
    

    function handleSubmit(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(email,password);
    }
    if (loading){
        return <p>Loading...</p>
    }

    return(
        <div className="sign-in">
        <h1>Aún no tiene cuenta con nosostros</h1><br />
        <span>Registrate con tu email y  password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={email}
            label="email"
            handleChange={handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={handleChange}
            label="password"
            required
          />

          <CustomButton type="submit" className='btn btn-primary w=100 mb-4'onClick={handleSubmit}>
          Crear Cuenta
          </CustomButton>
          <CustomButton id="google-login" className='btn btn-info'>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    )
}
