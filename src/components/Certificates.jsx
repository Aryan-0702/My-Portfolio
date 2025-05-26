import Education from "./Education"


const Certificates = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-teal-700 border-b-2 border-teal-700 pb-2 mb-6">
        CERTIFICATES & ACHIEVEMENTS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        <div>
          <h3 className="text-xl font-bold mb-3">Certificates</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Participation Certificate in Student Start-up and Innovation Policy (SSIP)</li>
            <li>HTML Essential Training course</li>
            <li>Qspider React and Code Project Course</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Achievements</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              National level online Quiz on Engineering Workshop organized by Bharat Institute of Engineering and
              Technology (BIET)
            </li>
            <li>Online Webinar on Fire Safety Awareness organized by GTU</li>
          </ul>
        </div>
      </div>

      <Education />
    </section>
  )
}

export default Certificates
