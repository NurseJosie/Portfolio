import { useState } from 'react'
import './App.css'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

function SectionOne() {
  const [count, setCount] = useState(0)

  return (
    <section className="text-center p-10">
        <h2 className='text-5xl py-2 text-purple-700 font-medium md:text-6xl'>Josefin Persson</h2>
        <h3 className='text-2xl py-2 font-medium md:text-3xl'>Software Developer</h3>
        <p className='text-md py-5  leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates nam commodi rem dolores
           inventore doloribus atque illum molestiae. Laboriosam placeat alias neque esse beatae sunt
            cumque doloribus aut corporis quaerat.</p>
        <div className='text-5xl flex justify-center gap-16 py-2 text-gray-600'>
          <AiFillLinkedin/>
          <AiFillGithub/>
        </div>
        <div className='mx-auto bg-gradient-to-b from-blue-300 rounded-full w-60 h-60 mt-20 md:w-100 md:h-100'>
        <img src="src\assets\profile.jpg" alt="" className="relative mx-auto rounded-full w-50 h-50 p-5 md:w-90 md:h-90"></img>
        </div>
    </section>
  )
}

export default SectionOne
