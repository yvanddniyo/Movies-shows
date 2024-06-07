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
          <img
          className='nav__logo'
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo"
          />
          <img
          className='nav__avatar'
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
        </div>
    </div>
  )
}

export default NavBar