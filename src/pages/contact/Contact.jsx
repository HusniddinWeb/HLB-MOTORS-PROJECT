import React from 'react'
import "./Contact.css"
import { NavLink } from 'react-router-dom'

import conImg from "../../components/images/contact/01.jpg"

import { FaAnglesRight } from "react-icons/fa6";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { LuAlarmClock } from "react-icons/lu";
import { FaRegPaperPlane } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { RiLinkedinFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";


function Contact() {
  return (
    <div className='contacts'>
        
        <div className="main-block contact">
            <h1 className='brend-title brend-contact'>Aloqa</h1>
            <div className="nav-brend">
            <NavLink className="brent-icons hov" to={"/"} >Asosiy</NavLink>
            <FaAnglesRight />
            <h4>Aloqa</h4>
            </div>
        </div>

        <div className="container">

            <div className="contact-block">

                <div className="contact-menu">
                    <div className="contact-icons"><FaMapMarkedAlt className='c-icon' /></div>
                    <div className="contact-item">Ofis manzili</div>
                    <div className="contact-text">Toshkent | Sergeli | Index</div>
                </div>

                <div className="contact-menu">
                    <div className="contact-icons"><BiPhoneCall className='c-icon' /></div>
                    <div className="contact-item">Qo'ng'iroq qiling</div>
                    <div className="contact-text">+998 91 062 07 70</div>
                </div>

                <div className="contact-menu">
                    <div className="contact-icons"><PiEnvelopeSimple className='c-icon' /></div>
                    <div className="contact-item">Elektron pochta</div>
                    <div className="contact-text">hlbmotorsindex@gmail.com</div>
                </div>

                <div className="contact-menu">
                    <div className="contact-icons"><LuAlarmClock className='c-icon' /></div>
                    <div className="contact-item">Ochiq vaqt</div>
                    <div className="contact-text">Dushanba - Shanba<br></br>(09:00 - 20:00)</div>
                </div>

            </div>

            <div className="Contact-Us">

                <div className="Contact-Us-img">
                    <img src={conImg} alt="" />
                </div>

                <div className="Contact-Us-block">
                    <div className="Contact-Us-item">Aloqa qiling</div>
                    <div className="Contact-Us-text">
                        Taklif va mulohazalar bo'lsa bizga yozing biz buni etborsiz qoldirmaymiz va siz bilan bog'lanamiz.
                    </div>
                    <form action="" className='contact-form'>
                        <span className='contact-span'>
                            <input type="name" placeholder='Ismingiz' required/>
                            <input type="email" placeholder='Elektron manzilingiz' required/>
                        </span>
                        <input type="text" placeholder='Sizning mavzuingiz' required/>
                        <textarea name="message" id="" cols="30" rows="5" placeholder='Xabaringizni yozing'></textarea>
                        <button className='contact-button'>Xabar yuborish <FaRegPaperPlane /></button>
                    </form>
                </div>

            </div>

        </div>

        <iframe className='contact-map' src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d9170.36417443626!2d69.2298261160733!3d41.20251637914065!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEyJzA5LjgiTiA2OcKwMTQnMDMuMSJF!5e0!3m2!1suz!2s!4v1710412251825!5m2!1suz!2s" width="800" height="500"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div className="footer-b">
            <div className="container">
                <div className="footer-block-b">
                    <div className="footer-block-text-b">
                        © Mualliflik huquqi 2024 <span>HLB MOTORS</span>Barcha huquqlar himoyalangan.
                    </div>
                    <div className="footer-links">
                        <NavLink to={"/"}>
                            <FaFacebookF className='footer-links-end' />
                        </NavLink>
                        <NavLink to={"/"}>
                            <FaTwitter className='footer-links-end' />
                        </NavLink>
                        <NavLink to={"/"}>
                            <RiLinkedinFill className='footer-links-end' />
                        </NavLink>
                        <NavLink to={"/"}>
                            <FaYoutube className='footer-links-end' />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact