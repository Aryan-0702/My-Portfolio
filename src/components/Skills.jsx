import SkillBar from "./SkillBar"

const Skills = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-teal-700 border-b-2 border-teal-700 pb-2 mb-6">SKILLS</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
          <div className="space-y-3">
            <SkillBar name="HTML" percentage={90} />
            <SkillBar name="CSS" percentage={85} />
            <SkillBar name="JavaScript" percentage={80} />
            <SkillBar name="Tailwind" percentage={75} />
            <SkillBar name="TypeScript" percentage={70} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">JavaScript Library</h3>
          <div className="space-y-3">
            <SkillBar name="React" percentage={85} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Front-end Framework</h3>
          <div className="space-y-3">
            <SkillBar name="Bootstrap" percentage={80} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">SEO & WordPress Skills</h3>
          <div className="space-y-3">
            <SkillBar name="WordPress Development (Divi)" percentage={75} />
            <SkillBar name="Backlink Creation" percentage={65} />
            <SkillBar name="Basic On-Page & Off-Page SEO" percentage={70} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
