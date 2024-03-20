import React from 'react'
import "./Payment.css"
import imagePay from "../../components/images/Hero-BYD-Han.webp";

import { FaCar } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsCreditCard } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import Footer from '../../components/footer/Footer';

function Payment() {
  return (
    <div className='payments' id='scroll'>

      <div className="home-block-t">
        <div className='home-item'>
          <FaCar/>
          TO'LOV TURLARI
        </div>
        <div className="home-title">
          Keling, To'lov Turlari<br></br> <span>BIlan Tanishib Chiqaylik</span>
        </div>
        <div className="home-animation"></div>
      </div>

      <div className="container">

        <div className="payment-block">
          
          <div className="contact-menu">
            <div className="contact-icons"><BsCashStack className='c-icon' /></div>
            <div className="contact-item">Naqd</div>
            <div className="contact-text">
              Siz istagan har qanday elektromobilni naqd pul asosida xarid qiling!
            </div>
          </div>

          <div className="contact-menu">
            <div className="contact-icons"><FaMoneyBillTransfer className='c-icon' /></div>
            <div className="contact-item">Pul O'tkazish</div>
            <div className="contact-text">
              O'zingizga ma'qul bo'lgan har qanday bank orqali pul o'tkazib, mashina xarid qiling!
            </div>
          </div>

          <div className="contact-menu">
            <div className="contact-icons"><BsCreditCard className='c-icon' /></div>
            <div className="contact-item">Kredit</div>
            <div className="contact-text">
              Elektromobillarni qulay kredit asosida xarid qiling!
            </div>
          </div>

        </div>

        <div className="payment-main-block">

          <div className="payment-item">
            Moliyaviy kalkulyator
          </div>

          <div className="payment-menu">

            <div className="payment-menu-l">

              <form action="" className='payment-form'>
                <input  className='payment-input' type="text" placeholder='$ Narxi'/>
                <span className='payment-span'>
                  <input className='payment-input' type="text" placeholder='% Stavka'/>
                  <input className='payment-input' type="text" placeholder='Kredit muddati'/>
                </span>
                <input className='payment-input' type="text" placeholder="$ Oldindan to'lov"/>
                <button className='payment-button'>
                  Hozir Hisoblang
                  <FaArrowRightLong />
                </button>
              </form>

            </div>

            <div className="payment-menu-r">
              <img src={imagePay} alt="" />
            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Payment