
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface HeaderProps {
  name: string;
  title: string;
  twitter?: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, twitter }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
      <div>
        <h1 className="text-4xl font-bold flex items-center gap-2">
          Hi, I&apos;m {name} <span className="wave">👋</span>
        </h1>
        <p className="text-lg mt-2 max-w-lg">
          {title} I love building things and helping people. 
          {twitter && <span> Very active on Twitter.</span>}
        </p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="rounded-full overflow-hidden w-20 h-20 md:w-24 md:h-24 border border-gray-200">
          <img 
            src="/lovable-uploads/fd893cb4-4fa7-427b-85be-92efd06be1d7.png" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Download size={16} />
          <a href="/resume.pdf" download>Download Resume</a>
        </Button>
      </div>
    </div>
  );
};

export default Header;
