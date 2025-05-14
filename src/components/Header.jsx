import { Github, Linkedin, Mail, Phone } from "lucide-react"

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row bg-teal-600 text-white">
      <div className="w-full md:w-1/3 p-6 flex justify-center items-center">
        {/* <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img src="https://via.placeholder.com/300" alt="Aryan Lad" className="object-cover w-full h-full" />
        </div> */}
      </div>
      <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Aryan Lad </h1>
        <h2 className="text-xl md:text-2xl mb-6">Front-End React Developer</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <a href="mailto:aryanblad@gmail.com" className="hover:underline">
              aryanblad@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={20} />
            <a href="tel:+919574157418" className="hover:underline">
              +91 9574157418
            </a>
          </div>
        </div>

        <div className="flex gap-4 mt-2">
          <a href="https://www.linkedin.com/in/aryan-lad-83b42a263/" className="hover:text-teal-200 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Aryan-0702" className="hover:text-teal-200 transition-colors">
            <Github size={24} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
