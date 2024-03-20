import React from 'react'
import "./Services.css"
// import BYDServeces from "../images/01.png"

import { FaCar } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";
import { MdOutlineCreditScore } from "react-icons/md";
import { LiaAwardSolid } from "react-icons/lia";
import { MdOutlineEarbudsBattery } from "react-icons/md";

function Services() {
  return (
    <div className='services'>
        <div className="container">
            <div className="services-block">

                <div className="services-l">
                    <div className="services-item">
                        <FaCar />NIMA UCHUN BIZNI TANLAYSIZ
                    </div>
                    <div className="services-titl">
                        Biz Sifatli Xizmat<br></br> <span>Ko'rsatishga</span> <br></br> Bag'ishlanganmiz
                    </div>
                    <div className="services-text">
                    Toshkentning markazida joylashgan ushbu kompaniya BYD ishqibozlari va yuqori darajadagi avtomobil yechimlarini izlayotgan va atrof-muhitga e'tiborli haydovchilar uchun markaz bo'lib xizmat qiladi.
                    </div>
                    <img className='img-ser' src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/BYD-Dolphin_0.png" alt="" />
                </div>

                <div className="services-main-block">

                    <div className="services-r">
                    <div className="services-block-r">
                        <div className="services-img">
                            <div className="ctad-icons">
                                <LiaAwardSolid  className='icon-S' />    
                            </div>
                            <p className='icon-number'>01</p>
                        </div>
                        <div className="services-block-item-r">
                            KAFOLAT
                        </div>
                        <div className="services-block-text-r">
                            Biz barcha avtomobillarga 6 yil yoki 150 000 km gacha kafolat beramiz
                        </div>
                    </div>
                    <div className="services-block-r">
                        <div className="services-img">
                            <div className="ctad-icons">
                                <MdOutlineCreditScore  className='icon-S' />
                            </div>
                            <p className='icon-number'>03</p>
                        </div>
                        <div className="services-block-item-r">
                            KREDIT
                        </div>
                        <div className="services-block-text-r">
                            Bu stavka 24% dan boshlanadi. 25% dastlabki to'lov. 60 oygacha 
                        </div>
                    </div>    
                    </div>

                    <div className="services-r end">
                        <div className="services-block-r">
                            <div className="services-img">
                                <div className="ctad-icons">
                                    <MdOutlineEarbudsBattery  className='icon-S' />
                                </div>
                                <p className='icon-number'>02</p>
                            </div>
                            <div className="services-block-item-r">
                                BYD BATARYA
                            </div>
                            <div className="services-block-text-r">
                                Dunyodagi eng xavfsiz batareya. Batareya kafolati 8 yilgacha yoki 150 000 km
                            </div>
                        </div>
                        <div className="services-block-r">
                            <div className="services-img">
                                <div className="ctad-icons">
                                    <IoCarSportOutline className='icon-S' />
                                </div>
                                <p className='icon-number'>04</p>
                            </div>
                            <div className="services-block-item-r">
                                RASMIY DILER
                            </div>
                            <div className="services-block-text-r">
                                Sotib olgandan keyin qo'llab-quvvatlash
                            </div>
                        </div>    
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Services