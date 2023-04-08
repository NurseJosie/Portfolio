import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function SectionOne() {
  const [count, setCount] = useState(0)

  return (
    <div className="SectionOne">
      <div className="section-one-container container"><h3>Updates...</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur,
         praesentium vero. Nihil impedit cupiditate vitae dolore explicabo facere,
          adipisci tempore nisi eos doloribus quod animi placeat eligendi architecto corrupti qui!</p></div>
    </div>
  )
}

export default SectionOne
