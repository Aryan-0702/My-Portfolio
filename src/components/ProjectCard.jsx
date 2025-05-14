const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm h-full hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-bold text-teal-700 mb-4">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-teal-50 text-teal-700 border border-teal-200 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
