import React from 'react'
import "./Clients.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import icon1 from "../images/05.jpg"
import icon2 from "../images/02.jpg"
import icon3 from "../images/03.jpg"
import icon4 from "../images/04.jpg"


import { FaCar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteRight } from "react-icons/bi";

function Clients() {

    const options = {
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'slideOutUp',
        dots: false,
        nav: false,
        margin: 20,
        responsive: {
            1200: {
                items: 4,
            },
            992: {
                items: 3,
            },
            768: {
                items: 2,
            },
            576: {
                items: 2,
                innerWidth: "100%",
                outerWidth: "100%"
            },
            360: {
                items: 1,
                innerWidth: "100%",
                outerWidth: "100%"
            },
            340: {
                items: 1,
                innerWidth: "100%",
                outerWidth: "100%"
            },
        },
    }

  return (
    <div className='clients'>
        <div className="container">

            <div className="home-block-t">
                <div className='home-item'>
                    <FaCar/>
                    GUVOHLAR
                </div>
                <div className="home-title">
                    Bizning Mijozimiz Nimai<br></br> <span>Deydi</span> 
                </div>
                <div className="home-animation"></div>
            </div>

            <div className="clients-block">

                <OwlCarousel className='owl-theme sectionBlock' {...options}>

                    <div className="clients-main">

                        <div className="clients-img">
                            <img src={icon1} alt="" />
                        </div>

                        <div className="clients-name">Sardor Rashidov</div>
                        <div className="clients-mijoz">Mijoz</div>

                        <div className="clients-text">
                            Juda ham ajoyib avtomabil menga juda ham yoqdi. Dizayin va sifat alo datajada. Narxlar ham hamyon bob ekan.
                        </div>

                        <div className="clients-stare">
                            < FaStar />
                            < FaStar />
                            < FaStar />
                            < FaStar />
                            < FaStar />
                        </div>

                        <div className="clients-icons">
                            <BiSolidQuoteRight />
                        </div>

                    </div>

                    <div className="clients-main">

                        <div className="clients-img">
                            <img src={icon2} alt="" />
                        </div>

                        <div className="clients-name">Anna Sedokova</div>
                        <div className="clients-mijoz">Mijoz</div>

                        <div className="clients-text">
                            Juda ham ajoyib avtomabil menga juda ham yoqdi. Dizayin va sifat alo datajada. Narxlar ham hamyon bob ekan.
                        </div>

                        <div className="clients-stare">
                            < FaStar />
                            < FaStar />
                            < FaStar />
                            < FaStar />
                            < FaStar />
                        </div>

                        <div className="clients-icons">
                            <BiSolidQuoteRight />
                        </div>

                    </div>

                    <div className="clients-main">

                        <div className="clients-img">
                            <img src={icon3} alt="" />
                        </div>

                        <div className="clients-name">Dilnoza Oripova</div>
                        <div className="clients-mijoz">Mijoz</div>

                        <div className="clients-text">
                            Juda ham ajoyib avtomabil menga juda ham yoqdi. Dizayin va sifat alo datajada. Narxlar ham hamyon bob ekan.
                        </div>

                        <div className="clients-stare">
                            < FaStar />
                            < FaStar />
                            < FaStar />
                            < FaStar />
                            < FaStar />
                        </div>

                        <div className="clients-icons">
                            <BiSolidQuoteRight />
                        </div>

                    </div>

                    <div className="clients-main">

                        <div className="clients-img">
                            <img src={icon4} alt="" />
                        </div>

                        <div className="clients-name">Maria Viktorovna</div>
                        <div className="clients-mijoz">Mijoz</div>

                        <div className="clients-text">
                            Juda ham ajoyib avtomabil menga juda ham yoqdi. Dizayin va sifat alo datajada. Narxlar ham hamyon bob ekan.
                        </div>

                        <div className="clients-stare">
                            < FaStar />
                            < FaStar />
                            < FaStar />
                            < FaStar />
                            < FaStar />
                        </div>

                        <div className="clients-icons">
                            <BiSolidQuoteRight />
                        </div>

                    </div>

                </OwlCarousel>

            </div>
        </div>
    </div>
  )
}

export default Clients