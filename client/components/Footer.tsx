import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
    ],
    'More': [
      { label: 'Education', href: '#experience' },
      { label: 'Certifications', href: '#certifications' },
      { label: 'Contact', href: '#contact' },
    ]
  };

  const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Pralay567',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/pralay-bajkhan-4892a4200',
    label: 'LinkedIn',
  },
];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  Pralay Bajkhan
                </h3>
                <p className="text-gray-400 mb-4">
                  AI & Machine Learning Graduate passionate about building intelligent systems,
                  data-driven solutions, and impactful software applications.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-gray-400">
                <p>📧 pralaybajkhan116@gmail.com</p>
                <p>📱 +91 8670508885</p>
                <p>📍 West Bengal, India</p>
              </div>
            </div>

            {/* Navigation Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-lg font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-400 hover:text-white transition-colors duration-300 text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-gray-400 mb-4 md:mb-0">
                <span>© {currentYear} Pralay Bajkhan. Built with</span>
                <Heart size={16} className="mx-1 text-red-500 fill-current" />
                <span>using React, TypeScript & Tailwind CSS</span>
              </div>
              
              <div className="flex items-center space-x-4">
                 <span className="text-gray-400 text-sm">
                 Open to Internship & Entry-Level Opportunities
                 </span>

                <button
               onClick={scrollToTop}
               className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 hover:scale-110 group"
               aria-label="Back to top"
               >
               <ArrowUp
              size={18}
              className="group-hover:animate-bounce"
              />
              </button>
            </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      </div>
    </footer>
  );
};

export default Footer;
