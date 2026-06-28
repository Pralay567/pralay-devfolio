import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
  {
    id: 1,
    title: 'Fake News Detection System',
    description:
      'Machine Learning-powered web application that detects whether a news article is real or fake. Built with Python, NLP, Scikit-learn, and Streamlit with confidence score prediction.',
    image: 'news.jpg',
    technologies: ['Python', 'Machine Learning', 'NLP', 'Scikit-Learn', 'Streamlit'],
    category: 'Machine Learning',
    liveUrl: '#',
    githubUrl: 'https://github.com/Pralay567/fake-news-detection-ml/tree/main',
    featured: true,
  },

  {
    id: 2,
    title: 'Election Guide Assistant',
    description:
      'AI-powered election assistance platform providing election-related information, constituency guidance, and location-based services using Google Gemini AI and interactive maps.',
    image: 'election.jpg',
    technologies: ['Python', 'Streamlit', 'Gemini AI', 'Folium', 'Geopy'],
    category: 'AI',
    liveUrl: '#',
    githubUrl: 'https://github.com/Pralay567',
    featured: true,
  },
  {
    id: 3,
    title: 'Business Analytics Dashboard',
    description:
      'Interactive dashboard for analyzing business performance, KPIs, sales trends, and customer insights using data visualization techniques.',
    image: 'business.jpg',
    technologies: ['Python', 'Pandas', 'Power BI', 'SQL', 'Data Analysis'],
    category: 'Analytics',
    liveUrl: '#',
    githubUrl: 'https://github.com/Pralay567',
    featured: true,
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'Personal portfolio showcasing projects, technical skills, certifications, and professional achievements with responsive modern design.',
    image: 'portfolio.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: 'https://github.com/Pralay567',
    featured: false,
  }
  ]
  /*{
    id: 4,
    title: 'AI Chat Bot',
    description: 'An intelligent chatbot powered by OpenAI API with natural language processing and context-aware responses.',
    image: '/placeholder.svg',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'Redis'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    },*/

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            A showcase of my recent work and creative solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto animate-scale-in" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 animate-fade-in-up ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${project.featured ? 'lg:col-span-2' : ''}`}
              style={{ 
                animationDelay: `${0.4 + index * 0.1}s`,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center justify-center"
                    >
                      <Eye size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center justify-center"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-primary transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-accent rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in working together? Let's create something amazing!
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start a Project
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
