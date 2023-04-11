import { useState } from 'react'
import './App.css'
import Header from './header'
import Nav from './nav'
import SectionOne from './section-one'
import SectionTwo from './section-two'
import SectionThree from './section-three'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<main className='bg-white px-10 md:px-20 lg:px-40'>
<section className='min-h-screen '>
<Nav></Nav>
<SectionOne></SectionOne>
<SectionTwo></SectionTwo>
<SectionThree></SectionThree>
</section>
</main>



    </div>
  )
}

export default App
