import '../App.css'

function SkillsText() {

  return (
    <section>
        <h3 className='text-3xl mt-5 font-bold mx-auto text-center mb-2'>My skills as a Fullstack Developer</h3>
        <p className='mx-auto text-center text-md py-2 md:text-lg max-w-4xl'>
        As a versatile Full Stack Developer, I have honed my skills through a combination of formal education,
         hands-on internship experience, and a genuine passion for coding projects in my spare time.
         
        </p>
        <p className='mx-auto text-center text-md py-2 md:text-lg max-w-4xl'>
        My expertise spans across various programming languages, frameworks, and tools, enabling me to seamlessly design, develop,
           and maintain intricate web applications. With a strong foundation in both frontend and backend development,
            I am well-equipped to create intuitive user interfaces and robust server-side logic. My unique blend of academic, professional,
             and personal experiences has fostered my ability to adapt and thrive in dynamic environments, making me a valuable asset to any team.
        </p>

        <div className='lg:flex gap-10 mx-5'>
            <div className='mb-10 bg-slate-100 text-center shadow-xl p-5 rounded-xl md:p-10'>
            <h3 className="text-lg font-bold pb-2">Frontend</h3>
            <p className='py-2'>With proficiency in frontend tools and a keen understanding of accessibility,
             I craft responsive web pages that prioritize user experience. Utilizing HTML, CSS, JS, TS
              and frameworks like React, I create visually appealing and interactive interfaces that cater to diverse user needs, 
              ensuring seamless navigation across devices.</p>
            <h4 className='py-2 text-slate-900 text-lg font-bold'>Tools including:</h4>
            <p className="text-slate-900 py-1">React</p>
            <p className="text-slate-900 py-1">Vue</p>
            <p className="text-slate-900 py-1">Tailwind</p>
            </div>

            <div className='mb-10 bg-slate-100 text-center shadow-xl p-10 rounded-xl'>
            <h3 className="text-lg font-bold pb-2">Backend</h3>
            <p className='py-2'>As a Full Stack Developer, I employ backend technologies such as .NET, Entity Framework,
             and both relational and non-relational databases to create robust and scalable server-side solutions.
              By integrating these skills with my frontend expertise, I deliver comprehensive web applications
               that provide seamless user experiences, efficient data management, and secure connections,
                ensuring a well-rounded and high-performing product.</p>
            <h4 className='py-2 text-slate-900 text-lg font-bold'>Tools including:</h4>
            <p className="text-slate-900 py-1">.NET</p>
            <p className="text-slate-900 py-1">Entity Framework</p>
            <p className="text-slate-900 py-1">Relational & Non-Relational Databases</p>
            </div>

            <div className='mb-10 bg-slate-100 text-center shadow-xl p-10 rounded-xl'>
            <h3 className="text-lg font-bold pb-2">Agile Methods</h3>
            <p className='py-2'>In my work as a Junior Full Stack Developer, I employ Agile Scrum Methodology to foster efficient collaboration and adaptability within the team.
             I practice closed-loop communication, ensuring clear understanding and accurate execution of tasks.
              My social maturity and caring personality further enhance team dynamics, creating a supportive and productive work environment that drives project success.</p>
            <h4 className='py-2 text-slate-900 text-lg font-bold'>Tools including:</h4>
            <p className="text-slate-900 py-1">Agile Scrum Methodology</p>
            <p className="text-slate-900 py-1">Closed-Loop Communication</p>
            <p className="text-slate-900 py-1">My Social Maturity & Caring Personality</p>
            </div>
        </div>

    </section>
  )
}

export default SkillsText
