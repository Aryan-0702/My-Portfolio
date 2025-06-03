  import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";
  import portfolioPdf from "../assets/Aryan_Lad_Portfolio.pdf";
  import profileImg from "../assets/profile_image.jpg";
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
        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-stretch max-w-5xl mx-auto py-10 px-6 md:px-12">
          
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center items-center mb-6 md:mb-0">
            <img
              src={profileImg}
              alt="Aryan Lad"
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Info Section */}
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

            {/* Icons */}
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
    );
  };

  export default Header;
