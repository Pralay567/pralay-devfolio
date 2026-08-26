import { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'experience' | 'education';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  achievements?: string[];
}

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'experience' | 'education' | 'all'
  >('all');

  const sectionRef = useRef<HTMLDivElement>(null);

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      type: 'experience',
      title: 'Machine Learning Intern',
      company: 'Saiket Systems',
      location: 'Remote',
      period: 'July 2026 – August 2026',
      description: [
        'Performed data cleaning, preprocessing, EDA, statistical analysis, and feature preparation using Python, Pandas, and NumPy.',
        'Applied machine learning techniques and data visualization to identify patterns and support data-driven solutions.',
      ],
      technologies: [
        'Python',
        'Pandas',
        'NumPy',
        'Machine Learning',
        'Scikit-Learn',
        'Data Visualization',
      ],
    },

    {
      id: 2,
      type: 'experience',
      title: 'Data Analytics Intern',
      company: 'Zidio Development',
      location: 'Remote',
      period: '3-Month Internship | 2026',
      description: [
        'Performed data cleaning, preprocessing, EDA, and data manipulation using Python, Pandas, and SQL to identify trends and actionable insights.',
        'Created data visualizations and analytical outputs to communicate findings and support data-driven decision-making.',
      ],
      technologies: [
        'Python',
        'SQL',
        'Pandas',
        'Data Analytics',
        'Data Visualization',
      ],
    },

    {
      id: 3,
      type: 'education',
      title: 'B.Tech in Computer Science & Engineering (AI & ML)',
      company: 'Brainware University',
      location: 'West Bengal, India',
      period: '2022 – 2026',
      description: [
        'Specialized in Artificial Intelligence and Machine Learning.',
        'Built projects across Machine Learning, Data Analytics, NLP, and Generative AI.',
        'Developed strong foundations in Python, SQL, Statistics, and Data Science.',
      ],
      achievements: ['CGPA: 8.87/10'],
    },

    {
      id: 4,
      type: 'education',
      title: 'Higher Secondary (WBCHSE)',
      company: 'KSCMHS',
      location: 'West Bengal, India',
      period: '2022',
      description: [
        'Completed Higher Secondary education with 89.04%.',
      ],
    },

    {
      id: 5,
      type: 'education',
      title: 'Secondary (WBBSE)',
      company: 'KSCMHS',
      location: 'West Bengal, India',
      period: '2020',
      description: [
        'Completed Secondary education with 76.14%.',
      ],
    },
  ];

  const filteredData =
    activeTab === 'all'
      ? timelineData
      : timelineData.filter((item) => item.type === activeTab);

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
      id="experience"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in-up">
            Experience & Education
          </h2>

          <p
            className="text-xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up"
            style={{ animationDelay: '0.1s' }}
          >
            My professional experience and academic journey in Artificial
            Intelligence, Machine Learning, and Data Analytics.
          </p>

          <div
            className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto animate-scale-in"
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div
            className="bg-gray-100 dark:bg-gray-700 rounded-lg p-1 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            {(['all', 'experience', 'education'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab === 'experience' && (
                  <Briefcase size={16} className="mr-2" />
                )}

                {tab === 'education' && (
                  <GraduationCap size={16} className="mr-2" />
                )}

                {tab === 'all' && (
                  <Award size={16} className="mr-2" />
                )}

                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {filteredData.map((item, index) => (
              <div
                key={item.id}
                className={`relative pl-20 animate-fade-in-up ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  animationDelay: `${0.4 + index * 0.1}s`,
                  transitionDelay: `${index * 0.1}s`,
                }}
              >

                {/* Timeline Icon */}
                <div className="absolute left-4 w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2">
                  {item.type === 'experience' ? (
                    <Briefcase size={16} className="text-white" />
                  ) : (
                    <GraduationCap size={16} className="text-white" />
                  )}
                </div>

                {/* Content Card */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">

                  {/* Header */}
                  <div className="mb-4">

                    <div className="flex flex-wrap items-center gap-2 mb-2">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.type === 'experience'
                            ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                            : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        }`}
                      >
                        {item.type}
                      </span>

                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {item.period}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>

                    <div className="flex items-center text-gray-600 dark:text-gray-300 mt-1">
                      <span className="font-medium">
                        {item.company}
                      </span>

                      <span className="mx-2">•</span>

                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {item.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-300 flex items-start"
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  {item.technologies && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Technologies:
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs border border-gray-200 dark:border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {item.achievements && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Key Achievement:
                      </h4>

                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                          >
                            <Award
                              size={12}
                              className="text-accent mt-0.5 mr-2 flex-shrink-0"
                            />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '1s' }}
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Interested in my professional experience and background?
            </p>

            <button
              onClick={() => {
                const element = document.querySelector('#resume');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Resume

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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586l5.414 5.414V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;