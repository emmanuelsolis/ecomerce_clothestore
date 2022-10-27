import React from "react";
// import CustomButton from "../custom-button/Custom-button.component";
// import FormInput from "../form-input/Form-input.component";
import { Register } from "../register/Register.component";
// import { signInWithGoogle } from "../../firebase/firebase.utils";
// import { createUserWithEmailAndPassword } from "react-firebase-hooks/auth"
// import { auth } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ email: "", password: ""});

  };
  render() {
    return (
      <Register/>
      // <div className="sign-in">
      //   <h1>I already have an account</h1><br />
      //   <span>Sign in with your email and password</span>

      //   <form onSubmit={this.handleSubmit}>
      //     <FormInput
      //       name="email"
      //       type="email"
      //       value={this.state.email}
      //       label="email"
      //       handleChange={this.handleChange}
      //       required
      //     />
      //     <FormInput
      //       name="password"
      //       type="password"
      //       value={this.state.email}
      //       handleChange={this.handleChange}
      //       label="password"
      //       required
      //     />

      //     <CustomButton type="submit">
      //     Sign In
      //     </CustomButton>
      //     <CustomButton >

      //     Sign in with Google
      //     </CustomButton>
      //   </form>
      // </div>
    );
  }
}
export default SignIn;
