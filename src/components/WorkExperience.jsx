import ExperienceCard from "./ExperienceCard"

const WorkExperience = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-teal-700 border-b-2 border-teal-700 pb-2 mb-6">WORK EXPERIENCE</h2>

      <div className="space-y-8">
        <ExperienceCard
          title="React Developer"
          company="The IT Cart — Remote (Canada)"
          period="Aug 2024 - May 2025"
          description="Developed responsive and modular UI components using React.js, Tailwind CSS and JavaScript for multiple projects."
          projects={[
            "LittleSpills (e-commerce website for furniture)",
            "GreenGuide (Plant Management App)",
            "Wheelz (e-commerce website for buying, Service & selling cars)",
          ]}
        />

        <ExperienceCard
          title="Web Development Intern"
          company="Svaapta IT Ally Solutions Pvt. Ltd. — Onsite"
          period="Jan 2024 - Apr 2024"
          description=""
          projects={[
            "Completed training in WordPress Development and Web Technologies (HTML, CSS, JavaScript).",
            "Assisted in building and maintaining website components during the internship program.",
          ]}
        />

        <ExperienceCard
          title="Web Designing Intern"
          company="Techno Heaven Consultancy Pvt. Ltd. — Onsite"
          period="Jul 2023 - Aug 2023"
          description=""
          projects={["Designed and developed static travel-related webpages using HTML and CSS.",
            "Focused on layout, responsiveness and clean UI design principles.",
          ]}
        />
      </div>
    </section>
  )
}

export default WorkExperience
