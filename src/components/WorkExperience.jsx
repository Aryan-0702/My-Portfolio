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
          description="Developed responsive and modular UI components using React.js, Tailwind CSS and JavaScript for various production-grade web applications."
          projects={[
            "Designed and implemented responsive UI components for an e-commerce website called LittleSpills, focused on selling premium furniture and home decor, enhancing overall user experience",

            "Created the complete frontend UI for GreenGuide, a plant management application that helps users track and care for their plants, ensuring a clean, user-friendly design and seamless navigation",

            "Built scalable, modular frontend architecture for Wheelz, an online platform facilitating car buying, servicing and selling, ensuring smooth and intuitive user interactions.",
          ]}
        />

        <ExperienceCard
          title="Web Development Intern"
          company="Svaapta IT Ally Solutions Pvt. Ltd. — Onsite"
          period="Jan 2024 - Apr 2024"
          description="Gained hands-on experience in frontend development using HTML, CSS, JavaScript, and PHP during intensive WordPress and Web Technologies training."
          projects={[
            "Created responsive web pages and implemented clone templates based on provided designs, focusing on layout precision and cross-device compatibility.",
            "Resolved UI and functionality issues in the existing Knowledge Centre project — a centralized platform for organizational skill and knowledge management — improving user experience and system reliability."
          ]}
        />
        <ExperienceCard
          title="Web Designing Intern"
          company="Techno Heaven Consultancy Pvt. Ltd. — Onsite"
          period="Jul 2023 - Aug 2023"
          description="Gained hands-on experience in frontend design by creating visually engaging single-page layouts for the travel and tourism sector using HTML and CSS."
          projects={[
            "Designed and developed static travel service web pages similar to commercial travel websites",
            "Focused on layout design, responsiveness and clean UI principles to ensure a professional and accessible user interface."
          ]}
        />
      </div>
    </section>
  )
}

export default WorkExperience
