
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-custom-gray-900 text-custom-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium text-white mb-4">AI Engineer Portfolio</h3>
            <p className="mb-4 text-custom-gray-400 max-w-md">
              Specializing in AI and ML solutions that help businesses innovate and solve complex problems.
            </p>
            <p className="text-custom-gray-400">
              © {currentYear} AI Portfolio. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="text-custom-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-custom-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-custom-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-custom-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-custom-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-custom-gray-400 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-custom-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-custom-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@aiportfolio.com" 
                  className="text-custom-gray-400 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-custom-gray-800 text-center md:text-left">
          <p className="text-custom-gray-500 text-sm">
            Designed and built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
