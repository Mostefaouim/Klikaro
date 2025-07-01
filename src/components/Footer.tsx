
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container-section py-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-xl font-bold">
              <span className="text-portfolio-blue">Port</span>folio
            </span>
          </div>
          
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            A full stack developer passionate about building seamless and dynamic web applications from front to back.
          </p>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#hero" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="flex items-center justify-center text-gray-400">
              © {currentYear} Portfolio. Made with 
              <Heart size={16} className="mx-1 text-portfolio-purple" /> 
              by Klikaro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
