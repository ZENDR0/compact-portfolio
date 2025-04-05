
import React, { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * (isMobile ? 0.8 : 0.5);
      
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="mb-12 relative">
      <h2 className="text-xl font-bold mb-6">Projects</h2>
      
      <div className="relative">
        <button 
          onClick={() => scroll('left')} 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div 
          className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory gap-4 pb-4" 
          ref={scrollRef}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="min-w-[280px] sm:min-w-[320px] max-w-[400px] flex-shrink-0 snap-start"
            >
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
          ))}
        </div>
        
        <button 
          onClick={() => scroll('right')} 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-md"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Projects;
