import '../App.css'
import {AiFillLinkedin, AiFillGithub, AiFillMail} from 'react-icons/ai'

function IntroText() {

  return (
    <section className="text-center p-10">
        <h2 className='text-5xl py-2 text-teal-600 font-bold md:text-6xl'>Josefin Persson</h2>
        <h3 className='text-2xl py-2 font-bold text-gray-800 md:text-3xl'>Software Developer</h3>
  
       
       <div className='md:grid grid-cols-3 gap-5'>

        
        <img src="public/profil-1-2023-square.jpg" alt="" className="m-auto rounded-3xl p-5 w-30"></img>
  

        <p className='text-md py-5 leading-8 text-gray-900 md:text-xl max-w-3xl m-auto col-span-2'>Dedicated and enthusiastic Junior Full Stack Developer,
         I bring a unique combination of strong-willed determination and compassionate background in nursing to my pursuit of a career in software development.
          My eagerness to embrace new challenges, paired with my innate creativity and social aptitude, allows me to thrive in diverse team settings.
           As a former nurse specializing in the care of critically ill patients, I have honed my problem-solving skills and ability to adapt quickly to changing circumstances.
            Ready to leverage these invaluable experiences, I am excited to contribute to innovative projects and create meaningful, positive impacts in the world of technology.</p>
       </div>

       <div className='text-5xl flex justify-center gap-16 py-2 text-gray-700 mt-10'>
         <a href="https://www.linkedin.com/in/josefin94/" target='_blank' className='hover:text-6xl'><AiFillLinkedin/></a> 
         <a href="https://github.com/NurseJosie" target='_blank' className='hover:text-6xl'><AiFillGithub/></a> 
         <a href="mailto:josefinp94@gmail.com" target='_blank' className='hover:text-6xl'><AiFillMail/></a>
        </div>
      
    </section>
  )
}

export default IntroText
