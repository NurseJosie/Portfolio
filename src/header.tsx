import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <div className="Header">
              <img src="src\assets\profile.jpg" className="profile-img"></img>
      <div className="header-info container"><h1>Josefin Persson</h1><h2>Software Developer</h2></div>

    </div>
  )
}

export default Header
