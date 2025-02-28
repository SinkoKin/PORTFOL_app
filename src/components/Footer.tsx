
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-portfolio-darkgray text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              I'm currently available for freelance work and full-time positions. 
              If you have a project that needs coding or a team that needs a developer, 
              feel free to reach out.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:youssefmouni90@gmail.com"
                className="flex items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-portfolio-red transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">youssefmouni90@gmail.com</span>
              </a>
              
              <a 
                href="https://wa.me/0651410450"
                className="flex items-center group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-portfolio-red transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">0651410450</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/youssefmouni"
                className="flex items-center group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-portfolio-red transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">linkedin.com/in/youssefmouni</span>
              </a>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Resume</h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Download my resume to get a detailed overview of my skills, experience, and education.
            </p>
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center px-6 py-3 rounded-full font-medium bg-portfolio-red text-white hover:bg-red-600 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Mouni Youssef. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/youssefmouni" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:youssefmouni90@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
