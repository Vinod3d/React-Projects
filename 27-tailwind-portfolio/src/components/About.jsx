import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
        <div className="align-element grid md:grid-cols-2 items-center gap-16">
            <img src={aboutSvg} alt="" className='w-full h-64'/>
            <article>
                <SectionTitle text='code and coffee'/>
                <p className='text-slate-600 mt-8 leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rerum illo ad quas incidunt libero, dolores itaque in voluptatum deleniti doloribus, explicabo vitae animi corporis fugit quod nobis id dolorum dignissimos impedit consequatur amet tempore minus sint! Cupiditate ea est nostrum expedita ab alias doloremque! Vitae doloremque quo provident corrupti est saepe dolorem voluptate nisi porro laudantium esse voluptatum ipsum modi in vel autem, at labore voluptas magni rem perspiciatis quidem atque. Magni voluptatibus molestiae rem maxime.</p>
            </article>
        </div>
    </section>
  )
}

export default About