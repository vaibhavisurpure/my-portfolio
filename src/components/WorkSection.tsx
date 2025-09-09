import React from "react";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";

const WorkSection = () => {
  const projects = [
    {
      image: project1,
      title: "Ayurvedayush",
      description: "Clean, modern Ayurveda themed website",
      category: "Web App Design",
      link: "https://ayurvedayush-beta.web.app/home/base",
    },
    {
      image: project2,
      title: "WIT Pilot",
      description:
        "Revamped web app design for Walchand Institute of Technology",
      category: "Web App Design",
      link: "https://wit-pilot.web.app/home/base",
    },
    {
      image: project3,
      title: "Devasthanaum",
      description: "Website Application Design (Landing Page)",
      category: "Website Design",
      link: "https://devasthanaum-demo.web.app/home/base",
    },
  ];

  return (
    <section id="work" className="bg-secondary py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl lg:text-8xl font-black text-primary mb-16 scroll-fade-in">
          Work
        </h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer scroll-scale block"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                key={index}
                className="group cursor-pointer scroll-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-primary rounded-lg overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm font-bold text-secondary/60 mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-black text-secondary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary/80">{project.description}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
