import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isScrolled = false;
  isDarkMode = true;
  isNavbarCollapsed = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-bs-theme', this.isDarkMode ? 'dark' : 'light');
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  closeNavbar() {
    this.isNavbarCollapsed = true;
  }

  // Data for sections
  technicalSkills = [
    { category: 'Programming Languages', items: ['HTML/CSS', 'TypeScript', 'JavaScript', 'Dart', 'C#'] },
    { category: 'Frameworks', items: ['Angular', 'Bootstrap', 'ASP.NET Core', 'Flutter'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Postman', 'Visual Studio Code'] },
    { category: 'Platforms', items: ['GCP'] },
    { category: 'Database Systems', items: ['PostgreSQL', 'MySQL', 'Redis', 'Firebase'] }
  ];

  languages = [
    { name: 'Indonesian', proficiency: 5 },
    { name: 'English', proficiency: 4 },
    { name: 'Arabic', proficiency: 4 },
    { name: 'Japanese', proficiency: 3 },
    { name: 'Mandarin Chinese', proficiency: 3 },
  ];

  projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured scalable e-commerce platform with a modern UI.',
      techStack: ['Angular', 'Node.js', 'PostgreSQL', 'Bootstrap'],
      features: ['User Authentication', 'Shopping Cart', 'Payment Integration'],
      repoLink: 'https://github.com/',
      demoLink: 'https://demo.com/'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application for teams.',
      techStack: ['React', 'Firebase', 'Tailwind CSS'],
      features: ['Real-time updates', 'Drag and drop boards', 'Team roles'],
      repoLink: 'https://github.com/',
      demoLink: 'https://demo.com/'
    }
  ];

  experiences = [
    {
      company: 'Tech Solutions Inc.',
      title: 'Senior Frontend Developer',
      date: 'Jan 2022 - Present',
      accomplishments: [
        'Developed interactive UI components using Angular',
        'Improved page loading speed by 30%',
        'Mentored junior developers and led code reviews'
      ]
    },
    {
      company: 'Digital Creations',
      title: 'Web Developer',
      date: 'Mar 2019 - Dec 2021',
      accomplishments: [
        'Built responsive web applications for various clients',
        'Integrated RESTful APIs and managed application state',
        'Optimized database queries decreasing load times'
      ]
    }
  ];

  education = [
    {
      degree: 'Bachelor of Science',
      university: 'State University of Technology',
      major: 'Computer Science',
      date: 'Graduated: May 2019'
    }
  ];

  // Helper for progress bar
  getProficiencyArray(level: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < level);
  }
}
