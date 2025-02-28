
import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "AI Platform",
    description: "An artificial intelligence platform that integrates machine learning models to optimize market strategies.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2070",
    tags: ["AI", "React", "Python", "TensorFlow"]
  },
  {
    title: "Mobile App Calendar",
    description: "A cross-platform mobile calendar application with advanced scheduling and reminder features.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    tags: ["React Native", "Redux", "Firebase"]
  },
  {
    title: "Washcar Portfolio",
    description: "A comprehensive web showcase for a car washing service with booking system and service management.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=2070",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    title: "Cafe Restaurant Website",
    description: "An elegant restaurant website with menu displays, online ordering system, and table reservations.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2070",
    tags: ["Vue.js", "Express", "PostgreSQL", "Tailwind"]
  }
];

const Projects = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
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
    <section id="projects" className="py-24 bg-portfolio-offwhite section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-portfolio-red/10 text-portfolio-red rounded-full px-4 py-1 mb-4 text-sm font-medium animate-on-scroll">
            Featured Work
          </span>
          <h2 ref={headingRef} className="section-heading animate-on-scroll">
            My Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 animate-on-scroll">
            A showcase of my recent development projects, demonstrating my technical skills and creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
