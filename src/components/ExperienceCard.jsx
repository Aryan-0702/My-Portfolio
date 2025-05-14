const ExperienceCard = ({ title, company, period, description, projects }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-6 border-l-4 border-l-teal-600">
      <div className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <h3 className="text-xl text-teal-700 font-bold">{title}</h3>
          <span className="text-sm font-medium text-gray-500">{period}</span>
        </div>
        <p className="text-lg font-medium text-gray-700">{company}</p>
      </div>
      <div className="mt-4">
        {description && <p className="mb-3 text-gray-700">{description}</p>}
        {projects.length > 0 && (
          <>
            {projects.length === 1 ? (
              <p className="text-gray-700">{projects[0]}</p>
            ) : (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ExperienceCard
