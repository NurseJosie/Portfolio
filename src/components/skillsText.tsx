import '../App.css'

function SkillsText() {

  return ( 
    <section>
      <div className='flex flex-col text-center mx-4 my-10'>
      <h3 className='text-4xl md:text-5xl py-2 font-italiana text-slate-950 my-4'>My skills as a Fullstack Developer</h3>
        <p className=' text-xl py-2 font-playfair text-slate-950 max-w-lg m-auto'>
        As a versatile Full Stack Developer, I have honed my skills through a combination of formal education,
         hands-on internship experience, and a genuine passion for coding projects in my spare time.
        </p>
        {/* <p className='text-xl py-2 font-playfair text-slate-950 max-w-lg m-auto mb-4'>
        My expertise spans across various programming languages, frameworks, and tools, enabling me to seamlessly design, develop,
           and maintain intricate web applications. With a strong foundation in both frontend and backend development,
            I am well-equipped to create intuitive user interfaces and robust server-side logic. My unique blend of academic, professional,
             and personal experiences has fostered my ability to adapt and thrive in dynamic environments, making me a valuable asset to any team.
        </p> */}
      </div>

        <div className='md:flex  bg-slate-50'>

            <div className='m-5 flex flex-col text-center bg-white p-3 md:p-5'>
            <h3 className="text-2xl font-bold font-italiana pb-2">Frontend</h3>
       
              <p className="text-slate-950  text-xl font-helvetica">React</p>
            <p className="text-slate-950  text-xl font-helvetica">Vue</p>
            <p className="text-slate-950  text-xl  font-helvetica">Tailwind</p>
  
              <p className='py-2 font-helvetica'>With proficiency in frontend tools and a keen understanding of accessibility,
             I craft responsive web pages that prioritize user experience. Utilizing HTML, CSS, JS, TS
              and frameworks like React, I create visually appealing and interactive interfaces that cater to diverse user needs, 
              ensuring seamless navigation across devices.</p>
            </div>

            <div className='m-5 flex flex-col justify-center text-center bg-white p-3 md:p-5'>
            <h3 className="text-2xl font-bold font-italiana pb-2">Backend</h3>
             
            <p className="text-slate-950  text-xl font-helvetica">C# .NET</p>
            <p className="text-slate-950  text-xl font-helvetica">SQL-DB</p>
            <p className="text-slate-950  text-xl font-helvetica">MongoDB</p>
        
            <p className='py-2 font-helvetica'>
              By integrating these skills with my frontend expertise, I deliver comprehensive web applications
               that provide seamless user experiences, efficient data management, and secure connections,
                ensuring a well-rounded and high-performing product.</p>
            </div>

            <div className='m-5 flex flex-col justify-center text-center bg-white p-3 md:p-5'>
            <h3 className="text-2xl font-bold font-italiana pb-2">Agile Methods</h3>
          
            <p className="text-slate-950  text-xl font-helvetica">Agile Scrum Methodology</p>
            <p className="text-slate-950  text-xl font-helvetica">Closed-Loop Communication</p>
            <p className="text-slate-950  text-xl font-helvetica">Teamwork</p>
     
            <p className='py-2 font-helvetica'>I employ Agile Scrum Methodology
            to foster efficient collaboration and adaptability within the team.
             I practice closed-loop communication, ensuring clear understanding and accurate execution of tasks.
              My social maturity and caring personality further enhance team dynamics, creating a supportive and productive 
              work environment that drives project success.</p>
            </div>
        </div>

    </section>
  )
}

export default SkillsText
