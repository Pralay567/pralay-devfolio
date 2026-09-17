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
    title: 'Financial Fraud Detection',
    description:
      'Developed an AI-powered fraud detection system that analyzes transaction attributes to estimate fraud probability, assign risk scores, and classify transactions into Low, Medium, High, and Critical risk levels. Built a tuned HistGradientBoosting model with a FastAPI backend and React dashboard, and deployed the complete application for real-time fraud risk prediction.',
    image: 'fraud.jpg',
    technologies: [
      'Python',
      'Machine Learning',
      'Scikit-Learn',
      'FastAPI',
      'React',
      'Data Analytics',
    ],
    category: 'Machine Learning',
    liveUrl:
      'https://financial-fraud-detection-frontend.onrender.com/',
    githubUrl:
      'https://github.com/Pralay567/financial-fraud-detection',
    featured: true,
  },

  {
    id: 2,
    title: 'FORESIGHT',
    description:
      'Developed an AI-powered demand and inventory intelligence application to forecast Store-SKU demand and identify inventory risks. Applied data preprocessing, feature engineering, predictive modeling, and inventory risk analysis, with a FastAPI backend and interactive web dashboard.',
    image: 'foresight.jpg',
    technologies: [
      'Python',
      'Machine Learning',
      'Forecasting',
      'Data Analytics',
      'FastAPI',
    ],
    category: 'Machine Learning',
    liveUrl:
      'https://foresight-demand-frontend.onrender.com/',
    githubUrl:
      'https://github.com/Pralay567/FORESIGHT',
    featured: true,
  },

  {
    id: 3,
    title: 'Business Analytics Dashboard',
    description:
      'Designed an interactive business intelligence dashboard to analyze sales performance, customer behavior, and key business KPIs. Leveraged SQL, Pandas, Power BI, and Streamlit to transform raw data into actionable insights through dynamic visualizations.',
    image: 'business.jpg',
    technologies: [
      'Python',
      'Pandas',
      'Power BI',
      'SQL',
      'Data Analysis',
    ],
    category: 'Analytics',
    liveUrl:
      'https://global-business-analytics-dashboard-o2xvjzfd4sjrmhfrcw6qss.streamlit.app/',
    githubUrl:
      'https://github.com/Pralay567/Global-Business-Analytics-Dashboard',
    featured: true,
  },

  {
    id: 4,
    title: 'AI Career Copilot',
    description:
      'Developed an AI-powered career guidance application that analyzes student profiles, skills, resumes, and career goals to provide personalized career insights. Built AI/ML workflows for skill-gap analysis, interview preparation, and personalized learning guidance.',
    image: 'career.jpg',
    technologies: [
      'Python',
      'Machine Learning',
      'NLP',
      'Generative AI',
      'Streamlit',
    ],
    category: 'AI',
    liveUrl:
      'https://ai-career-copilot-pnvc7nrxhdlzh7o9vakmpf.streamlit.app/',
    githubUrl:
      'https://github.com/Pralay567/AI-Career-Copilot',
    featured: true,
  },

  {
    id: 5,
    title: 'Fake News Detection System',
    description:
      'Built an NLP-based machine learning application to classify news articles as real or fake. Trained and evaluated multiple Scikit-learn models using TF-IDF vectorization and deployed the solution as an interactive Streamlit application for real-time news classification.',
    image: 'news.jpg',
    technologies: [
      'Python',
      'Machine Learning',
      'NLP',
      'Scikit-Learn',
      'Streamlit',
    ],
    category: 'Machine Learning',
    liveUrl:
      'https://fake-news-detection-ml-tmfdyzjga4fhsgcx9pwes6.streamlit.app/',
    githubUrl:
      'https://github.com/Pralay567/fake-news-detection-ml/tree/main',
    featured: true,
  },

  {
    id: 6,
    title: 'Customer Churn Prediction',
    description:
      'Developed a machine learning application to predict customer churn based on customer behavior and demographic features. Performed data preprocessing, exploratory analysis, feature engineering, and model evaluation to identify churn patterns and risk factors.',
    image: 'churn.jpg',
    technologies: [
      'Python',
      'Pandas',
      'Scikit-Learn',
      'Machine Learning',
      'Streamlit',
    ],
    category: 'Machine Learning',
    liveUrl:
      'https://customer-churn-prediction-cwhv7arhbnr4v2ilr3m88u.streamlit.app/',
    githubUrl: '#',
    featured: false,
  },

  {
    id: 7,
    title: 'Election Guide Assistant',
    description:
      'Developed an AI-powered election assistance platform that provides constituency details, election guidance, and location-based services. Integrated Google Gemini AI, Folium maps, and geolocation to deliver interactive and user-friendly election information.',
    image: 'election.jpg',
    technologies: [
      'Python',
      'Streamlit',
      'Gemini AI',
      'Folium',
      'Geopy',
    ],
    category: 'AI',
    liveUrl:
      'https://election-assistant-fdgxetefqsxjy4dqu2j8ra.streamlit.app/',
    githubUrl:
      'https://github.com/Pralay567/election-assistant',
    featured: true,
  },

  {
    id: 8,
    title: 'Portfolio Website',
    description:
      'Designed and developed a modern, responsive developer portfolio to showcase projects, technical skills, certifications, and achievements. Built with React, TypeScript, Tailwind CSS, and Vite, featuring smooth animations, project filtering, and optimized performance.',
    image: 'portfolio.jpg',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
    ],
    category: 'Frontend',
    liveUrl:
      'https://spiffy-youtiao-009ed2.netlify.app/',
    githubUrl:
      'https://github.com/Pralay567/pralay-devfolio',
    featured: false,
  },
];

  const categories = [
    'All',
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
            Featured Projects
          </h2>

          <p
            className="text-xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            A showcase of my recent work and creative solutions
          </p>

          <div
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto animate-scale-in"
            style={{ animationDelay: '0.2s' }}
          ></div>
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
              style={{
                animationDelay: `${0.3 + index * 0.05}s`,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                animationDelay: `${0.4 + index * 0.1}s`,
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary to-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden h-64 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center justify-center"
                    >
                      <Eye size={16} className="mr-2" />
                      Live Demo
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center justify-center"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-1 p-6">

                {/* Category */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">
                    {project.category}
                  </span>

                  <ExternalLink
                    size={16}
                    className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
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

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '1s' }}
          >
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

              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
