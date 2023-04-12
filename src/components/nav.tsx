import { Link } from "react-router-dom";
import '../App.css'

function Nav() {
  return (
    <section >
        <nav className="py-10 md:flex md:justify-between">
          <h1 className='text-xl font-bold text-center mt-4 mb-10 text-gray-800 md:mb-0'>Josefin Persson | Portfolio</h1>
            <ul className='grid grid-cols-2 gap-5 m-5 max-w-sm md:flex'>
                <li><Link to="/" className='text-white bg-gradient-to-r from-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-center mr-2 mb-2 px-4 py-2  ml-6'>Home</Link></li>
                <li><Link to="/about" className='text-white bg-gradient-to-r  from-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-center mr-2 mb-2 px-4 py-2  ml-6'>About</Link></li>
                <li><Link to="/work" className='text-white bg-gradient-to-r  from-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-center mr-2 mb-2 px-4 py-2  ml-6'>Work</Link></li>
                <li><Link to="/contact" className='text-white bg-gradient-to-r  from-purple-500 to-purple-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg text-center mr-2 mb-2 px-4 py-2  ml-6'>Contact</Link></li>
            </ul>
        </nav>


    </section>
  )
}

export default Nav