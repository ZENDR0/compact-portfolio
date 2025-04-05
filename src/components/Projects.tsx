
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface Project {
  title: string;
  description: string;
  period: string;
  image: string;
  links?: {
    icon: string;
    url: string;
  }[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-4">My Projects</h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
        I've worked on a variety of projects, from simple websites to complex web applications. 
        Here are a few of my favorites.
      </p>
      
      <div className="relative px-4 md:px-10">
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{project.period}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                    
                    {project.links && (
                      <div className="flex gap-2">
                        {project.links.map((link, i) => (
                          <a 
                            key={i}
                            href={link.url}
                            className="w-6 h-6 flex items-center justify-center"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img src={link.icon} alt="link" className="w-4 h-4" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-5" />
          <CarouselNext className="right-0 md:-right-5" />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
