import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import '../App.css'

function ContactText() {

  return (
    <section>
         <h3 className='text-3xl py-5 mx-auto text-center'>Contact Information</h3>
        <p className='mx-auto text-center text-3xl py-2 text-teal-600 font-bold mb-5'>
        Get in touch!
        </p>


        <div className='flex flex-col justify-center gap-5'>
        <div className='flex flex-row items-center justify-center'>
        <AiFillLinkedin className='text-gray-700 text-3xl'/>
        <a href="https://www.linkedin.com/in/josefin94/" target='_blank' className='text-xl text-center hover:font-bold'>Linkedin - /josefin94</a> 
        </div>
        <div className='flex flex-row items-center justify-center'>
        <AiFillGithub className='text-gray-700 text-3xl'/>
        <a href="https://github.com/NurseJosie" target='_blank' className='text-xl text-center hover:font-bold'>GitHub - /NurseJosie</a> 
        </div>
        <div className='flex flex-row items-center justify-center'>
        <AiFillMail className='text-gray-700 text-3xl'/>
        <a href="mailto:josefinp94@gmail.com" target='_blank' className='text-xl text-center hover:font-bold'>Email - josefinp94@gmail.com</a> 
        </div>
        </div>


    </section>
  )
}

export default ContactText
