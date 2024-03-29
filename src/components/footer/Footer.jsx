import React from 'react'
import "./Footer.css"
import footerLogo from "../images/logos.png"
import { NavLink } from 'react-router-dom';

import { LuPhone } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgMail } from "react-icons/cg";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer>

        <div className="footer-t">
            
            <div className="footer-block-t">

                
                <div className="container">
                    <div className="footer-l">

                        <div className="footer-logo">
                            <NavLink to={"/"}>
                                <img src={footerLogo} alt="" />
                            </NavLink>
                        </div>
                        <div className="footer-text">
                            Bizning manzil Toshkent shahar Sergeli tumani Index savdo majmuasida joylashgan
                        </div>
                        <div className="footer-logo-end">
                            <div className="footer-logos">
                                <LuPhone className='footer-ico' />
                                +998 91 062 07 70
                            </div>
                            <div className="footer-logos">
                                <HiOutlineLocationMarker className='footer-ico' />
                                Toshkent | Sergeli | Index
                            </div>
                            <div className="footer-logos">
                                <CgMail className='footer-ico' />
                                hlbmotorsindex@gmail.com
                            </div>
                        </div>

                    </div>
                </div>

                <iframe 
                    className='maps'
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d9170.36417443626!2d69.2298261160733!3d41.20251637914065!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEyJzA5LjgiTiA2OcKwMTQnMDMuMSJF!5e0!3m2!1suz!2s!4v1710412251825!5m2!1suz!2s" width="850" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>

            </div>
            
        </div>

        <div className="footer-b">
            <div className="container">
                <div className="footer-block-b">
                    <div className="footer-block-text-b">
                        © Mualliflik huquqi 2024 <span>HLB MOTORS</span>Barcha huquqlarni himoyalagan.
                    </div>
                    <div className="footer-links">
                        <NavLink to={"https://www.facebook.com/profile.php?id=61551063302690"} target='_blank'>
                            <FaFacebookF className='footer-links-end' />
                        </NavLink>
                        <NavLink to={"https://www.instagram.com/hlb_motors2023"} target='_blank'>
                            <FaInstagram className='footer-links-end' />
                        </NavLink>
                        <NavLink to={"https://t.me/hlbmotors2023"} target='_blank'>
                            <FaTelegram className='footer-links-end' target='_blank' />
                        </NavLink>
                        <NavLink to={"https://www.youtube.com/"} target='_blank'>
                            <FaYoutube className='footer-links-end' />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer