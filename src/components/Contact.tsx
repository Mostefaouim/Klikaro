
import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitMessage('Thanks for your message! I\'ll get back to you soon.');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-section">
        <h2 className="section-title text-center mx-auto">Get In Touch</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Feel free to contact me for any work or suggestions. I'm always open to discussing new
          projects, creative ideas, or opportunities to be part of your vision.
        </p>

        {/* Centered Grid */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                    <Mail className="text-portfolio-blue" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                    <a href="mailto:klikaro.dev@gmail.com" className="text-gray-800 hover:text-portfolio-blue transition-colors">
                      klikaro.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-50 flex items-center justify-center mr-4">
                    
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-portfolio-purple" width={20} height={20} viewBox="0 0 24 24" fill="none">
                      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.099 3.205 5.077 4.372.71.306 1.263.489 1.695.626.713.227 1.362.195 1.874.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 0 1 2.1 12.893c0-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.899 6.987c-.003 5.45-4.437 9.883-9.887 9.883zm8.413-18.297A11.815 11.815 0 0 0 11.988 0C5.373 0 0 5.373 0 11.888c0 2.096.547 4.142 1.588 5.945L.057 23.925a1.001 1.001 0 0 0 1.225 1.225l6.111-1.601a11.86 11.86 0 0 0 4.595.934h.005c6.615 0 11.988-5.373 11.988-11.888 0-3.182-1.24-6.174-3.504-8.452z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/213562398980"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 hover:text-portfolio-purple transition-colors"
                    >
                      +(213) 562-398-980
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center mr-4">
                    <MapPin className="text-portfolio-teal" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Location</h4>
                    <p className="text-gray-800">Sidi Bel Abbes, Algeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
