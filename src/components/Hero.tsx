
import { useEffect } from 'react';
import { Briefcase, Download, Mail, Phone, Linkedin } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.noon-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.noon-reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden section">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(234,56,76,0.05),transparent_40%)]"></div>
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="order-2 lg:order-1">
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-portfolio-red/10 text-portfolio-red rounded-full px-4 py-1 mb-4 text-sm font-medium noon-reveal reveal-1">
                Software Developer
              </span>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-balance text-portfolio-darkgray mb-4 noon-reveal reveal-2">
                Hi, I'm <span className="text-portfolio-red">Mouni Youssef</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl noon-reveal reveal-3">
                Full Stack Developer specializing in Spring, PHP, Angular, and React. I build innovative digital solutions with a passion for clean, efficient code.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 noon-reveal reveal-4">
              <a
                href="https://drive.google.com/file/d/1zjJ31cReX4HEf8hXVCQoI6_UFExFPkmv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-button"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
              
              <a
                href="tel:0651410450"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium shadow-sm transition-all duration-300 bg-white text-portfolio-darkgray border border-gray-200 hover:border-portfolio-red hover:shadow-md"
              >
                <Phone className="w-5 h-5 mr-2 text-portfolio-red" />
                0651410450
              </a>
            </div>
            
            <div className="flex gap-5 noon-reveal reveal-5">
              <a 
                href="mailto:youssefmouni90@gmail.com" 
                className="social-icon"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/youssefmouni" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/0651410450" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end noon-reveal reveal-3">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-red to-red-500 rounded-full blur opacity-30 animate-float"></div>
            <div className="relative bg-white p-2 rounded-full shadow-xl">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white">
                <img 
                  src="/lovable-uploads/3a4bab75-8903-41c2-bda1-a9bde9af8101.png" 
                  alt="Mouni Youssef" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
