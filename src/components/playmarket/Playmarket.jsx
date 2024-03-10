import React from 'react'
import "./Playmarket.css"
import playimg from "../images/play.png"
import { NavLink } from 'react-router-dom';

import { FaCar } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";

function Playmarket() {
  return (
    <div className='playmarket'>
        <div className="container">
            <div className="playmarket-block">
                <div className="playmarket-block-l">
                    <div className="playmarket-item">
                        <FaCar/> 
                        ILOVAMIZNI OLING    
                    </div>
                    <div className="playmarket-title">
                        <span>Bizning HLB MOTORS</span><br></br> Ilovamizni Bepul Yuklab<br></br> Oling
                    </div>
                    <div className="playmarket-text">
                        Ilova siz uchun ko'pab qulayliklar yaratib beradi.<br></br> Ilovani bebul yuklab olishingiz mumkin.
                    </div>
                    <div className="play-navlink">
                        <NavLink to={"https://play.google.com/store/apps?hl=ru&gl=US"} className={"nav-play"} target='_blank'>
                            <FaGooglePlay className='nav-icons-play' />
                            <p>
                                Uni ishga tushiring<br></br> <span>Google Play</span>
                            </p>
                        </NavLink>
                        <NavLink to={"https://www.apple.com/app-store/"} className={"nav-play play-end"} target='_blank' >
                            <FaAppStore className='nav-icons-play' /> 
                            <p>
                                Uni ishga tushiring<br></br> <span>Uskunalar Do'koni</span>
                            </p>
                        </NavLink>
                    </div>
                </div>
                <div className="playmarket-block-r">
                    <img src={playimg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Playmarket