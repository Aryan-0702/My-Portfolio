import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react"
import portfolioPdf from "../assets/Aryan_Lad_Portfolio.pdf";

const Tooltip = ({ children, text }) => (
  <div className="relative group cursor-pointer">
    {children}
    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2
                    opacity-0 group-hover:opacity-100
                    transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap
                    pointer-events-none
                    z-50">
      {text}
    </div>
  </div>
);

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 text-white shadow-lg overflow-hidden">
      {/* Decorative background elements for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-10" viewBox="0 0 1440 320">
          <path fill="#fff" fillOpacity="0.2" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,133.3C672,107,768,85,864,101.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-stretch max-w-5xl mx-auto py-10 px-6 md:px-12">
        <div className="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
          {/* Image placeholder if needed */}
        </div>
        {/* Info and Actions */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-1 tracking-tight drop-shadow-lg transition-colors duration-300 hover:text-teal-200">
            Aryan Lad
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-teal-100">
            Frontend React Developer
          </h2>
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex items-center gap-2 group">
              <Mail size={20} className="group-hover:text-teal-200 transition-colors" />
              <a href="mailto:aryanblad@gmail.com" className="hover:underline hover:text-teal-200 transition-colors">
                aryanblad@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 group">
              <Phone size={20} className="group-hover:text-teal-200 transition-colors" />
              <a href="tel:+919574157418" className="hover:underline hover:text-teal-200 transition-colors">
                +91 9574157418
              </a>
            </div>
          </div>
          {/* Socials and CTA */}
          <div className="flex items-center gap-6 mt-2">
            <Tooltip text="LinkedIn Profile">
              <a
                href="https://www.linkedin.com/in/aryan-lad-83b42a263/"
                className="hover:text-teal-200 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={28} />
              </a>
            </Tooltip>
            <Tooltip text="GitHub Profile">
              <a
                href="https://github.com/Aryan-0702"
                className="hover:text-teal-200 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={28} />
              </a>
            </Tooltip>
            <Tooltip text="Download Portfolio PDF">
              <a
                href={portfolioPdf}
                download="Aryan_Lad_Portfolio.pdf"
                className="hover:text-teal-200 transition-colors"
                aria-label="Download Portfolio"
              >
                <FileText size={28} />
              </a>
            </Tooltip>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
