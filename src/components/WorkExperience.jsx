import ExperienceCard from "./ExperienceCard"

const WorkExperience = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-teal-700 border-b-2 border-teal-700 pb-2 mb-6">WORK EXPERIENCE</h2>

      <div className="space-y-8">
        <ExperienceCard
          title="React Developer"
          company="The IT Cart (Canada)"
          period="Aug 2024 - May 2025"
          description="Contributing to live projects by building dynamic, responsive web applications."
          projects={[
            "LittleSpills (e-commerce website for furniture)",
            "GreenGuide (Plant Management App)",
            "Wheelz (e-commerce website for buying, Service & selling cars)",
          ]}
        />

        <ExperienceCard
          title="Web Development Intern"
          company="Svaapta It Ally Solutions Pvt Ltd"
          period="Jan 2024 - Apr 2024"
          description=""
          projects={[
            "Completed WordPress Course at Svaapta It Ally Solutions Pvt Ltd.",
            "Completed Web Technology (HTML, CSS, JavaScript) Course at Svaapta It Ally Solutions Pvt Ltd.",
          ]}
        />

        <ExperienceCard
          title="Web Designing Intern"
          company="Techno heaven Consultancy Pvt.Ltd."
          period="Jul 2023 - Aug 2023"
          description=""
          projects={["Created static travel web pages using HTML and CSS."]}
        />
      </div>
    </section>
  )
}

export default WorkExperience
