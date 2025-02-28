
import { useEffect, useRef } from 'react';

const clientProjects = [
  { 
    name: "Dashboard for Restaurant Stock Management", 
    category: "Web Application", 
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=1800" 
  },
  { 
    name: "Mobile and Desktop App for Travel Agency", 
    category: "Cross-platform Application", 
    image: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?auto=format&fit=crop&q=80&w=1800" 
  },
  { 
    name: "AI Bot Script for Client Order Management", 
    category: "AI Solution", 
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1800" 
  }
];

const ClientProjects = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            
            // Add staggered animation to the portfolio items
            const items = document.querySelectorAll('.portfolio-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animated');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, []);

  return (
    <section id="client-projects" className="py-24 section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-portfolio-red/10 text-portfolio-red rounded-full px-4 py-1 mb-4 text-sm font-medium animate-on-scroll">
            Client Work
          </span>
          <h2 ref={headingRef} className="section-heading animate-on-scroll">
            Recent Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 animate-on-scroll">
            A collection of recent development projects showcasing my technical expertise and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {clientProjects.map((project, index) => (
            <div 
              key={index} 
              className="portfolio-item animate-on-scroll relative group overflow-hidden rounded-xl h-64"
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold text-center mb-2">{project.name}</h3>
                <p className="text-sm opacity-90 text-center">{project.category}</p>
                {project.name === "AI Bot Script for Client Order Management" && (
                  <p className="text-xs mt-2 text-center">Response time: 0.5 seconds</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientProjects;
