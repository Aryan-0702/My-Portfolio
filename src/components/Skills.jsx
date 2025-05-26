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
          {/* <h3 className="text-xl font-bold mb-3">JavaScript Library</h3> */}
          <div className="space-y-3">
            <SkillBar name="React" percentage={85} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Frontend Technologies</h3>
          <div className="space-y-3">
            <SkillBar name="Bootstrap" percentage={80} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Build Tools</h3>
          <div className="space-y-2">
            <h4 className="text-base font-medium text-gray-700"><b>Vite -</b> Fast build tool for modern frontend apps</h4>
            <h4 className="text-base font-medium text-gray-700"><b>npm / Yarn -</b> JavaScript package managers</h4>
            <h4 className="text-base font-medium text-gray-700"><b>Git & GitHub -</b> Version control & project hosting</h4>
            <h4 className="text-base font-medium text-gray-700"><b>Netlify / Vercel -</b> Deployment platforms</h4>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Generative AI</h3>
          <div className="space-y-2">
            <h4 className="text-base font-medium text-gray-700"><b>ChatGPT  -</b> AI assistant for coding, debugging and content generation</h4>
            <h4 className="text-base font-medium text-gray-700"><b>v0.dev  -</b> AI-powered coding productivity tool</h4>
            <h4 className="text-base font-medium text-gray-700"><b>Perplexity AI  -</b> AI search and answer engine</h4>
            <h4 className="text-base font-medium text-gray-700"><b>Mistral  -</b> Advanced open-source language models</h4>
            <h4 className="text-base font-medium text-gray-700"><b>Microsoft Copilot  -</b> AI code completion integrated with Microsoft tools</h4>
            <h4 className="text-base font-medium text-gray-700"><b>GitHub Copilot  -</b> AI-powered code suggestions inside IDE</h4>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Generative AI</h3>
          <div className="space-y-2">
            <h4 className="text-base font-medium text-gray-700"><b>VS Code  -</b> Powerful, extensible code editor with rich plugin ecosystem</h4>
            <h4 className="text-base font-medium text-gray-700"><b>Cursor AI  -</b> AI-powered coding assistant integrated in VS Code</h4>

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
