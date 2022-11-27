import React , {useState}from 'react'
import './navbar.css'
import {SiYourtraveldottv} from 'react-icons/si'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'



const Navbar = () => {

  const [active, setActive] = useState('navbar')
  //function to toogle navbar

  const showNav = () =>{
    setActive('navbar activeNavbar')
   }
 
  const RemoveNavbar = () =>{
   setActive('navbar')
  }
  return (
    <section className = 'navBarSection'>
      <header className="header inline-flex">
      <div className="logoDiv">
        <a href="#" className="logo flex">
        <h1><SiYourtraveldottv className="icon"/>Travel</h1>
        </a>
      </div>

      <div className= {active}>
        <ul className="navLists ">
          <li className="navitem">
            <a href="#" className="navLink">Home</a>
          </li>

          <li className="navitem">
            <a href="#" className="navLink">Packages</a>
          </li>

          <li className="navitem">
            <a href="#" className="navLink">Shop</a>
          </li>

          <li className="navitem">
            <a href="#" className="navLink">About</a>
          </li>

          <li className="navitem">
            <a href="#" className="navLink">Pages</a>
          </li>

          <li className="navitem">
            <a href="#" className="navLink">News</a>
          </li>

          <li className="navitem">
            <a href="#" className="navLink">Contact</a>
          </li>

          <button className='btn'>
            <a href = "#"> BOOK NOW</a>
          </button>

        </ul>

        <div onClick={RemoveNavbar}
         className="closeNavbar">
          <AiFillCloseCircle className = "icon"/>
        </div>
      </div>

      <div onClick={showNav}
       className="toogleNavbar">
        <TbGridDots className = "icon"/>
      </div>

      </header>
    </section>
  )
}

export default Navbar
