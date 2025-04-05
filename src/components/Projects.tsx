
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation
} from '@/components/ui/custom-carousel';

interface ProjectLink {
  icon: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  period: string;
  image: string;
  links: ProjectLink[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="mb-12 relative">
      <h2 className="text-xl font-bold mb-6">Projects</h2>
      
      <div className="relative w-full px-4">
        <Carousel>
          <CarouselContent className="-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={index} className="basis-full sm:basis-1/2 md:basis-1/3 pl-4">
                <Card className="h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{project.period}</p>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex gap-2">
                      {project.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={link.icon}
                            alt="Link"
                            className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity"
                          />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation 
            className="absolute -bottom-10 left-auto top-auto w-full justify-end gap-2" 
            classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
            alwaysShow
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
