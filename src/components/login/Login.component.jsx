import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.utils";
import {  useNavigate } from "react-router-dom";
import { FormInput, CustomButton } from "../../components"
import "./login.styles.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

    function handleChange(e) {
        const { value } = e.target;
        setEmail(value);
        setPassword(value);
        console.log(value);
    }
    function handleSignIn(e) {
        e.preventDefault();
      signInWithEmailAndPassword(email, password);
        navigate("/");
    }
    if (loading) {
      return <p>Loading...</p>;
    }
    if (user) {
      return <p>Signed in!</p>;
    }
    return (
        <div className="sign-in">
        <h1>I already have an account</h1><br />
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSignIn}>
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

          <CustomButton type="submit" onClick={handleSignIn}>
          Sign In
          </CustomButton>
          <CustomButton>
            Sign In with Google
          </CustomButton>
        </form>
      </div>
    )
}

export default Login;