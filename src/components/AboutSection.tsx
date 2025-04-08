
import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-custom-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h2 className="text-3xl font-bold text-custom-black mb-6">About Me</h2>
            <div className="space-y-4 text-custom-gray-700">
              <p>
                I'm an experienced AI Engineer with a passion for developing cutting-edge 
                machine learning solutions that solve real-world problems. With a background 
                in computer science and mathematics, I bring a comprehensive understanding of 
                both theoretical concepts and practical applications in artificial intelligence.
              </p>
              <p>
                Throughout my career, I've worked on a diverse range of projects including 
                computer vision systems, natural language processing applications, recommender 
                systems, and predictive analytics platforms. I'm particularly interested in 
                the ethical implications of AI and ensuring that the technologies we build 
                serve humanity in positive ways.
              </p>
              <p>
                When I'm not training neural networks or fine-tuning models, you can find me 
                contributing to open-source projects, writing technical articles, or mentoring 
                aspiring data scientists and AI engineers.
              </p>
            </div>
            
            <Button 
              className="mt-8 bg-custom-black hover:bg-custom-gray-700 text-white" 
              asChild
            >
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <div className="relative">
              <div className="aspect-[4/5] bg-custom-gray-200 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center bg-custom-gray-300">
                  <span className="text-custom-gray-500 text-lg">About Image</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-1/2 border-4 border-custom-gray-300 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-custom-black mb-8 text-center">Experience</h3>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start animate-fade-in">
              <div className="md:col-span-3 text-custom-gray-500 text-sm md:text-right">
                <p>2021 - Present</p>
              </div>
              <div className="md:col-span-9">
                <h4 className="text-xl font-semibold text-custom-black">Senior AI Engineer</h4>
                <p className="text-custom-gray-600 mb-2">Tech Innovations Inc.</p>
                <p className="text-custom-gray-700">
                  Leading the development of computer vision systems for autonomous vehicles. 
                  Architecting and deploying deep learning models for real-time object detection 
                  and scene understanding. Collaborating with cross-functional teams to integrate 
                  AI solutions into production environments.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start animate-fade-in">
              <div className="md:col-span-3 text-custom-gray-500 text-sm md:text-right">
                <p>2018 - 2021</p>
              </div>
              <div className="md:col-span-9">
                <h4 className="text-xl font-semibold text-custom-black">Machine Learning Engineer</h4>
                <p className="text-custom-gray-600 mb-2">DataDrive Solutions</p>
                <p className="text-custom-gray-700">
                  Developed and deployed NLP models for sentiment analysis and text classification. 
                  Built recommendation engines using collaborative filtering and deep learning. 
                  Improved model performance through feature engineering and hyperparameter tuning.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start animate-fade-in">
              <div className="md:col-span-3 text-custom-gray-500 text-sm md:text-right">
                <p>2016 - 2018</p>
              </div>
              <div className="md:col-span-9">
                <h4 className="text-xl font-semibold text-custom-black">Data Scientist</h4>
                <p className="text-custom-gray-600 mb-2">AnalyticsPro</p>
                <p className="text-custom-gray-700">
                  Conducted exploratory data analysis and feature engineering. Implemented 
                  machine learning models for predictive analytics. Created interactive 
                  dashboards for data visualization and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
