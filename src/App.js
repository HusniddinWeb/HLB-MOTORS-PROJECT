import './App.css';
import Navbar from './components/navbar/Navbar';


import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import AboutUs from "./pages/aboutUs/AboutUs";
import Payment from './pages/payment/Payment';
import ProductDetail from './pages/productDetail/ProductDetail';
import ElectricCars from "./pages/electricCars/ElectricCars"
import Contact from "./pages/contact/Contact"

function App() {

  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='aboutUs' element={ <AboutUs  /> } />
        <Route path='payment' element={ <Payment  /> } />
        <Route path='electricCars' element={ <ElectricCars  /> } />
        <Route path='contact' element={ <Contact  /> } />
        <Route path='productDetail/:id' element={ <ProductDetail /> } />
      </Routes>

    </div>
  );
}

export default App;
