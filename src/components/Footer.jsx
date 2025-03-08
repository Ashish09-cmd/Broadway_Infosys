import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaViber } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <footer className='bg-dark py-5 text-white border-bottom'>
      <div className="container">
        <div className="row">
        <div className="col-lg-3">
          <h2>Company</h2>
          <ul className='py-3'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Students' Testimonials</li>
            <li>Success Gallery</li>
            <li>Photo Gallery</li>
            <li>Our Services</li>
            <li>Our Partners</li>
            <li>Become an Instructor</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h2>For Students</h2>
          <ul className='py-3'>
            <li>Payment Option</li>
            <li>Placement Partner</li>
            <li>Enroll Now</li>
            <li>Career</li>
            <li>Offers</li>
            <li>Upload Your Resume</li>
            <li>Internship and Placement</li>
            <li>Scholarship</li>
            <li>Certificate Verification</li>
            <li>Corporate Training</li>
          </ul>
        </div>
        <div className="col-lg-3">
          <h2>Info</h2>
          <ul className='py-3'>
            <li>Notices</li>
            <li>Events</li>
            <li>News & Media Coverage</li>
            <li>Help & FAQ</li>
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
          </ul>
          <h3>Newsletter Sign Up</h3>
          <button className='btn skyblue fw-bold mt-2 text-white'>Subscribe for Updates & Offers!</button>
        </div>
        <div className="col-lg-3">
          <h2>Contact Us</h2>
          <ul className='py-3'>
            <li className='fw-bold'>Broadway Infosys Pvt. Ltd.</li>
            <li>Shree Ganesh Marg, Subidhanagar, Tinkune, Kathmandu 44600, Nepal</li> 
          </ul>
          <ul>
            <li className='fw-bold'>Telephone Contact</li>
            <li>+977-1-4111849 / 4117578 / 4111583 / 5912405</li>
            <li>+977-9841002000 (WhatsApp)</li>
            <li>+977-9841002000 (Viber)</li>
            <li>+977-9841002000</li>
          </ul>
          <ul className='py-3'>
            <li className='fw-bold'>Email Address</li>
            <li>info@broadwayinfosys.com</li>
            <li> hr@broadwayinfosys.com </li>
            <li>support@broadwayinfosys.com  </li>
            <li>inquiry@broadwayinfosys.com</li>
          </ul>
          <h4 >Follow Us On</h4>
          <ul className='d-flex fm gap-2'>
            <li className='f-icons'><FaFacebookF /></li>
            <li className='f-icons'><FaInstagram /></li>
            <li className='f-icons'><FaTelegram /></li>
            <li className='f-icons'><FaLinkedinIn /></li>
            <li className='f-icons'><FaWhatsapp /></li>
            <li className='f-icons'><FaYoutube /></li>
            <li className='f-icons'><FaViber /></li>
            <li className='f-icons'><FaTiktok /></li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
    <section className='bg-dark text-white py-3'>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 ">
          Copyright © 2008 - 2025. Broadway Infosys Pvt. Ltd. or its affiliate(s). All rights reserved.
          </div>
          <div className="col-lg-5">
            <h5>We Accept:</h5>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Footer