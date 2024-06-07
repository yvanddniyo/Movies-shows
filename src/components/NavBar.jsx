import React, { useEffect, useState } from 'react'
import "../components/NavBar.css"

const NavBar = () => {
  const [show, setHandleShow] = useState(false)
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setHandleShow(true)
    }
    else {
      setHandleShow(false)
    }
  }

  useEffect(()=> {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])
  return ( 
    <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__content">
          <h1
          className='nav__logo'
          ><span>Y</span><span>.M</span>ovies</h1>
          <img
          className='nav__avatar'
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" alt="avatar" />
        </div>
    </div>
  )
}

export default NavBar