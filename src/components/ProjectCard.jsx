import { useState } from "react"

const ProjectCard = ({ projects }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm h-full hover:shadow-lg transition-shadow p-6">
      <ul className="list-disc pl-5 space-y-3 text-gray-800">
        {projects.map((project, index) => (
          <li key={index} className="relative">
            <span
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="cursor-pointer hover:text-teal-700 font-semibold inline-block"
            >
              {project.title}
            </span>

            {hoveredIndex === index && (
              <div className="absolute z-10 mt-1 ml-4 w-80 bg-white border border-gray-300 shadow-lg rounded p-3 text-sm text-gray-700">
                {project.description}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectCard
