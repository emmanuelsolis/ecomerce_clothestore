import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.component';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App(props) {
  return (
    <div className='App'>
      
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Homepage {...props}/>}/>
        <Route  path='/hats' element={<HatsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
