import {AiFillGithub, AiFillFileText, AiFillRocket} from 'react-icons/ai'
import '../App.css'

function PortfolioText() {

  return (
    <section>
       <h3 className='text-3xl py-1 mx-auto text-center mb-1'>My Portfolio</h3>
        <p className='mx-auto text-center text-md py-2 leading-8 text-gray-800 md:text-lg max-w-4xl'>
        This is a selection of my previous projects so far!
        </p>
<div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
<div className=' bg-white basis-1/3 flex-1 max-w-l shadow-xl p-5 rounded-xl md:p-10'>
<img src="public/tasty-tellus.png" alt="" className="mx-auto"></img>
<p className='mx-auto text-center font-bold  text-gray-800 text-xl'>
        Tasty Tellus
        </p>
        <p className='mx-auto text-center pt-2 text-gray-800'>
        Fullstack project with tools inculding<span className='text-teal-600 font-bold'> Vue3, Entity Framework & SQL-Database</span> 
        </p>
        <p className='mx-auto text-center text-md py-2 text-gray-800 '>
        This is the project that I am the most proud of. I built this meaningfull webpage to spread knowledge about Co2 emissions connected to the food we eat everyday.
        </p>
        <div className='flex flex-row justify-center gap-3'>
        <div className='flex flex-row items-center justify-center'>
        <AiFillGithub className='text-gray-700 text-3xl'/>
        <a href="https://github.com/NurseJosie/TastyTellusBackend" target='_blank' className='text-center hover:font-bold'>GitHub Repo- Backend</a> 
        </div>
        <div className='flex flex-row items-center justify-center'>
        <AiFillGithub className='text-gray-700 text-3xl'/>
        <a href="https://github.com/NurseJosie/TastyTellusFrontend" target='_blank' className='text-center hover:font-bold'>GitHub Repo- Frontend</a> 
        </div>
        </div>
        <div className='flex flex-row items-center justify-center'>
        <AiFillFileText className='text-gray-700 text-3xl'/>
        <a href="https://docs.google.com/document/d/1LF7lI6aYkdMgPpCgyCCC-2QDbkCPtCY4OnWd76K7als/edit?usp=sharing" target='_blank' className='text-center hover:font-bold'>Technical Documentation- in swedish</a> 
        </div>
</div>

<div className=' bg-white basis-1/3 flex-1 shadow-xl p-5 rounded-xl md:p-10'>
  <AiFillRocket className='mx-auto text-gray-700 text-9xl m-7'></AiFillRocket>
<p className='mx-auto text-center font-bold pb-10 text-gray-800 text-xl'>
        More projects from my time at Campus Mölndal!
        </p>
        <div className='flex flex-row items-center justify-center py-3'>
        <AiFillGithub className='text-gray-800 text-3xl'/>
        <a href="https://github.com/NurseJosie/poke-manager-react" target='_blank' className='text-center hover:font-bold'>Poké-Manager: Build your Pokémon Team - React</a> 
        </div>

        <div className='flex flex-row items-center justify-center py-3'>
        <AiFillGithub className='text-gray-800 text-3xl'/>
        <a href="https://github.com/NurseJosie/XmasWish" target='_blank' className='text-center hover:font-bold'>Xmas Wish: Keep track of your chistmas gifts - Relational Database, Entity Framework</a> 
        </div>

        <div className='flex flex-row items-center justify-center py-3'>
        <AiFillGithub className='text-gray-800 text-3xl'/>
        <a href="https://github.com/NurseJosie/Genealogi_OOA_JosefinPersson" target='_blank' className='text-center hover:font-bold'>The Family Tree of John Snow - Relational Database, Entity Framework</a> 
        </div>
     
        
</div>


</div> 

    </section>
  )
}

export default PortfolioText
