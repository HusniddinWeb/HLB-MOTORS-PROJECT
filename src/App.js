import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';

import { useState, useEffect } from 'react';

import { IoArrowUpCircleOutline } from "react-icons/io5";


import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import AboutUs from "./pages/aboutUs/AboutUs";
import Payment from './pages/payment/Payment';
import ProductDetail from './pages/productDetail/ProductDetail';
import ElectricCars from "./pages/electricCars/ElectricCars"
import Contact from "./pages/contact/Contact"



function App() {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">


      <div className={isSticky ? 'stick' : ''}>
        <a href='#scroll' className='scroll-btn' >
          <IoArrowUpCircleOutline />
        </a>
      </div>
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='aboutUs' element={ <AboutUs /> } />
        <Route path='payment' element={ <Payment /> } />
        <Route path='electricCars' element={ <ElectricCars /> } />
        <Route path='contact' element={ <Contact  /> } />
        <Route path='productDetail/:id' element={ <ProductDetail /> } />
      </Routes>

      

    </div>
  );
}

export default App;
