import { Github, Linkedin, Mail, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/pralay-bajkhan-4892a4200',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/Pralay567',
    label: 'GitHub',
  },
  {
    icon: Mail,
    href: 'mailto:pralaybajkhan116@gmail.com',
    label: 'Email',
  },
];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToResume = () => {
    const element = document.querySelector('#resume');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Gradient Background with Profile */}
      <div className="lg:w-1/2 bg-hero-gradient flex flex-col justify-center items-center p-8 lg:p-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-floating"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-white rounded-full animate-floating" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-white rounded-full animate-floating" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Profile Image */}
<div className="relative z-10 mb-8">
  <div className="relative w-64 h-64 lg:w-80 lg:h-80">
    {/* Animated Border */}
    <div className="shine-border"></div>

    {/* Image */}
    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl bg-white">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

        {/* Social Links */}
        <div className="flex space-x-6 z-10">
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="lg:w-1/2 bg-gray-900 text-white flex flex-col justify-center p-8 lg:p-12 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
        </div>

        <div className="relative z-10 max-w-lg">
          {/* Title */}
          <div className="mb-6">
            <p className="text-primary font-medium mb-2 animate-fade-in-down">
              AI & ML Engineer | Data Analyst
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
              Pralay Bajkhan
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-slide-in-left"></div>
          </div>

          {/* Description */}
          <p
          className="text-gray-300 text-lg leading-relaxed mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
          >
            B.Tech graduate in Computer Science Engineering (AI & ML) with strong
            foundations in Python, SQL, Machine Learning, Data Analytics, and Power BI.
            Passionate about building intelligent applications and transforming data into
            actionable insights through real-world projects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={scrollToResume}
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Download CV
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 transition-all duration-300 group"
            >
              <MessageCircle className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Contact Me
            </Button>
          </div>

          {/* Stats */}
          <div className="flex space-x-8 mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">AI & ML</div>
              <div className="text-sm text-gray-400">Specialization</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Python </div>
              <div className="text-sm text-gray-400">SQL & Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
