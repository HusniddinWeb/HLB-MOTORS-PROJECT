import React from 'react'
import "./ProductDetail.css"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaGaugeHigh } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BsFuelPump } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

// react js responsible carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



import { car } from '../../datas/products/Products'
import { useParams } from 'react-router-dom'
import Card from '../home/Card';

import imgP from "../../components/images/05.jpg";
import Footer from '../../components/footer/Footer';


function ProductDetail() {

    const settings = {
        loop: true,
        autoplay: true,
        dots: false,
        infinite: true,
        autoplayTimeout: 2500,
        speed: 500,
        margin: 20,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const {id} = useParams()
    const data = car.find(item=>item.id===id)
    return (
        <div className='product-Detail' id='scroll'>
            <div className="container">

                <div className="product-Detail-block">

                    <div className="product-Detail-l">

                        <div className="product-Detail-title">
                            {data.title} avtomobili
                        </div>
                        <div className="product-eye">
                            <MdOutlineRemoveRedEye className='eyes' /> Ko'rishlar: {data.eye}
                        </div>

                        <div className="product-slider">
                            <Carousel {...settings} className='sliders'>
                                <div className="p-img">
                                    <img src={data.img1} alt="" className='cl'/>
                                </div>
                                <div className="p-img">
                                    <img src={data.img5} alt="" className='cl'/>
                                </div>
                                <div className="p-img">
                                    <img src={data.img3} alt="" className='cl'/>
                                </div>
                                <div className="p-img">
                                    <img src={data.img4} alt="" className='cl'/>
                                </div>
                                <div className="p-img">
                                    <img src={data.img2} alt="" className='cl'/>
                                </div>
                            </Carousel>
                        </div>

                    </div>

                    <div className="product-Detail-r">
                        
                        <div className="product-detail-w">

                            <div className="product-price">
                                {data.price}
                            </div>
                            <div className="product-icon">
                                <div className="p-icon">
                                    <FaGaugeHigh className='p-c' /> 50k Miles
                                </div>
                                <div className="p-icon">
                                    <IoLocationSharp className='p-c' /> Toshkent | Index
                                </div>
                            </div>

                        </div>

                        <div className="product-detail-t">
                            <div className="product-img">
                                <img src={imgP} alt="" />
                            </div>
                            <div className="product-menu">
                                <div className="product-text">
                                    Mansur Karimov <br></br><span className='p-span'>Mijoz maslahatchisi</span>
                                </div>
                                <div className="product-link">
                                    <FaFacebook className='p-t' />
                                    <FaInstagram className='p-t' />
                                    <FaTelegram className='p-t' />
                                    <IoLogoTwitter className='p-t' />
                                </div>
                            </div>
                        </div>

                        <div className="product-detail-s">
                            <div className="product-item">Aloqa tafsilotlari</div>
                            <form action="" className='p-form'>
                                <input type="text" placeholder='Ism' className='p-input' />
                                <input type="gmail" placeholder='Gmail' className='p-input' />
                                <textarea name="" id="" cols="25" rows="3" placeholder='Xabar'></textarea>
                                <button className='p-button'>Yuborish <FaRegPaperPlane /></button>
                            </form>
                        </div>

                    </div>

                </div>

                <div className="product-main">
                    <div className="product-main-item">Asosiy ma'lumotlar</div>

                    <div className="product-main-block">

                        <div className="product-main-projekt">
                            <IoCarSport className='p-main-icon' />
                            <div className="product-main-text">
                                <span className='p-main-span'>Tana turi</span><br></br>
                                BYD
                            </div>
                        </div>

                        <div className="product-main-projekt">
                            <IoCarSport className='p-main-icon' />
                            <div className="product-main-text">
                                <span className='p-main-span'>Vaziyat</span><br></br>
                                Yangi
                            </div>
                        </div>

                        <div className="product-main-projekt">
                            <BsSpeedometer2 className='p-main-icon' />
                            <div className="product-main-text">
                                <span className='p-main-span'>Kilometr</span><br></br>
                                50,000 (Mi)
                            </div>
                        </div>

                        <div className="product-main-projekt">
                            <IoSettingsOutline className='p-main-icon' />
                            <div className="product-main-text">
                                <span className='p-main-span'>Yuqish</span><br></br>
                                Avtomatik
                            </div>
                        </div>

                    </div>

                    <div className="product-main-block">

                        <div className="product-main-projekt">
                            <IoCarSport className='p-main-icon' />
                            <div className="product-main-text">
                                <span className='p-main-span'>Yil</span><br></br>
                                2024 Yil
                            </div>
                        </div>

                        <div className="product-main-projekt">
                            <BsFuelPump className='p-main-icon' />
                            <div className="product-main-text">
                                <span className='p-main-span'>Yoqilg'i turi</span><br></br>
                                Gibrid
                            </div>
                        </div>

                        <div className="product-main-projekt">
                            <BsSpeedometer2 className='p-main-icon' />
                            <div className="product-main-text">
                                <span className='p-main-span'>Rang</span><br></br>
                                Qora
                            </div>
                        </div>

                        <div className="product-main-projekt">
                            <IoSettingsOutline className='p-main-icon' />
                            <div className="product-main-text">
                                <span className='p-main-span'>Eshiklar</span><br></br>
                                4 eshik
                            </div>
                        </div>

                    </div>

                    <div className="product-main-item">Avtomobil xususiyatlari</div>

                    <div className="product-main-feeling">

                        <div className="main-feeling">

                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Ko'p zonali konditsioner
                            </div>
                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Old o'rindiqlarni isitish
                            </div>
                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Navigatsiya tizimi
                            </div>
                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Teri o'rindiqlar
                            </div>

                        </div>

                        <div className="main-feeling">

                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Premium ovoz tizimi
                            </div>
                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Bluetooth
                            </div>
                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Android Auto
                            </div>
                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Vaqti-vaqti bilan tozalagichlar
                            </div>

                        </div>

                        <div className="main-feeling">

                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Xotira o'rindig'i
                            </div>
                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Moslashuvchan kruiz nazorati
                            </div>
                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Sovutilgan o'rindiqlar
                            </div>
                            <div className="main-feeling-icon">
                                <IoIosCheckmarkCircleOutline className="main-feeling-ios" />
                                Boshlash tugmachalari
                            </div>

                        </div>

                    </div>

                </div>

                <div className='home-main'>

                    {car.map((item, index) => (
                    <Card key={index.id} {...item} />
                    ))}  

                </div>

            </div>

            <Footer />

        </div>
    )
}

export default ProductDetail