import { Github, Linkedin, Mail, FileText, Phone  } from "lucide-react";
import portfolioPdf from "../assets/Aryan_Lad_Portfolio.pdf";

const Tooltip = ({ children, text }) => (
  <div className="relative group cursor-pointer">
    {children}
    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2
                    opacity-0 group-hover:opacity-100
                    transition-opacity bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap
                    pointer-events-none z-50">
      {text}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-teal-800 via-teal-700 to-cyan-700 text-white py-8 shadow-inner">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex gap-6 mb-2">
          <Tooltip text="Email Me">
            <a
              href="mailto:aryanblad@gmail.com"
              className="hover:text-teal-200 transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </Tooltip>
          <Tooltip text="Call Me">
            <a
              href="tel:+919574157418"
              className="hover:text-teal-200 transition-colors"
              aria-label="Phone"
            >
              <Phone size={22} />
            </a>
          </Tooltip>
          <Tooltip text="LinkedIn Profile">
            <a
              href="https://www.linkedin.com/in/aryan-lad-83b42a263/"
              className="hover:text-teal-200 transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} />
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
              <Github size={22} />
            </a>
          </Tooltip>
          <Tooltip text="Download Portfolio PDF">
            <a
              href={portfolioPdf}
              download="Aryan_Lad_Portfolio.pdf"
              className="hover:text-teal-200 transition-colors"
              aria-label="Download Portfolio"
            >
              <FileText size={22} />
            </a>
          </Tooltip>
        </div>
        <p className="text-teal-100 text-md font-semibold">
          Frontend React Developer
        </p>
        {/* Optional copyright */}
        {/* <p className="text-xs text-teal-200 mt-1">
          © {new Date().getFullYear()} Aryan Lad. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
