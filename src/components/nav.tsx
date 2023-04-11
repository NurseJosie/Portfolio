import { Link } from "react-router-dom";
import '../App.css'

function Nav() {
  return (
    <section >
        <nav className="py-10 md:flex md:justify-between">
          <h1 className='text-xl font-bold text-center mt-4 mb-10 text-gray-800 md:mb-0'>Josefin Persson | Portfolio</h1>
            <ul className='grid grid-cols-2 gap-5 m-5 max-w-sm md:flex'>
                <li><Link to="/" className='bg-gradient-to-b from-gray-800 to-gray-500 font-semibold text-white px-4 py-2 rounded-md ml-6 hover:text-xl'>Home</Link></li>
                <li><Link to="/about" className='bg-gradient-to-b from-gray-800 to-gray-500 font-semibold text-white px-4 py-2 rounded-md ml-6 hover:text-xl'>About</Link></li>
                <li><Link to="/work" className='bg-gradient-to-b from-gray-800 to-gray-500 font-semibold text-white px-4 py-2 rounded-md ml-6 hover:text-xl'>Work</Link></li>
                <li><Link to="/contact" className='bg-gradient-to-b from-gray-800 to-gray-500 font-semibold text-white px-4 py-2 rounded-md ml-6 hover:text-xl'>Contact</Link></li>
            </ul>
        </nav>


    </section>
  )
}

export default Nav