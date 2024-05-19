import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
      <p className="text-lg mb-8 text-center">
        Feel free to reach out for collaboration or inquiries.
      </p>
      <ul className="contact-list list-none space-y-4">
        <li className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faEnvelope} className="text-xl text-gray-600" />
          <a href="mailto:sahilali.raza9@gmail.com" className="text-lg text-blue-600 hover:underline">sahilali.raza9@gmail.com</a>
        </li>
        <li className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-600" />
          <a href="https://www.linkedin.com/in/sahid-ali-raza-104533245/" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 hover:underline">LinkedIn</a>
        </li>
        <li className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faGithub} className="text-xl text-gray-600" />
          <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 hover:underline">GitHub</a>
        </li>
        <li className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhone} className="text-xl text-gray-600" />
          <a href="tel:9875534510" className="text-lg text-blue-600 hover:underline">9875534510</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
