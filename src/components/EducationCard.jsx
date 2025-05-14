const EducationCard = ({ degree, institution, period, grade }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-6 border-l-4 border-l-teal-600">
      <div className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
          <h3 className="text-lg text-teal-700 font-bold">{degree}</h3>
          <span className="text-sm font-medium text-gray-500">{period}</span>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-gray-700">{institution}</p>
        <p className="text-gray-600 mt-1">Grade: {grade}</p>
      </div>
    </div>
  )
}

export default EducationCard
