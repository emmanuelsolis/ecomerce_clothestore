import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';
import Navbar from './components/navbar/Navbar.component';
import SignInAndSignUpPage from './pages/signin-signup/signin-singup.component';


function App(props) {
  console.log('Las props de App son: ', props);
  return (
    <>
    <Navbar/>
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/shop' element={<ShopPage {...props}/>}/>
        <Route exact path='/signIn' element={<SignInAndSignUpPage  {...props}/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
