import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const frontendSkills = [
    { name: 'HTML / CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'Bootstrap CSS', level: 85 },
    { name: 'React Js ', level: 70 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'Php', level: 80 },
    { name: 'Mysql', level: 85 },
    { name: 'Supabase', level: 80 },
    { name: 'RESTful APIs', level: 85 },
  ];

  const otherSkills = [
    { name: 'Git / GitHub', level: 90 },
    { name: 'XAMPP', level: 90 },
    { name: 'Testing', level: 75 },
    { name: 'Performance Optimization', level: 75 },
  ];

  const SkillBar = ({ name, level }: { name: string; level: number }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="font-medium">{name}</span>
          <span className="text-gray-500">{level}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple h-2.5 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: isVisible ? `${level}%` : '0%',
              transitionDelay: '0.1s'
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-white" ref={sectionRef}>
      <div className="container-section">
        <h2 className="section-title text-center mx-auto">My Skills</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Here's an overview of my technical skills and proficiency levels. I'm constantly learning
          and expanding my knowledge in these areas.
        </p>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className={`p-6 rounded-xl bg-gray-50 shadow-sm ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h3 className="text-xl font-semibold mb-6 text-portfolio-blue">Frontend</h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          <div className={`p-6 rounded-xl bg-gray-50 shadow-sm ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6 text-portfolio-purple">Backend</h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
          
          <div className={`p-6 rounded-xl bg-gray-50 shadow-sm ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-semibold mb-6 text-portfolio-teal">Other Skills</h3>
            {otherSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
        
        {/* Download button moved outside the grid and properly centered */}
        {/* <div className="flex justify-center mt-10">
          <a 
            href="https://eattnoxdvsftpyaztuxd.supabase.co/storage/v1/object/sign/portfolio/MYCV.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzU5NGM4Zjk4LTVlNWMtNDJhNC1iODlmLWY2OWQ0ZTZiYmI4NSJ9.eyJ1cmwiOiJwb3J0Zm9saW8vTVlDVi5wZGYiLCJpYXQiOjE3NDY3MjI5MzksImV4cCI6MjA2MjA4MjkzOX0.QaDjYWOGO9Sw-l3NjyCug95urSvKGUlK-cvKlrK15o8" 
            download="My_CV.pdf"
            target="_blank"
            className="inline-block px-6 py-3 text-white bg-gradient-to-r from-portfolio-blue to-portfolio-purple rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:ring-opacity-50"
          >
            View CV
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
