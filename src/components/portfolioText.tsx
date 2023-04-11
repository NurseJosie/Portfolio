
import '../App.css'

function PortfolioText() {

  return (
    <section>
        <h3 className='text-3xl py-1'>Portfolio</h3>
        <p className='text-md py-2  leading-8 text-gray-800'>Lorem ipsum dolor, sit amet consectetur 
        adipisicing <span className='text-teal-500'>elit</span>. Voluptates nam commodi rem dolores
           inventore doloribus atque illum molestiae. Laboriosam placeat alias neque esse beatae sunt
            cumque doloribus aut corporis quaerat.</p>

<div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
<div className='basis-1/3 flex-1'>
<img src="src\assets\react.png" alt="" className="mx-auto rounded-full w-30 h-30 p-5 object-cover"></img>
</div>

<div className='basis-1/3 flex-1'>
<img src="src\assets\profile.jpg" alt="" className="mx-auto rounded-full w-30 h-30 p-5 object-cover"></img>
</div>

<div className='basis-1/3 flex-1'>
<img src="src\assets\profile.jpg" alt="" className="mx-auto rounded-full w-30 h-30 p-5 object-cover"></img>
</div>
</div> 

    </section>
  )
}

export default PortfolioText
