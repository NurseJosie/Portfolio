import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'
import '../App.css'

function ContactText() {

  return (
    <section>
        <div className='flex flex-col text-center mx-4 my-10'>
         <h3 className='text-4xl md:text-5xl py-2 font-italiana text-slate-950 my-4'>Contact Information</h3>

         <div className=' p-5 max-w-md m-auto bg-slate-50 mt-10'>
         <p className='text-3xl md:text-4xl py-2 font-italiana text-slate-950 mb-4 font-bold'>
        Get in touch!
        </p>


        <div className='flex flex-col justify-center gap-5'>
        <div className='flex flex-row items-center justify-center'>
        <AiFillLinkedin className='text-gray-700 text-3xl'/>
        <a href="https://www.linkedin.com/in/josefin94/" target='_blank' className='pl-2 py-2 font-playfair text-center hover:underline'>Linkedin - /josefin94</a> 
        </div>
        <div className='flex flex-row items-center justify-center'>
        <AiFillGithub className='text-gray-700 text-3xl'/>
        <a href="https://github.com/NurseJosie" target='_blank' className='pl-2 py-2 font-playfair text-center hover:underline'>GitHub - /NurseJosie</a> 
        </div>
        <div className='flex flex-row items-center justify-center'>
        <AiFillMail className='text-gray-700 text-3xl'/>
        <a href="mailto:josefinp94@gmail.com" target='_blank' className='pl-2 py-2 font-playfair text-center hover:underline'>Email - josefinp94@gmail.com</a> 
        </div>
        </div>
         </div>
    
</div>

    </section>
  )
}

export default ContactText
