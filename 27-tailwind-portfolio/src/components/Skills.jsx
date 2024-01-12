import SectionTitle from './SectionTitle'
import { skills } from '../data'
import SkillsCard from './SkillsCard'

const Skills = () => {
    console.log(skills.text)
  return (
    <section className='py-20 align-element' id='skills'>
        <SectionTitle text='tech stack'/>
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skills) => {
                return <SkillsCard key={skills.id} {...skills}/>
            })}
        </div>
    </section>
  )
}

export default Skills