import EducationCard from "./EducationCard"
import Projects from "./Projects"

const Education = () => {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-teal-700 border-b-2 border-teal-700 pb-2 mb-7 mt-10 uppercase">Education Qualifications
        </h2>

        <div className="space-y-6">
          <EducationCard
            degree="B.E-Computer Science"
            institution="Babaria Institute Of Technology, Vadodara, Gujarat"
            period="2020-2024"
            grade="8.59 CGPA"
          />

          <EducationCard degree="HSC" institution="AB School, Chikhli, Gujarat" period="2018-2020" grade="52.48%" />

          <EducationCard degree="SSC" institution="AB School, Chikhli, Gujarat" period="2016-2018" grade="69.67%" />
        </div>

        <Projects />
      </section>
    </>
  )
}

export default Education
