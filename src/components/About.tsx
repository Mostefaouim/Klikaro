
import { Briefcase, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  return (
<section id="about" className="py-20 bg-white">
  <div className="container-section">
    <h2 className="section-title text-center mx-auto">About Klikaro</h2>
    
    <div className="grid md:grid-cols-2 gap-10 mt-12">
      {/* Company Image or Logo */}
      <div className="flex justify-center md:justify-end">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-blue shadow-lg">
            <img 
              src="https://eattnoxdvsftpyaztuxd.supabase.co/storage/v1/object/sign/portfolio/Klikaro.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MzE4MThjNC0zYjU5LTQ5YjctYmYwZS0xNGEyYmQzYTEwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vS2xpa2Fyby5wbmciLCJpYXQiOjE3NTEzNjg0MTMsImV4cCI6MTc4MjkwNDQxM30.Q5nQdu6Vi-PA-fVJNOjN6U9Th4vRH4gSFqioJeolZ14" 
              alt="Klikaro Company Photo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
            <Heart size={32} className="text-portfolio-purple" />
          </div>
        </div>
      </div>
      
      {/* Company Bio */}
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-4">Who are we?</h3>
        <p className="text-gray-700 mb-6">
          Klikaro is a passionate full-stack development company specializing in creating responsive and dynamic web applications. With 2+ years of experience, our team excels in the MERN stack and PHP/MySQL, delivering robust solutions for businesses of all sizes.
        </p>
        <p className="text-gray-700 mb-8">
          We are dedicated to staying ahead of tech trends, writing clean and maintainable code, and crafting seamless user experiences. Our mission is to build web solutions that are both functional and memorable, helping our clients succeed in the digital world.
        </p>
        
        {/* Experience */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg hover-card">
            <Briefcase className="text-portfolio-blue mb-2" size={24} />
            <h4 className="font-semibold">Experience</h4>
            <p className="text-sm text-gray-600">2+ Years</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg hover-card">
            <GraduationCap className="text-portfolio-purple mb-2" size={24} />
            <h4 className="font-semibold">Expertise</h4>
            <p className="text-sm text-gray-600">Full Stack Development</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;
