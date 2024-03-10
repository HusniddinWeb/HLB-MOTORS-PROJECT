import React from 'react'
import "./Services.css"
// import BYDServeces from "../images/01.png"

import { FaCar } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";

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
                    Toshkentning qoq markazida joylashgan ushbu kompaniya BYD ishqibozlari va yuqori darajadagi avtomobil yechimlarini izlayotgan atrof-muhitga e'tiborli haydovchilar uchun markaz bo'lib xizmat qiladi.
                    </div>
                    <img className='img-ser' src="https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_default/v1/editorial/vhs/BYD-Dolphin_0.png" alt="" />
                </div>

                <div className="services-main-block">

                    <div className="services-r">
                    <div className="services-block-r">
                        <div className="services-img">
                            <IoCarSportOutline className='icon-S' />
                            <p className='icon-number'>01</p>
                        </div>
                        <div className="services-block-item-r">
                            Sifatli Avtomobillar
                        </div>
                        <div className="services-block-text-r">
                            Mavjud bo'laklarning ko'plab variantlari mavjud, ammo kattalar  o'quvchining turli xil o'zgarishlarga duchor bo'lishidan aziyat chekdi.
                        </div>
                    </div>
                    <div className="services-block-r">
                        <div className="services-img">
                            <IoCarSportOutline className='icon-S' />
                            <p className='icon-number'>03</p>
                        </div>
                        <div className="services-block-item-r">
                            Mashhur brendlar
                        </div>
                        <div className="services-block-text-r">
                            Mavjud bo'laklarning ko'plab variantlari mavjud, ammo kattalar  o'quvchining turli xil o'zgarishlarga duchor bo'lishidan aziyat chekdi.
                        </div>
                    </div>    
                    </div>

                    <div className="services-r end">
                    <div className="services-block-r">
                        <div className="services-img">
                            <IoCarSportOutline className='icon-S' />
                            <p className='icon-number'>02</p>
                        </div>
                        <div className="services-block-item-r">
                            Sertifikatlangan
                        </div>
                        <div className="services-block-text-r">
                            Mavjud bo'laklarning ko'plab variantlari mavjud, ammo kattalar  o'quvchining turli xil o'zgarishlarga duchor bo'lishidan aziyat chekdi.
                        </div>
                    </div>
                    <div className="services-block-r">
                        <div className="services-img">
                            <IoCarSportOutline className='icon-S' />
                            <p className='icon-number'>04</p>
                        </div>
                        <div className="services-block-item-r">
                            O'rtacha narx
                        </div>
                        <div className="services-block-text-r">
                            Mavjud bo'laklarning ko'plab variantlari mavjud, ammo kattalar  o'quvchining turli xil o'zgarishlarga duchor bo'lishidan aziyat chekdi.
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