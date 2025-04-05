
import React from 'react';

interface WorkItem {
  company: string;
  title: string;
  period: string;
  logo: string;
}

interface WorkExperienceProps {
  items: WorkItem[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ items }) => {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-5">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center shadow-sm">
              <img src={item.logo} alt={item.company} className="w-20 h-20 object-contain" />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full">
              <div>
                <div className="font-medium">{item.company}</div>
                <div className="text-sm text-gray-600">{item.title}</div>
              </div>
              <div className="text-sm text-gray-600 mt-1 sm:mt-0">
                {item.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
