import { Link } from "react-router-dom";
import '../App.css'

function Nav() {
  return (
    <section >
        <nav className="bg-slate-50 md:flex md:justify-between p-3">
          <h1 className='md:ml-5 font-italiana text-slate-950 text-3xl text-center hover:underline'><Link to="/">Josefin Persson</Link></h1>
            <ul className='flex justify-center'>
                <li><Link to="/about" className='mr-5 md:mr-20 font-italiana text-slate-950 text-xl text-center hover:underline'>My skills</Link></li>
                <li><Link to="/work" className='mr-5 md:mr-20 font-italiana text-slate-950 text-xl text-center hover:underline'>My work</Link></li>
                <li ><Link to="/contact" className='mr-5 md:mr-20 font-italiana text-slate-950 text-xl text-center hover:underline'>Contact me</Link></li>
            </ul>
        </nav>


    </section>
  )
}

export default Nav