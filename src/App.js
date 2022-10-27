import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import Navbar from './components/navbar/Navbar.component';
import SignInAndSignUpPage from './pages/signin-signup/signin-singup.component';
import { auth } from './firebase/firebase.utils';
import './google-login.js';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user);
    })
  }
  componentWillUnmount(){
      this.unsubscribeFromAuth();
  };
  render() {
    return (
    <>
    <Navbar currentUser={this.state.currentUser}/>
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/shop' element={<ShopPage />}/>
        <Route exact path='/signin' element={<SignInAndSignUpPage  />}/>
      </Routes>
    </div>
    </>
  );
  }
}

export default App;
