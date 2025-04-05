
import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  href: string;
}

interface ContactProps {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

const Contact: React.FC<ContactProps> = ({ email, phone, linkedin, github }) => {
  const contactLinks: ContactLink[] = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: email,
      href: `mailto:${email}`,
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: phone,
      href: `tel:${phone}`,
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: linkedin,
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: github,
    },
  ];

  return (
    <section className="mb-12" id="contact">
      <h2 className="text-xl font-bold mb-6">Contact</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <div className="text-primary">{link.icon}</div>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
