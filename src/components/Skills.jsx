import SkillBar from "./SkillBar"

const Skills = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-teal-700 border-b-2 border-teal-700 pb-2 mb-6">SKILLS</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3">Frontend</h3>
          <div className="space-y-3">
            <SkillBar name="HTML" percentage={90} />
            <SkillBar name="CSS" percentage={85} />
            <SkillBar name="JavaScript" percentage={80} />
            <SkillBar name="Tailwind" percentage={75} />
            <SkillBar name="TypeScript" percentage={70} />
          </div>
        </div>

        <div>
          <div className="space-y-3">
            <SkillBar name="React" percentage={85} />
          </div>
        </div>

        <div>
          {/* <h3 className="text-xl font-bold mb-3">Frontend Technologies</h3> */}
          <div className="space-y-3">
            <SkillBar name="Bootstrap" percentage={80} />
          </div>
        </div>

               <div>
          <h3 className="text-xl font-bold mb-3">Build Tools</h3>
          <div className="space-y-3">
            <SkillBar name="Vite" percentage={80} />
            <SkillBar name="npm / Yarn" percentage={85} />
            <SkillBar name="Git & GitHub" percentage={75} />
            <SkillBar name="Netlify / Vercel" percentage={90} />
          </div>
        </div>

        {/* Generative AI */}
        <div>
          <h3 className="text-xl font-bold mb-3">Generative AI Tools</h3>
          <div className="space-y-3">
            <SkillBar name="ChatGPT" percentage={85} />
            <SkillBar name="v0.dev" percentage={90} />
            <SkillBar name="Perplexity AI" percentage={80} />
            <SkillBar name="Mistral" percentage={75} />
            <SkillBar name="Microsoft Copilot" percentage={85} />
            <SkillBar name="GitHub Copilot" percentage={80} />
          </div>
        </div>

        {/* Development Tools */}
        <div>
          <h3 className="text-xl font-bold mb-3">Development Tools</h3>
          <div className="space-y-3">
            <SkillBar name="VS Code" percentage={90} />
            <SkillBar name="Cursor AI" percentage={75} />
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
