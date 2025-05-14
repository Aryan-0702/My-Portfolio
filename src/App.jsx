import Header from "./components/Header"
import Profile from "./components/Profile"
import WorkExperience from "./components/WorkExperience"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Projects from "./components/Projects"
import Certificates from "./components/Certificates"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8 w-[100%] md:w-[90%]">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to My Portfolio
        </h1>
        <Profile />
        <WorkExperience />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <Skills />
          <Education />
        </div>

        <Projects />
        <Certificates />
      </main>

      <Footer />
    </div>
  )
}

export default App
