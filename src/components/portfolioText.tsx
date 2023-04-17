import {AiFillGithub, AiFillFileText, AiFillRocket} from 'react-icons/ai'
import '../App.css'

function PortfolioText() {

  return (
    <section>
       <div className='flex flex-col text-center mx-4 my-10'>
       <h3 className='text-4xl md:text-5xl py-2 font-italiana text-slate-950 my-4'>My Portfolio</h3>
        <p className=' text-xl py-2 font-playfair text-slate-950 max-w-lg m-auto'>
        This is a selection of my previous projects so far!
        </p>
        </div>

<div className='md:flex md:justify-center gap-10 mb-20 bg-slate-50'>

<div className='my-5 flex flex-col text-center bg-white p-3 md:p-5 max-w-xl'>

<img src="public/tasty-tellus.png" alt="" className="mx-auto rounded-md mb-1"></img>
<h4 className='text-2xl font-bold font-italiana pb-2'> 
        Tasty Tellus
        </h4>
        <p className='pt-4 font-playfair'>
        Fullstack project with tools inculdingVue3, Entity Framework & SQL-Database
        </p>
        <p className='pb-4 font-playfair'>
        This is the project that I am the most proud of. I built this meaningfull webpage to spread knowledge about Co2 emissions connected to the food we eat everyday.
        </p>
        <div className='flex flex-row justify-center gap-3'>
        <div className='flex flex-row items-center justify-center'>
        <AiFillGithub className='text-gray-700 text-3xl'/>
        <a href="https://github.com/NurseJosie/TastyTellusBackend" target='_blank' className='font-playfair text-center hover:underline'>GitHub Repo- Backend</a> 
        </div>
        <div className='flex flex-row items-center justify-center'>
        <AiFillGithub className='text-gray-700 text-3xl'/>
        <a href="https://github.com/NurseJosie/TastyTellusFrontend" target='_blank' className='font-playfair text-center hover:underline'>GitHub Repo- Frontend</a> 
        </div>
        </div>
        <div className='flex flex-row items-center justify-center'>
        <AiFillFileText className='text-gray-700 text-3xl'/>
        <a href="https://docs.google.com/document/d/1LF7lI6aYkdMgPpCgyCCC-2QDbkCPtCY4OnWd76K7als/edit?usp=sharing" target='_blank' className='font-playfair text-center hover:underline'>Technical Documentation- in swedish</a> 
        </div>
</div>

<div className='my-5 flex flex-col text-center bg-white p-3 md:p-5 max-w-xl'>

  <AiFillRocket className='mx-auto text-gray-700 text-9xl md:mt-20'></AiFillRocket>
<h4 className='text-2xl font-bold font-italiana pb-2'>
        More projects from my time at Campus Mölndal!
        </h4>
        <div className='flex flex-col mt-10'>
        <AiFillGithub className='text-slate-950 text-3xl m-auto'/>
        <a href="https://github.com/NurseJosie/poke-manager-react" target='_blank' className='py-2 font-playfair text-center hover:underline'>Poké-Manager: Build your Pokémon Team - React</a> 
        <a href="https://github.com/NurseJosie/XmasWish" target='_blank' className='py-2 font-playfair text-center hover:underline'>Xmas Wish: Keep track of your chistmas gifts - Relational Database, Entity Framework</a> 
        <a href="https://github.com/NurseJosie/Genealogi_OOA_JosefinPersson" target='_blank' className='py-2 font-playfair text-center hover:underline'>The Family Tree of John Snow - Relational Database, Entity Framework</a> 
   
        </div>
        
</div>


</div> 

    </section>
  )
}

export default PortfolioText
