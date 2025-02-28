
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
    title: "Server and Web & Mobile App for Menara Holding",
    description: "Full-stack solution for Menara Holding Marrakech with integrated backend services and responsive interfaces.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1738",
    tags: ["Spring Boot", "Angular", "Docker", "MySQL"]
  },
  {
    title: "E-commerce Website",
    description: "A complete e-commerce solution with secure payment processing, inventory management, and user authentication.",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=1740",
    tags: ["PHP", "Laravel", "Vue.js", "MongoDB"]
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
