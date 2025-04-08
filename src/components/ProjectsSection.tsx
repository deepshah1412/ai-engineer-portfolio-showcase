
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

// Project data
const projectsData = [
  {
    id: 1,
    title: "Neural Network Image Classifier",
    description: "A deep learning model for image classification achieving 97% accuracy on benchmark datasets.",
    tags: ["Deep Learning", "Computer Vision", "PyTorch"],
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "#",
    category: "deep-learning",
  },
  {
    id: 2,
    title: "NLP Sentiment Analyzer",
    description: "Real-time sentiment analysis API that processes and categorizes text data with high precision.",
    tags: ["NLP", "Text Processing", "BERT", "API"],
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "#",
    category: "nlp",
  },
  {
    id: 3,
    title: "Predictive Analytics Dashboard",
    description: "Interactive dashboard visualizing ML model predictions for business metrics forecasting.",
    tags: ["Data Visualization", "Predictive Modeling", "React"],
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "#",
    category: "data-science",
  },
  {
    id: 4,
    title: "Reinforcement Learning Agent",
    description: "An RL agent trained to optimize complex systems in simulated environments.",
    tags: ["Reinforcement Learning", "AI", "Optimization"],
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "#",
    category: "reinforcement-learning",
  },
  {
    id: 5,
    title: "Anomaly Detection System",
    description: "Real-time system that identifies anomalies in multivariate time series data.",
    tags: ["Anomaly Detection", "Time Series", "ML"],
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "#",
    category: "data-science",
  },
  {
    id: 6,
    title: "AI Research Paper Generator",
    description: "Transformer-based model that generates research paper abstracts from keywords.",
    tags: ["Transformers", "GPT", "Research"],
    image: "/placeholder.svg",
    demoLink: "#",
    githubLink: "#",
    category: "nlp",
  }
];

// Category filter options
const categories = [
  { id: "all", name: "All" },
  { id: "deep-learning", name: "Deep Learning" },
  { id: "nlp", name: "NLP" },
  { id: "data-science", name: "Data Science" },
  { id: "reinforcement-learning", name: "Reinforcement Learning" }
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24 bg-custom-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-custom-black mb-4">Projects</h2>
          <p className="text-custom-gray-600 mb-8">
            A showcase of my work in artificial intelligence, machine learning, and data science.
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <Button
                key={category.id}
                variant={filter === category.id ? "default" : "outline"}
                className={filter === category.id 
                  ? "bg-custom-black text-white hover:bg-custom-gray-700" 
                  : "text-custom-gray-800 border-custom-gray-300 hover:bg-custom-gray-200"
                }
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="bg-white border-custom-gray-200 hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full animate-fade-in"
            >
              <div className="aspect-video bg-custom-gray-200 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-custom-black">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-custom-gray-600 mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      className="bg-custom-gray-200 text-custom-gray-700 hover:bg-custom-gray-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-custom-gray-200 pt-4">
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-custom-gray-700 hover:text-custom-black inline-flex items-center gap-1 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </a>
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-custom-gray-700 hover:text-custom-black inline-flex items-center gap-1 text-sm"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
