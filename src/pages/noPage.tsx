import '../App.css'
import { Link } from "react-router-dom";


function About() {

  return (
    <section className='text-center'>
   <h1 className='text-xl font-bold my-5'>This page does not exist!</h1>
   <Link to="/" className='text-lg border-solid border-2 border-slate-800 p-1 shadow-md rounded-md hover:text-xl'>Return to HOME</Link>
    </section>
  )
}

export default About