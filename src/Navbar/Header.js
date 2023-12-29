import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (

    <>
    <nav className="navBar">
      <div className='logo'>Logo</div>
      <ul className='navLink'></ul>
      <Link to="/" className="home">
        <li></li>
      </Link>
      <Link to="/Explore" className="explore">
        <li>Explore<i className='bx bx-chevron-down'></i></li>
      </Link>
      <Link to="/LuxuryGetWays" className="luxurygetaways">
        <li>LUXURY GETAWAYS</li>
      </Link>
      <Link to="/ListYourProperty" className="listyourproperty">
        <li>List Your Property</li>
      </Link>
      <Link to="/Contact" className="contact">
        <li><i className='bx bx-phone-call'>+91 9167928471</i></li>
      </Link>
      <Link to="/Login" className="login">
      <li ><i className='bx bxs-user-circle' style={{position:"relative", fontSize:"40px", top:"10px"}}></i>Login</li>
     </Link>
     
    </nav>
    </>
    
  )
}


export default Header
