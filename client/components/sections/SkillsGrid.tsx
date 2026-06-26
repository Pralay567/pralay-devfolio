import { useEffect, useRef, useState } from 'react';

interface Technology {
  name: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: string;
  color: string;
}

const SkillsGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technologies: Technology[] = [
  {
    name: 'Python',
    category: 'Programming',
    level: 'Advanced',
    icon: '🐍',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    name: 'SQL',
    category: 'Database',
    level: 'Advanced',
    icon: '🗄️',
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Machine Learning',
    category: 'AI/ML',
    level: 'Intermediate',
    icon: '🤖',
    color: 'from-purple-500 to-purple-700'
  },
  {
    name: 'Data Analysis',
    category: 'Analytics',
    level: 'Advanced',
    icon: '📊',
    color: 'from-green-400 to-green-600'
  },
  {
    name: 'Pandas',
    category: 'Data Science',
    level: 'Advanced',
    icon: '🐼',
    color: 'from-indigo-500 to-indigo-700'
  },
  {
    name: 'NumPy',
    category: 'Data Science',
    level: 'Intermediate',
    icon: '🔢',
    color: 'from-blue-400 to-blue-600'
  },
  {
    name: 'Scikit-Learn',
    category: 'AI/ML',
    level: 'Intermediate',
    icon: '🧠',
    color: 'from-orange-400 to-orange-600'
  },
  {
    name: 'Power BI',
    category: 'Analytics',
    level: 'Intermediate',
    icon: '📈',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    name: 'Excel',
    category: 'Analytics',
    level: 'Advanced',
    icon: '📑',
    color: 'from-green-500 to-green-700'
  },
  {
    name: 'React',
    category: 'Frontend',
    level: 'Intermediate',
    icon: '⚛️',
    color: 'from-cyan-400 to-blue-500'
  },
  {
    name: 'Streamlit',
    category: 'Web Apps',
    level: 'Advanced',
    icon: '🚀',
    color: 'from-red-400 to-red-600'
  },
  {
    name: 'Git & GitHub',
    category: 'Tools',
    level: 'Advanced',
    icon: '🔧',
    color: 'from-gray-500 to-gray-700'
  }
];

  const categories = Array.from(new Set(technologies.map(tech => tech.category)));

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-green-600 dark:text-green-400';
      case 'Advanced': return 'text-blue-600 dark:text-blue-400';
      case 'Intermediate': return 'text-yellow-600 dark:text-yellow-400';
      case 'Beginner': return 'text-gray-600 dark:text-gray-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

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
    <section id="skills" ref={sectionRef} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up">
            Tools, technologies, and frameworks I use for AI, Machine Learning, Data Analytics, and Web Development.
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Technologies and tools I work with
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto animate-scale-in" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-medium animate-fade-in-up">
            All Categories
          </div>
          {categories.map((category, index) => (
            <div
              key={category}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden animate-fade-in-up ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: `${0.4 + index * 0.05}s`,
                transitionDelay: `${index * 0.05}s`
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-6 text-center">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                
                {/* Technology Name */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                  {tech.name}
                </h3>
                
                {/* Category */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {tech.category}
                </p>
                
                {/* Level */}
                <div className={`text-sm font-medium ${getLevelColor(tech.level)}`}>
                  {tech.level}
                </div>
                
                {/* Progress Bar */}
                <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${tech.color} transition-all duration-1000 ease-out transform origin-left group-hover:scale-x-110`}
                    style={{
                      width: isVisible ? 
                        (tech.level === 'Expert' ? '95%' : 
                         tech.level === 'Advanced' ? '80%' : 
                         tech.level === 'Intermediate' ? '65%' : '40%') : '0%',
                      transitionDelay: `${0.5 + index * 0.05}s`
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Hover Effect Border */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-primary group-hover:to-accent rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Continuously learning AI, Machine Learning, Data Analytics, and Software Development technologies to build impactful solutions.
            </p>
            <button 
              onClick={() => {
                const element = document.querySelector('#projects');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              See My Projects
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

export default SkillsGrid;
