import React from 'react'
import "./Home.css"
import Card from './Card'
import {car} from "../../datas/products/Products"
import Main from '../../components/main/Main'
import About from '../../components/about/About'
import Services from '../../components/services/Services'

import { FaCar } from "react-icons/fa";
import Clients from '../../components/clients/Clients'
import Playmarket from '../../components/playmarket/Playmarket'
import Footer from '../../components/footer/Footer'

function Home() {
  
  
  return (
    <div className='home'>
      <Main />
      <About />
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
      <Services />
      <Clients />
      <Playmarket />
      <Footer />
    </div>
  )
}

export default Home