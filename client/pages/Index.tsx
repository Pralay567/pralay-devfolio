import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import SkillsGrid from '@/components/sections/SkillsGrid';
import Projects from '@/components/sections/Projects';
import Timeline from '@/components/sections/Timeline';
import Resume from '@/components/sections/Resume';
import Achievements from '@/components/sections/Achievements';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* About Section */}
        <About />
        
        {/* Skills Grid */}
        <SkillsGrid />
        
        {/* Projects Section */}
        <Projects />
        
        {/* Experience & Education Timeline */}
        <Timeline />
        
        {/* Resume Section */}
        <Resume />
        
        {/* Testimonials */}
        <Achievements />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
