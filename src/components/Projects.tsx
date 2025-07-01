
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Shopora',
      description: 'Shopora is a modern e-commerce web application built using PHP, MySQL, and Supabase. It allows administrators to manage products and users to browse, add products to their shopping cart, and make purchases.',
      image: 'https://eattnoxdvsftpyaztuxd.supabase.co/storage/v1/object/sign/portfolio/360_F_1041412393_U9r90YZjIorGPHs5STzcKZTFeymuxjGr.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MzE4MThjNC0zYjU5LTQ5YjctYmYwZS0xNGEyYmQzYTEwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vMzYwX0ZfMTA0MTQxMjM5M19VOXI5MFlaaklvckdQSHM1U1R6Y0taVEZleW11eGpHci53ZWJwIiwiaWF0IjoxNzUxMzY4NTc5LCJleHAiOjE3ODI5MDQ1Nzl9.zmT9Du6oq5zDQ67ihCxmWJZGe31rUsxV6pamgenyVOU',
      tags: ['HTML/CSS/JS','PHP', 'BOOTSTRAP', 'MYSQL'],
      github: 'https://github.com/Mostefaouim/Shopora',
    },
    {
      id: 2,
      title: 'Acadexis',
      description: 'Is a web-based school management system developed in PHP. It facilitates the administration of educational institutions by providing tools to manage students, teachers, courses, grades, and more.',
      image: 'https://eattnoxdvsftpyaztuxd.supabase.co/storage/v1/object/sign/portfolio/students-with-raised-hands-in-classroom.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MzE4MThjNC0zYjU5LTQ5YjctYmYwZS0xNGEyYmQzYTEwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vc3R1ZGVudHMtd2l0aC1yYWlzZWQtaGFuZHMtaW4tY2xhc3Nyb29tLndlYnAiLCJpYXQiOjE3NTEzNjg2MDEsImV4cCI6MTc4MjkwNDYwMX0.8wQV7Tv44B7vsMAVmSrY4KGRiASjP0LCscURXouvPdg',
      tags: ['HTML/CSS/JS','PHP','MYSQL'],
      github: 'https://github.com/Mostefaouim/EduSys',
    },
    {
      id: 3,
      title: 'Lawdz',
      description: 'Lawdz is a web application designed to provide legal services and tools, leveraging AI and MongoDB for advanced functionalities. The project is structured into a backend and frontend, with a focus on scalability, security, and modularity.',
      image: 'https://eattnoxdvsftpyaztuxd.supabase.co/storage/v1/object/sign/portfolio/lawyer-working-document-with-scales-justice_23-2151962523.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MzE4MThjNC0zYjU5LTQ5YjctYmYwZS0xNGEyYmQzYTEwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vbGF3eWVyLXdvcmtpbmctZG9jdW1lbnQtd2l0aC1zY2FsZXMtanVzdGljZV8yMy0yMTUxOTYyNTIzLndlYnAiLCJpYXQiOjE3NTEzNjg2MTgsImV4cCI6MTc4MjkwNDYxOH0.VOeRQRIrmcOXuOLtgTvd7qJxwttLhHFriQUDgvV-ktM',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      demo :'https://lawdz.onrender.com'
    },
    {
      id: 4,
      title: 'IntelliSearch',
      description: 'This application allows users to load textual documents, index them using the TF-IDF (Term Frequency-Inverse Document Frequency) method, and perform searches within these documents.',
      image: 'https://eattnoxdvsftpyaztuxd.supabase.co/storage/v1/object/sign/portfolio/TF_IDF.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV80MzE4MThjNC0zYjU5LTQ5YjctYmYwZS0xNGEyYmQzYTEwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwb3J0Zm9saW8vVEZfSURGLnBuZyIsImlhdCI6MTc1MTM2ODYzMSwiZXhwIjoxNzgyOTA0NjMxfQ.ztsrmGj9ZjFxsOaeWVDN1FuKaX4PAQMxRE8Vz125xgI',
      tags: ['React', 'Node.js', 'Css'],
      github :'https://github.com/Mostefaouim/IntelliSearch',
      demo:'https://intelli-search.onrender.com'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-section">
        <h2 className="section-title text-center mx-auto">My Projects</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Here are some of my recent projects. Each one was carefully crafted with attention to detail, 
          performance, and user experience.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover-card"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-blue-50 text-portfolio-blue text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.github && (
                  <a 
                    href={project.github} 
                    className="flex items-center text-gray-700 hover:text-portfolio-blue transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-1" />
                    <span>Code</span>
                  </a>
                  )}
                  {project.demo && (
                  <a 
                    href={project.demo} 
                    className="flex items-center text-gray-700 hover:text-portfolio-purple transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>Demo</span>
                  </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
