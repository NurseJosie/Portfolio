import '../App.css'

function ContactText() {

  return (
    <section>
        <h3 className='text-3xl py-1'>Contact Me</h3>
        <p className='text-md py-2  leading-8 text-gray-800'>Lorem ipsum dolor, sit amet consectetur 
        adipisicing <span className='text-teal-500'>elit</span>. Voluptates nam commodi rem dolores
           inventore doloribus atque illum molestiae. Laboriosam placeat alias neque esse beatae sunt
            cumque doloribus aut corporis quaerat.</p>

        <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <img src="src\assets\profile.jpg" alt="" className="relative mx-auto rounded-full w-30 h-30 p-5"></img>
            <h3 className="text.lg font-medium pt-8 pb-2">Frontend</h3>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consequatur officiis explicabo
                 necessitatibus dicta adipisci illo exercitationem
                 corrupti neque aut aliquid distinctio, quod enim tempore voluptates
                  consequuntur rerum dolores minus?</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className="text-gray-800 py-1">hej</p>
            <p className="text-gray-800 py-1">hej</p>
            <p className="text-gray-800 py-1">hej</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <img src="src\assets\profile.jpg" alt="" className="relative mx-auto rounded-full w-30 h-30 p-5"></img>
            <h3 className="text.lg font-medium pt-8 pb-2">Backend</h3>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consequatur officiis explicabo
                 necessitatibus dicta adipisci illo exercitationem
                 corrupti neque aut aliquid distinctio, quod enim tempore voluptates
                  consequuntur rerum dolores minus?</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className="text-gray-800 py-1">hej</p>
            <p className="text-gray-800 py-1">hej</p>
            <p className="text-gray-800 py-1">hej</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <img src="src\assets\profile.jpg" alt="" className="relative mx-auto rounded-full w-30 h-30 p-5"></img>
            <h3 className="text.lg font-medium pt-8 pb-2">More</h3>
            <p className='py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et consequatur officiis explicabo
                 necessitatibus dicta adipisci illo exercitationem
                 corrupti neque aut aliquid distinctio, quod enim tempore voluptates
                  consequuntur rerum dolores minus?</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className="text-gray-800 py-1">hej</p>
            <p className="text-gray-800 py-1">hej</p>
            <p className="text-gray-800 py-1">hej</p>
            </div>
        </div>

    </section>
  )
}

export default ContactText
