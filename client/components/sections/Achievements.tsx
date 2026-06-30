import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Achievement {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  project: string;
}

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements: Achievement[] = [
    {
  id: 2,
  name: 'Machine Learning Projects',
  role: 'Project Experience',
  company: 'Portfolio',
  image: 'machine.jpg',
  content:
    'Designed and deployed multiple real-world projects, including Fake News Detection, Election Guide Assistant, and Business Analytics Dashboard, demonstrating expertise in Python, Machine Learning, NLP, AI, and Data Analytics.',
  project: 'Technical Projects',
},
{
  id: 3,
  name: 'Certifications',
  role: 'Professional Development',
  company: 'Learning',
  image: 'certified.jpg',
  content:
    'Earned industry-recognized certifications in Data Analytics, SQL, Machine Learning, and Business Analytics, strengthening practical skills through continuous learning.',
  project: 'Continuous Learning',
},
{
  id: 4,
  name: 'AWS User Group Kolkata',
  role: 'Volunteer',
  company: 'AWS Community',
  image: 'aws.jpg',
  content:
    'Active volunteer at AWS User Group Kolkata, supporting community-driven technical events, engaging with developers, and contributing to knowledge-sharing initiatives in cloud computing and emerging technologies.',
  project: 'Community Leadership',
},
{
  id: 5,
  name: 'Open Source & GitHub',
  role: 'Development',
  company: 'GitHub',
  image: 'git.jpg',
  content:
    'Actively building, maintaining, and deploying open-source projects on GitHub while continuously improving software engineering, problem-solving, and version control practices.',
  project: 'Portfolio Development',
},
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + achievements.length) % achievements.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Achievements & Certifications
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Key milestones from my learning and development journey
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        {/* Main Achievement Card */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 lg:p-12 shadow-xl overflow-hidden relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="absolute top-6 right-6 text-primary/20">
              <Quote size={80} />
            </div>

            <div className="relative z-10">
              <div className="mb-6">
                <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-medium">
                  Achievement
                </span>
              </div>

              <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 font-medium">
                "{achievements[currentIndex].content}"
              </blockquote>

              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 mr-4">
                  <img
                    src={achievements[currentIndex].image}
                    alt={achievements[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    {achievements[currentIndex].name}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-400">
                    {achievements[currentIndex].role} •{' '}
                    {achievements[currentIndex].company}
                  </p>

                  <p className="text-primary text-sm font-medium">
                    {achievements[currentIndex].project}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-primary to-accent scale-125'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 lg:hidden">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.id}
              className={`bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                "{achievement.content.slice(0, 120)}..."
              </p>

              <h4 className="font-bold text-gray-900 dark:text-white">
                {achievement.name}
              </h4>

              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {achievement.role}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Continuously learning, building projects, and improving my skills.
          </p>

          <button
            onClick={() => {
              const element = document.querySelector('#projects');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
