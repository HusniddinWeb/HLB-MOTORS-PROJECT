import React from 'react'
import "./About.css"
import aboutLogo from "../images/about-logo.png"

import { FaCar } from "react-icons/fa";
import { MdDownloadDone } from "react-icons/md";
import { MdOutlineCarRental } from "react-icons/md";
import { GiCarKey } from "react-icons/gi";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { RiUserStarLine } from "react-icons/ri";


function About() {
  return (
    <div className='about'>
        <div className="container">
            <div className="about-t">
                <div className="about-block">

                    <div className="about-block-l">
                        <img src={aboutLogo} alt="" />
                    </div>

                    <div className="about-block-r">
                        <div className="about-title">
                            <FaCar />
                            BIZ HAQIMIZDA
                        </div>
                        <div className="item">
                            O'zbekistondagi Eng Yirik<br></br> <span>Avtomobil Sotuvchi</span><br></br>Bozor
                        </div>
                        <div className="text">
                            Biz sifat va narx bo'ycha barcha kampaniyalar bilan raqobatlasha olamiz. 
                        </div>
                        <div className="about-icon">
                            <MdDownloadDone className='icons-gal'/> Texnik yordam ko'rsatish.
                        </div>
                        <div className="about-icon">
                            <MdDownloadDone className='icons-gal' /> O'quvchi chalg'ishini aniqlash.
                        </div>
                        <div className="about-icon">
                            <MdDownloadDone className='icons-gal' /> Sifat va ishonch.
                        </div>
                    </div>

                </div>
            </div>
        </div>
            <div className="about-b">
                <div className="container">
                    <div className="about-block-b">
                    <div className="about-info">
                        <div className="icons">
                            <MdOutlineCarRental />
                        </div>
                        <div className="about-number">500</div>
                        <div className="about-info-title">
                            + Mavjud Avtomobillar
                        </div>
                    </div>
                    <div className="about-info">
                        <div className="icons">
                            <GiCarKey />
                        </div>
                        <div className="about-number">900</div>
                        <div className="about-info-title">
                            + Baxtli Mijozlar
                        </div>
                    </div>
                    <div className="about-info">
                        <div className="icons">
                            <HiMiniWrenchScrewdriver />
                        </div>
                        <div className="about-number">50</div>
                        <div className="about-info-title">
                            + Jamoa Ishchilari
                        </div>
                    </div>
                    <div className="about-info">
                        <div className="icons">
                         <RiUserStarLine />
                        </div>
                        <div className="about-number">10</div>
                        <div className="about-info-title">
                            + Yillik Tajriba
                        </div>
                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default About