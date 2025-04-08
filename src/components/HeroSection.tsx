
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-custom-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-custom-black animate-fade-in">
                AI Engineer <span className="text-custom-gray-500">Portfolio</span>
              </h1>
              <p className="text-xl text-custom-gray-600 max-w-2xl animate-fade-in" style={{ animationDelay: "100ms" }}>
                Specializing in machine learning, deep learning, and AI solutions
                that drive innovation and solve complex problems.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "200ms" }}>
              <Button 
                className="bg-custom-black hover:bg-custom-gray-700 text-white"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                variant="outline" 
                className="border-custom-gray-300 text-custom-gray-800 hover:bg-custom-gray-100"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: "300ms" }}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-custom-gray-600 hover:text-custom-gray-900 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-custom-gray-600 hover:text-custom-gray-900 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:email@example.com" 
                className="text-custom-gray-600 hover:text-custom-gray-900 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-auto md:mx-0">
            <div className="aspect-square rounded-2xl bg-custom-gray-100 shadow-lg overflow-hidden relative animate-fade-in" style={{ animationDelay: "400ms" }}>
              <div className="absolute inset-0 flex items-center justify-center bg-custom-gray-200">
                <span className="text-custom-gray-500 text-lg">Profile Image</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: "500ms" }}>
          <a 
            href="#projects" 
            className="flex flex-col items-center text-custom-gray-500 hover:text-custom-gray-700 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
