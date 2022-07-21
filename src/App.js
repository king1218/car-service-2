
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Services from './pages/Home/Services/Services';
import About from './pages/About/About'
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import Header from './pages/Shared/Header/Header'
import Home from './pages/Home/Home/Home';
import Exparts from './pages/Home/Exparts/Exparts';
import Nav from './pages/Shared/Nav/Nav';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import NotFound from './pages/Shared/NotFound/NotFound';
import Register from './pages/Register/Register';


function App() {
  return (
    <div>
    <Nav></Nav>
      <Routes>  
        <Route path='/Services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/header' element={<Header></Header>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/exparts' element={<Exparts></Exparts>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/services/:serviceid' element={<ServiceDetails></ServiceDetails>}></Route>
        </Routes>
    </div>
   
  );
}

export default App;
