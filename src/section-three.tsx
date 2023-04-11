import { useState } from 'react'
import './App.css'

function SectionThree() {
  const [count, setCount] = useState(0)

  return (
    <section>
        <h3 className='text-3xl py-1'>Protfolio</h3>
        <p className='text-md py-2  leading-8 text-gray-800'>Lorem ipsum dolor, sit amet consectetur 
        adipisicing <span className='text-teal-500'>elit</span>. Voluptates nam commodi rem dolores
           inventore doloribus atque illum molestiae. Laboriosam placeat alias neque esse beatae sunt
            cumque doloribus aut corporis quaerat.</p>

<div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
<div>
<img src="src\assets\profile.jpg" alt="" className="relative mx-auto rounded-full w-30 h-30 p-5"></img>
</div>

<div>
<img src="src\assets\profile.jpg" alt="" className="relative mx-auto rounded-full w-30 h-30 p-5"></img>
</div>

<div>
<img src="src\assets\profile.jpg" alt="" className="relative mx-auto rounded-full w-30 h-30 p-5"></img>
</div>
</div> 

    </section>
  )
}

export default SectionThree
