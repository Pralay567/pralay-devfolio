import { useEffect, useRef } from 'react';
import { Download, Eye, FileText, Award, CheckCircle } from 'lucide-react';

const Resume = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const resumeHighlights = [
    {
      icon: Award,
      text: 'B.Tech CSE (AI & ML)',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: CheckCircle,
      text: '5+ Projects Completed',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: FileText,
      text: 'Machine Learning & Data Analytics',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Award,
      text: 'Multiple Certifications',
      color: 'from-orange-400 to-orange-600',
    },
  ];

  const skills = {
    Frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    Backend: ['Python', 'Flask', 'FastAPI', 'SQL'],
    'AI & ML': ['Machine Learning', 'Scikit-Learn', 'NLP', 'Pandas'],
    Tools: ['Git', 'GitHub', 'Power BI', 'VS Code'],
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {},
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Pralay_Bajkhan_Resume.pdf';
  link.download = 'Pralay_Bajkhan_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handlePreview = () => {
  window.open('/Pralay_Bajkhan_Resume.pdf', '_blank');
};

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Download my complete professional profile
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">

              {/* Resume Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  Pralay Bajkhan
                </h3>

                <p className="text-white/90 mb-2">
                  Aspiring Data Analyst & Machine Learning Engineer
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-white/80">
                  <span>📧 pralaybajkhan116@gmail.com</span>
                  <span>📱 +91 8670508885</span>
                  <span>📍 West Bengal, India</span>
                </div>
              </div>

              {/* Resume Content */}
              <div className="p-6 space-y-6">

                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Professional Summary
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    B.Tech graduate in Computer Science Engineering (AI & ML)
                    with strong foundations in Python, SQL, Machine Learning,
                    Data Analytics, and Business Intelligence. Passionate about
                    building AI-powered applications and solving real-world
                    problems through data-driven solutions.
                  </p>
                </div>

                {/* Skills Preview */}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Core Skills
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <div key={category}>
                        <h5 className="font-medium text-primary text-sm mb-1">
                          {category}
                        </h5>

                        <div className="flex flex-wrap gap-1">
                          {skillList.slice(0, 3).map((skill) => (
                            <span
                              key={skill}
                              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                            >
                              {skill}
                            </span>
                          ))}

                          {skillList.length > 3 && (
                            <span className="text-xs text-gray-500">
                              +{skillList.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    Featured Projects
                  </h4>

                  <div className="space-y-3">

                    <div className="border-l-2 border-primary pl-3">
                      <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                        Fake News Detection System
                      </h5>

                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Machine Learning • NLP • Streamlit
                      </p>
                    </div>

                    <div className="border-l-2 border-accent pl-3">
                      <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                        Business Analytics Dashboard
                      </h5>

                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Power BI • SQL • Data Analysis
                      </p>
                    </div>

                    <div className="border-l-2 border-green-500 pl-3">
                      <h5 className="font-medium text-gray-900 dark:text-white text-sm">
                        Election Guide Assistant
                      </h5>

                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Gemini AI • Streamlit • Maps Integration
                      </p>
                    </div>

                  </div>
                </div>

              </div>

              {/* Preview Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 dark:from-gray-900/40 via-transparent to-transparent pointer-events-none"></div>

            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePreview}
                className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center"
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview Resume
              </button>

              <button
                onClick={handleDownload}
                className="flex-1 bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Resume Highlights
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {resumeHighlights.map((highlight) => (
                  <div
                    key={highlight.text}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${highlight.color} rounded-lg flex items-center justify-center mb-3`}
                    >
                      <highlight.icon size={20} className="text-white" />
                    </div>

                    <p className="font-medium text-gray-900 dark:text-white text-sm">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Technical Expertise
              </h3>

              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div
                    key={category}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm"
                  >
                    <h4 className="font-medium text-primary mb-3">
                      {category}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Interested in working together?
              </h4>

              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                Let's discuss how I can contribute to your team and projects.
              </p>

              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg"
              >
                Get In Touch
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;