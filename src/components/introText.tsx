import { Link } from 'react-router-dom'
import '../App.css'
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai'

function IntroText() {

  return (
    <section className="text-center py-5">
        <h2 className='text-5xl py-2  font-bold md:text-6xl'>Josefin Persson</h2>
        <h3 className='text-2xl py-2 font-bold md:text-3xl'>Software Developer</h3>
  
       
       <div className='mx-5 mt-10 flex flex-col md:flex-row justify-center gap-10'>

       <img src="public/profil-1-2023-square.jpg" alt="" className="self-center w-80 max-w-lg" ></img>
        
  

        <p className='bg-slate-100 max-w-lg text-md p-5 text-gray-900 md:text-xl'>Dedicated and enthusiastic Junior Full Stack Developer,
         I bring a unique combination of strong-willed determination and compassionate background in nursing to my pursuit of a career in software development.
          My eagerness to embrace new challenges, paired with my innate creativity and social aptitude, allows me to thrive in diverse team settings.
           As a former nurse specializing in the care of critically ill patients, I have honed my problem-solving skills and ability to adapt quickly to changing circumstances.
            Ready to leverage these invaluable experiences, I am excited to contribute to innovative projects and create meaningful, positive impacts in the world of technology.</p>
       </div>

       <div><Link to="/work" className='text-black bg-gradient-to-r  font-medium  text-center px-4 py-2 hover:underline'>See my work</Link></div>

       <div className='text-5xl flex justify-center gap-16 py-2 text-slate-300 mt-20'>
         <a href="https://www.linkedin.com/in/josefin94/" target='_blank' className='hover:text-6xl'><AiFillLinkedin/></a> 
         <a href="https://github.com/NurseJosie" target='_blank' className='hover:text-6xl'><AiFillGithub/></a> 
         <a href="mailto:josefinp94@gmail.com" target='_blank' className='hover:text-6xl'><AiFillMail/></a>
        </div>
      
    </section>
  )
}

export default IntroText
