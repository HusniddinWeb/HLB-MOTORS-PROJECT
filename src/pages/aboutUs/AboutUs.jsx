import React from 'react'
import "./AboutUs.css"
import { NavLink } from 'react-router-dom'
import { FaAnglesRight } from "react-icons/fa6";

import { FaTelegram } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

import images1 from "../../components/images/team/01.jpg"
import images2 from "../../components/images/team/02.jpg"
import images3 from "../../components/images/team/03.jpg"
import images4 from "../../components/images/team/04.jpg"

import About from '../../components/about/About'
import Clients from '../../components/clients/Clients';
import Footer from '../../components/footer/Footer';



function AboutUs() {
  return (
    <div className='aboutUs'>
      {/* <div className="main-block">
        <h1 className='brend-title'>Biz haqimizda</h1>
        <div className="nav-brend">
          <NavLink className="brent-icons hov" to={"/"} >Asosiy</NavLink>
          <FaAnglesRight />
          <h4>Biz haqimizda</h4>
        </div>
      </div> */}
      <About />
      <Clients />

      <div className="home-block-t">
        <div className='home-item'>
          JAMOA
        </div>
        <div className="home-title">
          <span>Jamoamiz</span> Bilan Tanishing 
        </div>
        <div className="home-animation"></div>
      </div>

      <div className="team">

        <div className="container">

          <div className="team-block">
            
            <div className="team-clents">

              <div className="team-img">
                <img src={images1} alt="" />
              </div>
              <div className="team-name">Chad Smit</div>
              <div className="team-title">HR Menejeri</div>

              <div className="team-link">
                <NavLink className="class-icon" to={"#"}><FaTelegram /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaInstagramSquare /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaFacebook /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaTwitter /></NavLink>
              </div>

            </div>

            <div className="team-clents">

              <div className="team-img">
                <img src={images2} alt="" />
              </div>
              <div className="team-name">Malida, Fie</div>
              <div className="team-title">Texnik</div>

              <div className="team-link">
                <NavLink className="class-icon" to={"#"}><FaTelegram /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaInstagramSquare /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaFacebook /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaTwitter /></NavLink>
              </div>

            </div>

            <div className="team-clents">

              <div className="team-img">
                <img src={images3} alt="" />
              </div>
              <div className="team-name">Aron Rodri</div>
              <div className="team-title">Bosh Direktor Va Asoschi</div>

              <div className="team-link">
                <NavLink className="class-icon" to={"#"}><FaTelegram /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaInstagramSquare /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaFacebook /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaTwitter /></NavLink>
              </div>

            </div>

            <div className="team-clents">

              <div className="team-img">
                <img src={images4} alt="" />
              </div>
              <div className="team-name">Toni Pinto</div>
              <div className="team-title">Mexanik Muhandis</div>

              <div className="team-link">
                <NavLink className="class-icon" to={"#"}><FaTelegram /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaInstagramSquare /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaFacebook /></NavLink>
                <NavLink className="class-icon" to={"#"}><FaTwitter /></NavLink>
              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default AboutUs