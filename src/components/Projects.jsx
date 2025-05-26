import ProjectCard from "./ProjectCard"
import Languages from "./Languages"

const Projects = () => {
  const academicProjects = [
    {
      title: "To-do List App",
      description: "A simple to-do list application built with React that allows users to add, edit and delete tasks.",
    },
    {
      title: "Video App",
      description: "A video streaming application with features like play, pause and search functionality.",
    },
    {
      title: "Notes Taking App",
      description: "An application for creating, editing and organizing notes with categorization features.",
    },
    {
      title: "Form Validations",
      description: "A form with client-side validation for various input types using JavaScript.",
    },
  ]

  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-teal-700 border-b-2 border-teal-700 pb-2 mb-6 uppercase mt-10">
          Academic Projects
        </h2>

        <p className="mb-4">A list of completed mini projects at QSpider includes:</p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          <ProjectCard projects={academicProjects} />
        </div>
      </section>
      <Languages />
    </>
  )
}

export default Projects
