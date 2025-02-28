
import { useEffect, useRef } from 'react';

const clientProjects = [
  { 
    name: "HealthTrack App", 
    category: "Mobile Application", 
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&q=80&w=1800" 
  },
  { 
    name: "Financial Dashboard", 
    category: "Web Application", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1800" 
  },
  { 
    name: "TravelBuddy Platform", 
    category: "Web & Mobile", 
    image: "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?auto=format&fit=crop&q=80&w=1800" 
  },
  { 
    name: "SmartHome Control", 
    category: "IoT Application", 
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1800" 
  },
  { 
    name: "CourseHub LMS", 
    category: "Education Platform", 
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1800" 
  },
  { 
    name: "RestaurantPOS System", 
    category: "Enterprise Software", 
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1800" 
  },
  { 
    name: "FitnessPal", 
    category: "Mobile Application", 
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1800" 
  },
  { 
    name: "PropertyFinder", 
    category: "Real Estate Platform", 
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1800" 
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
            Portfolio Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 animate-on-scroll">
            A collection of projects I've developed for various clients across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-sm opacity-90">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientProjects;
