import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-teal-800 via-teal-700 to-cyan-700 text-white py-8 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex gap-6 mb-2">
          <a
            href="mailto:aryanblad@gmail.com"
            className="hover:text-teal-200 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-lad-83b42a263/"
            className="hover:text-teal-200 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/Aryan-0702"
            className="hover:text-teal-200 transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
        </div>
        <p className="text-teal-100 text-md font-semibold ">
          Frontend  React Developer
        </p>
        {/* <p className="text-xs text-teal-200 mt-1">
          © {new Date().getFullYear()} Aryan Lad. All rights reserved.
        </p> */}
      </div>
    </footer>
  )
}

export default Footer
