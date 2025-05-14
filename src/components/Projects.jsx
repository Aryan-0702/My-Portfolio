import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-teal-700 border-b-2 border-teal-700 pb-2 mb-6">PROJECTS</h2>

      <p className="mb-4">A list of completed mini projects at QSpider includes:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectCard
          title="To-do List"
          description="A simple to-do list application built with React that allows users to add, edit, and delete tasks."
          technologies={["React", "JavaScript", "CSS"]}
        />

        <ProjectCard
          title="Video App"
          description="A video streaming application with features like play, pause, and search functionality."
          technologies={["React", "JavaScript", "CSS"]}
        />

        <ProjectCard
          title="Notes Taking App"
          description="An application for creating, editing, and organizing notes with categorization features."
          technologies={["React", "JavaScript", "CSS"]}
        />

        <ProjectCard
          title="Form Validation"
          description="A form with client-side validation for various input types using JavaScript."
          technologies={["HTML", "CSS", "JavaScript"]}
        />
      </div>
    </section>
  )
}

export default Projects
