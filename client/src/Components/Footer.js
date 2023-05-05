import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Footer = () => {
  return (
    <div>
         <Navbar/>
        <section class="footer" id="footer">
        <div class="footer-box">
            <h2><span>Brown</span>Wood</h2>
            <p>BrownWood is making furniture for ages and assuring product Quality. We believe in Quality and Comfort!</p>
            <div class="social">
                <Link to="https://www.facebook.com/romanluhar/"><i class='bx bxl-facebook'></i></Link>
                <Link to="https://twitter.com/Roman_luhar/"><i class='bx bxl-twitter'></i></Link>
                <Link to="https://www.instagram.com/roman_luhar/"><i class='bx bxl-instagram'></i></Link>
            </div>
        </div>
        <div class="footer-box">
            <h3>Services</h3>
            <li><Link to="#">Product</Link></li>
            <li><Link to="#">Help & Support</Link></li>
            <li><Link to="#">Pricing</Link></li>
            <li><Link to="#">FAQ</Link></li>
        </div>
        <div class="footer-box">
            <h3>Product</h3>
            <li><Link to="#">Sofa's</Link></li>
            <li><Link to="#">Chair's</Link></li>
            <li><Link to="#">Living Room</Link></li>
            <li><Link to="#">Office</Link></li>
        </div>
        <div class="footer-box contact-info">
            <h3>Contact</h3>
            <span>Ahemdabad , Gujarat</span>
            <span>+91 8401341595</span>
            <span>brownwood01@gmail.com</span>
            
        </div>
    </section>
    <div class="copyright">
        <p>&#169; @BrownWood_2023. All Right Reserved.</p>
    </div>
    </div>
    
  )
}
