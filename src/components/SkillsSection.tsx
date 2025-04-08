
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Machine Learning",
    skills: [
      { name: "Supervised Learning", level: 95 },
      { name: "Unsupervised Learning", level: 90 },
      { name: "Reinforcement Learning", level: 85 },
      { name: "Feature Engineering", level: 92 },
    ]
  },
  {
    title: "Deep Learning",
    skills: [
      { name: "Neural Networks", level: 95 },
      { name: "CNN", level: 90 },
      { name: "RNN/LSTM", level: 88 },
      { name: "Transformers", level: 85 },
    ]
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 98 },
      { name: "R", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 88 },
    ]
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      { name: "TensorFlow", level: 92 },
      { name: "PyTorch", level: 90 },
      { name: "Scikit-learn", level: 95 },
      { name: "Docker", level: 88 },
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-custom-black mb-4">Skills & Expertise</h2>
          <p className="text-custom-gray-600">
            My technical skills and competencies in AI, machine learning, and data science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="border-custom-gray-200 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-medium text-custom-black mb-6">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-custom-gray-800">{skill.name}</span>
                        <span className="text-custom-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-custom-gray-200"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-custom-gray-100 p-8 rounded-lg animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl font-medium text-custom-black mb-4">Data Science</h3>
            <ul className="space-y-2 text-custom-gray-700">
              <li>Data Processing & Cleaning</li>
              <li>Statistical Analysis</li>
              <li>Data Visualization</li>
              <li>Exploratory Data Analysis</li>
              <li>Predictive Modeling</li>
            </ul>
          </div>

          <div className="bg-custom-gray-100 p-8 rounded-lg animate-fade-in" style={{ animationDelay: "500ms" }}>
            <h3 className="text-xl font-medium text-custom-black mb-4">AI Applications</h3>
            <ul className="space-y-2 text-custom-gray-700">
              <li>Computer Vision</li>
              <li>Natural Language Processing</li>
              <li>Time Series Analysis</li>
              <li>Recommendation Systems</li>
              <li>Generative AI</li>
            </ul>
          </div>

          <div className="bg-custom-gray-100 p-8 rounded-lg animate-fade-in" style={{ animationDelay: "600ms" }}>
            <h3 className="text-xl font-medium text-custom-black mb-4">Tools & Platforms</h3>
            <ul className="space-y-2 text-custom-gray-700">
              <li>AWS / Google Cloud</li>
              <li>Kubernetes</li>
              <li>Git & GitHub</li>
              <li>Jupyter / Colab</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
