import { useState } from 'react'
import './App.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'

function Nav() {
  const [count, setCount] = useState(0)

  return (
    <section>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className='text-xl font-bold'>Josefin Persson</h1>
            <ul className='flex items-center'>
                <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
                <li><a href="#" className='bg-gradient-to-r from-pink-700 to-pink-500 text-white px-4 py-2 rounded-md ml-8'>Hej</a></li>
                {/* <li><a href="#" className='bg-gradient-to-r from-pink-700 to-pink-500 text-white px-4 py-2 rounded-md ml-8'>Home</a></li> */}
                {/* <li><a href="#" className='bg-gradient-to-r from-green-700 to-green-500 text-white px-4 py-2 rounded-md ml-4'>About</a></li>
                <li><a href="#" className='bg-gradient-to-r from-blue-700 to-blue-500 text-white px-4 py-2 rounded-md ml-4'>Work</a></li>
                <li><a href="#" className='bg-gradient-to-r from-amber-700 to-amber-500 text-white px-4 py-2 rounded-md ml-4'>Contact</a></li> */}
            </ul>
        </nav>
    </section>
  )
}

export default Nav