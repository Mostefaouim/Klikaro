
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
  <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50 -z-10"></div>
    
    {/* Animated background shapes */}
    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-portfolio-blue/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-portfolio-purple/10 rounded-full blur-3xl"></div>
    
    <div className="container-section">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-portfolio-blue font-medium mb-3 animate-fade-in">Welcome to</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Klikaro
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="font-semibold text-portfolio-purple">Your Full Stack Development Partner</span> for beautiful web experiences
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="#projects" className="btn-primary">
            View Our Work
          </a>
          <a href="#contact" className="btn-outline">
            Contact Us
          </a>
        </div>
        
        <div className="animate-bounce-slow mt-16 hidden md:block">
          <a href="#about" className="text-gray-400 hover:text-portfolio-blue transition-colors">
            <ArrowDown size={24} className="mx-auto" />
            <span className="sr-only">Scroll Down</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
