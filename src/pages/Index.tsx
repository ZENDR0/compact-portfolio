
import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import { DockMenu } from '../components/DockMenu';

const Index = () => {
  // Sample data for the portfolio
  const workExperience = [
    {
      company: 'Atomic Finance',
      title: 'Bitcoin Protocol Engineer',
      period: 'May 2021 - Oct 2022',
      logo: '/atomic.svg',
    },
    {
      company: 'Shopify',
      title: 'Software Engineer',
      period: 'January 2021 - April 2021',
      logo: '/shopify.svg',
    },
    {
      company: 'Nesto',
      title: 'Software Engineer',
      period: 'January 2020 - April 2020',
      logo: '/nesto.svg',
    },
    {
      company: 'Sphere',
      title: 'Software Engineer',
      period: 'January 2019 - April 2019',
      logo: '/sphere.svg',
    },
    {
      company: 'Lime',
      title: 'Software Engineer',
      period: 'January 2018 - April 2018',
      logo: '/lime.svg',
    },
    {
      company: 'Micro Media',
      title: 'Software Engineer',
      period: 'May 2017 - August 2017',
      logo: '/micro.svg',
    },
  ];

  const education = [
    {
      institution: 'Buildspace',
      degree: 'S3, n4, n5',
      period: '2023 - 2024',
      logo: '/buildspace.svg',
    },
    {
      institution: 'University of Waterloo',
      degree: "Bachelor's Degree of Computer Science (BCS)",
      period: '2016 - 2021',
      logo: '/waterloo.svg',
    },
    {
      institution: 'Wilfrid Laurier University',
      degree: 'Bachelor of Business Administration (BBA)',
      period: '2016 - 2021',
      logo: '/laurier.svg',
    },
    {
      institution: 'International Baccalaureate',
      degree: 'IB Diploma',
      period: '2012 - 2016',
      logo: '/ib.svg',
    },
  ];

  const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'SQL', 'MongoDB', 'Docker',
    'GraphQL', 'Redux', 'CSS'
  ];

  const projects = [
    {
      title: 'Chat Collect',
      description: 'Web app for collecting emails from your GPT conversations',
      period: 'Jan 2024 - Feb 2024',
      image: 'https://placehold.co/600x400/ff6b6b/fff',
      links: [
        { icon: '/github.svg', url: 'https://github.com' },
        { icon: '/link.svg', url: 'https://example.com' }
      ]
    },
    {
      title: 'Magic UI',
      description: 'CSS and automated UI components for rapid development',
      period: 'June 2022 - Present',
      image: 'https://placehold.co/600x400/4ecdc4/fff',
      links: [
        { icon: '/github.svg', url: 'https://github.com' },
        { icon: '/link.svg', url: 'https://example.com' }
      ]
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 animate-fade-in">
      <Header 
        name="John Doe" 
        title="Software Engineer turned Entrepreneur."
        twitter="@johndoe"
      />
      
      <About 
        content={
          <div>
            <p>At the end of 2022, I quit my job as a software engineer to go full-time into building and scaling my business. I learned a mobile theme in computer science and business, interned at big tech companies in Silicon Valley, and completed a master of bootcamps for fun. I also had the pleasure of being a part of the first ever in-person cohort of bootcamp.co</p>
          </div>
        }
      />
      
      <WorkExperience items={workExperience} />
      
      <Education items={education} />
      
      <Skills skills={skills} />
      
      <Projects projects={projects} />
      
      <DockMenu />
    </div>
  );
};

export default Index;
