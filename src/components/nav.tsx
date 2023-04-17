import { Link } from "react-router-dom";
import '../App.css'

function Nav() {
  return (
    <section >
        <nav className="bg-slate-100 md:flex md:justify-between p-2">
          <h1 className='md:ml-5 font-italiana text-slate-900 text-2xl text-center hover:underline'><Link to="/">Josefin Persson</Link></h1>
            <ul className='flex justify-'>
                <li><Link to="/about" className='mr-5 font-italiana text-slate-900 text-lg text-center  hover:underline'>My skills</Link></li>
                <li><Link to="/work" className='mr-5 font-italiana text-slate-900 text-xl text-center hover:underline'>My work</Link></li>
                <li ><Link to="/contact" className='md:mr-5 font-italiana text-slate-900 text-xl text-center hover:underline'>Contact me</Link></li>
            </ul>
        </nav>


    </section>
  )
}

export default Nav