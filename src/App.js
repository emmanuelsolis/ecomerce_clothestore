import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.component';
import Homepage from './pages/homepage/homepage';

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)
const TopicList = (props) => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={"/topics/13"}>To Topic 13</Link>
      <Link to={"/topics/17"}>To Topic 17</Link>
      <Link to={"/topics/21"}>To Topic 21</Link>
    </div>
  )
}
const TopicDetail = ([props, topicId]) => {
    console.log("TOPICID: ", topicId);
  return (
    <div>
     <h1>tOPIC DETAIL PAGE:{props.topicId}</h1>
     <h1>tOPIC DETAIL PAGE:{topicId}</h1>
   </div>
  )
}
function App(props) {
  console.log('Las props de App son: ', props);
  return (
    <div className='App'>
      <Navbar/>
      {/* <Homepage/> */}
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/hats' element={<HatsPage {...props}/>}/>
        <Route exact path='/topics' element={<TopicList {...props}/>}/>
        <Route  path='/topics/:topicId' element={<TopicDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
