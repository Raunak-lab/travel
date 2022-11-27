import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../Assets/video(2).mp4'
import {FiSend} from 'react-icons/fi'
import{SiYourtraveldottv} from 'react-icons/si'
import {AiOutlineTwitter} from 'react-icons/ai'
import{AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import{FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
      <video src={video2}muted autoPlay loop type = "video/mp4"></video>

      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos= 'fade-up'className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address' />
            <button data-aos= 'fade-up' className='btn flex' type='submit'>
             SEND  <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'><SiYourtraveldottv className = 'icon'/>Travel.</a>
            </div>

            <div data-aos= 'fade-up' className="footerParagraph">
            Originally from Latin, Lorem ipsum has no intelligible meaning. It is simply a display of letters to be viewed as a sample with given graphical elements in a file. "Lipsum" (a portmanteau of lorem and ipsum) generators are commonly used to form generic text in a file.

            </div>
            <div data-aos= 'fade-up' className="footerSocials flex">
              <AiOutlineTwitter className = 'icon'/>
              <AiFillYoutube className = 'icon'/>
              <AiFillInstagram className = 'icon'/>
              <FaTripadvisor className = 'icon'/>
            </div>
          </div>
          <div data-aos= 'fade-up'
          data-aos-duration = "3000"
           className="footerLinks grid">
            {/* first group */}
            <div className="linkGroup"><span className="groupTitle">OUR AGENCY</span>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              services
            </li>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              Insurance 
            </li>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              Agency
            </li>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              Tourism
            </li>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              Payment
            </li>


            </div>
            {/* second group */}
            <div data-aos= 'fade-up'
            data-aos-duration = "4000"
            className="linkGroup"><span className="groupTitle">PARTNERS</span>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              Bookings
            </li>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              Rentcars
            </li>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              Trivago
            </li>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              TripAdvisor
            </li>

            </div>

            {/*third group */}
            <div data-aos= 'fade-up'
            data-aos-duration = "5000"
            className="linkGroup"><span className="groupTitle">LAST MINUTE</span>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              London
            </li>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              California 
            </li>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              Indonesia
            </li>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              Europe
            </li>
            <li className='footerList flex'>
              <FiChevronRight className = 'icon'/>
              Oceania
            </li>


            </div>




          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
