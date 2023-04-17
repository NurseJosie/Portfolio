import { Link } from 'react-router-dom'
import '../App.css'
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai'

function IntroText() {

  return (
    <section className="text-center py-5">

<div className='flex justify-center mt-5'>
<img src="public/profil-3-2023-square.jpg" alt="" className=" w-60 max-w-lg rounded-full mt-5 mb-5 md:mb-10" ></img>
</div>
      

        <h2 className='text-6xl py-2 font-italiana text-slate-950'>Josefin Persson</h2>
        <h3 className='text-4xl py-2 font-italiana text-slate-950'>Software Developer</h3>
       
       <div className='my-10 max-w-md flex flex-col md:m-auto mx-4'>
       <p className='text-xl py-3 font-playfair text-slate-950'>Dedicated and enthusiastic Junior Full Stack Developer</p>
        <p className='text-xl py-3 font-playfair text-slate-950'>Unique combination of strong-willed determination and compassionate background in nursing</p>
        <p className='text-xl py-3 font-playfair text-slate-950'>Eagerness to embrace new challenges, paired with innate creativity and social aptitude, allows me to thrive in diverse team settings</p>

        {/* <p >Dedicated and enthusiastic Junior Full Stack Developer,
         I bring a unique combination of strong-willed determination and compassionate background in nursing to my pursuit of a career in software development.
          My eagerness to embrace new challenges, paired with my innate creativity and social aptitude, allows me to thrive in diverse team settings.
           As a former nurse specializing in the care of critically ill patients, I have honed my problem-solving skills and ability to adapt quickly to changing circumstances.
            Ready to leverage these invaluable experiences, I am excited to contribute to innovative projects and create meaningful, positive impacts in the world of technology.</p> */}
       </div>

       <button className='p-5 rounded-md mt-10 bg-gradient-to-tl from-teal-200 via-red-200 to-fuchsia-200'><Link to="/work" className=' font-italiana text-slate-950 text-4xl md:text-5xl text-center hover:underline'>See my work</Link></button>

       <div className='text-5xl flex justify-center gap-16 py-2 text-slate-500 mt-20'>
         <a href="https://www.linkedin.com/in/josefin94/" target='_blank' className='hover:text-6xl'><AiFillLinkedin/></a> 
         <a href="https://github.com/NurseJosie" target='_blank' className='hover:text-6xl'><AiFillGithub/></a> 
         <a href="mailto:josefinp94@gmail.com" target='_blank' className='hover:text-6xl'><AiFillMail/></a>
        </div>
      
    </section>
  )
}

export default IntroText
