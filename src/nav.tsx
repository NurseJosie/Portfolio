import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Nav() {
  const [count, setCount] = useState(0)

  return (
    <div className="Nav">
      <div className="nav-container container">
        <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Work</a></li>
                <li><a>Contact</a></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav