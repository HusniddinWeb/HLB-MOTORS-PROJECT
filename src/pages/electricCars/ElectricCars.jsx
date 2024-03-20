import React from 'react'
import "./ElectricCars.css"
import { NavLink } from 'react-router-dom'

import {car} from "../../datas/products/Products"
import { FaCar } from "react-icons/fa";
import Card from '../home/Card'

import { FaAnglesRight } from "react-icons/fa6";
import Footer from '../../components/footer/Footer';

function ElectricCars() {
  return (
    <div className='electric-cars' id='scroll'>
        {/* <div className="main-block hero-byd">
            <h1 className='brend-title'>Elektromobillar</h1>
            <div className="nav-brend">
            <NavLink className="brent-icons hov" to={"/"} >Asosiy</NavLink>
            <FaAnglesRight />
            <h4>Elektromobillar</h4>
            </div>
        </div> */}

        <div className="container">

          <div className="home-block-t">
            <div className='home-item'>
              <FaCar/>
              YANGI KELGANLAR
            </div>
            <div className="home-title">
              Keling, Eng So'nggi<br></br> <span>Avtomobillarni Ko'rib<br></br> Chiqaylik</span> 
            </div>
            <div className="home-animation"></div>
          </div>

          <div className='home-main'>

            {car.map((item, index) => (
              <Card key={index.id} {...item} />
            ))}
              

          </div>
        </div>

        <Footer/>

    </div>
  )
}

export default ElectricCars