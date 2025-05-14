// import { Github, Linkedin, Mail, Phone } from "lucide-react"

// const Header = () => {
//   return (
//     <header className="flex flex-col md:flex-row bg-teal-600 text-white">
//       <div className="w-full md:w-1/3 p-6 flex justify-center items-center">
//         {/* <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
//           <img src="https://via.placeholder.com/300" alt="Aryan Lad" className="object-cover w-full h-full" />
//         </div> */}
//       </div>
//       <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-2">Aryan Lad </h1>
//         <h2 className="text-xl md:text-2xl mb-6">Front-End React Developer</h2>

//         <div className="flex flex-col md:flex-row gap-4 mb-4">
//           <div className="flex items-center gap-2">
//             <Mail size={20} />
//             <a href="mailto:aryanblad@gmail.com" className="hover:underline">
//               aryanblad@gmail.com
//             </a>
//           </div>
//           <div className="flex items-center gap-2">
//             <Phone size={20} />
//             <a href="tel:+919574157418" className="hover:underline">
//               +91 9574157418
//             </a>
//           </div>
//         </div>

//         <div className="flex gap-4 mt-2">
//           <a href="https://www.linkedin.com/in/aryan-lad-83b42a263/" className="hover:text-teal-200 transition-colors">
//             <Linkedin size={24} />
//           </a>
//           <a href="https://github.com/Aryan-0702" className="hover:text-teal-200 transition-colors">
//             <Github size={24} />
//           </a>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header

import { Github, Linkedin, Mail, Phone } from "lucide-react"

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
          {/* <div className="w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105">
            <img
              src="https://via.placeholder.com/300"
              alt="Aryan Lad"
              className="object-cover w-full h-full"
            />
          </div> */}
        </div>
        {/* Info and Actions */}
        <div className="w-full md:w-2/3 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-1 tracking-tight drop-shadow-lg transition-colors duration-300 hover:text-teal-200">
            Aryan Lad
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-teal-100">
            Front-End React Developer
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
            <a
              href="https://www.linkedin.com/in/aryan-lad-83b42a263/"
              className="hover:text-teal-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/Aryan-0702"
              className="hover:text-teal-200 transition-colors"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:aryanblad@gmail.com"
              className="ml-auto bg-white text-teal-700 font-semibold rounded-full px-6 py-2 shadow-md hover:bg-teal-100 hover:text-teal-900 transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
