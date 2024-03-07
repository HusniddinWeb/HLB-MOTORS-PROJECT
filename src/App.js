import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
// import Main from './components/main/Main';


import {Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Login from "./pages/login/Login";
import About from './pages/about/About';
import ProductDetail from './pages/productDetail/ProductDetail';

function App() {

    const [name, setName] = useState('');

  return (
    <div className="App">
      
      <Navbar />
      {/* <Main /> */}
      
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='login' element={ <Login setName={setName} /> } />
        <Route path='about' element={ <About name={name} /> } />
        <Route path='productDetail/:id' element={ <ProductDetail /> } />
      </Routes>

    </div>
  );
}

export default App;
