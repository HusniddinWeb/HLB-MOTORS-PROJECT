import React from 'react'
import "./Main.css"
import img from "../images/HAN.png"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Main() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <div className='main'>

        <div className="main-block1">
            <div className="container">
                <div className="main-blocks">
                    <div className="main-block-l">
                        <div className="item">HLB MOTORSGA XUSH KELIBSIZ!</div>
                        <div className="title"> <span>O'ZINGIZNING<br></br> ORZUYINGIZDAGI</span><br></br> MASHINANI<br></br> TOPISGNING ENG<br></br> YAXSHI USULI</div>
                        <div className="text">
                        Yo'l mashaqqatlaridan sizni xalos etuvchi<br></br> haqiqiy shedevr      avtomobilga ega bo'ling.
                        </div>
                    </div>

                    <div className="main-block-r">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main