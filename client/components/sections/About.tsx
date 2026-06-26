import { useEffect, useRef, useState } from 'react';
import {
  Brain,
  Code,
  Database,
  BarChart3
} from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    {
      name: 'Python',
      percentage: 90,
      color: 'from-primary to-blue-400',
    },
    {
      name: 'Machine Learning',
      percentage: 85,
      color: 'from-accent to-green-400',
    },
    {
      name: 'SQL & Database',
      percentage: 80,
      color: 'from-primary to-accent',
    },
    {
      name: 'Data Analytics',
      percentage: 85,
      color: 'from-blue-500 to-primary',
    },
    {
      name: 'Power BI & Visualization',
      percentage: 75,
      color: 'from-green-500 to-accent',
    },
  ];

  const highlights = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description:
        'Building predictive models and intelligent systems using real-world datasets.',
    },
    {
      icon: Code,
      title: 'Python Development',
      description:
        'Developing scalable applications, automation scripts, and data-driven solutions.',
    },
    {
      icon: Database,
      title: 'SQL & Data Management',
      description:
        'Writing optimized queries and managing structured data efficiently.',
    },
    {
      icon: BarChart3,
      title: 'Business Analytics',
      description:
        'Transforming raw data into actionable insights through dashboards and reports.',
    },
  ];

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

  return (
  <section
    id="about"
    ref={sectionRef}
    className="py-20 bg-gray-50 dark:bg-gray-900"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
      </div>

      {/* About + Image */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT : About */}
        <div className="space-y-6">

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              AI & Machine Learning Enthusiast
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm Pralay Bajkhan, a B.Tech graduate in Computer Science
              Engineering (Artificial Intelligence & Machine Learning)
              with a strong interest in Data Science, Machine Learning,
              Business Analytics, and Software Development.
            </p>
          </div>

          <div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy building practical projects that solve real-world
              problems using Python, SQL, Machine Learning, and Data
              Visualization tools. My goal is to continuously learn,
              innovate, and contribute to impactful technology solutions.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mr-3">
                    <highlight.icon
                      size={16}
                      className="text-white"
                    />
                  </div>

                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {highlight.title}
                  </h4>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT : Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/about.jpg"
            alt="Pralay Bajkhan"
            className="w-[520px] h-[520px] object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>

      {/* Technical Skills */}
      <div className="mt-20 max-w-6xl mx-auto">

        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Technical Skills
        </h3>

        {skills.map((skill, index) => (
          <div key={skill.name} className="mb-7">

            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
              </span>

              <span className="text-gray-500 dark:text-gray-400 text-sm">
                {skill.percentage}%
              </span>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">

              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: isVisible ? `${skill.percentage}%` : "0%",
                  transitionDelay: `${0.5 + index * 0.1}s`,
                }}
              />

            </div>
          </div>
        ))}

        <div className="pt-8">
          <button
            onClick={() => {
              const element = document.querySelector("#resume");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View Resume
          </button>
        </div>

      </div>

    </div>
  </section>
);
};

export default About;