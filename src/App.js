import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.component';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shoppage';


function App(props) {
  console.log('Las props de App son: ', props);
  return (
    <div className='App'>
      <Navbar/>
      {/* <Homepage/> */}
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/shop' element={<ShopPage {...props}/>}/>
      </Routes>
    </div>
  );
}

export default App;
