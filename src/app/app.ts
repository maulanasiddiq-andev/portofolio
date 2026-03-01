import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './interfaces/project_interface';

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

  projects: Project[] = [
    {
      title: 'Everyday Quiz - Mobile App',
      description: 'The frontend application for the quiz platform, designed for a seamless cross-platform experience on iOS and Android. It focuses on user engagement, interactive exam interfaces, and intuitive quiz creation.',
      techStack: ['Flutter', 'Dart', 'Riverpod', 'Go Router', 'Dio', 'JSON Serialization', 'Mistral AI'],
      features: [
        'Secure Authentication with Google Sign-In and OTP', 
        'Interactive Exam Interface with countdown timers, progress monitoring, and drawer navigation', 
        'Step-by-step quiz creation with rich media support (image uploads)',
        'AI-powered quiz generation assistant'
      ],
      repoLink: 'https://github.com/maulanasiddiq-andev/quiz-app-mobile',
      // demoLink: 'https://demo.com/'
    },
    {
      title: 'Everyday Quiz - Main API',
      description: 'The central backend service responsible for managing application logic, user data, quiz content, and secure API endpoints. It serves as the bridge between the mobile app and the infrastructure services.',
      techStack: ['.NET Core', 'PostgreSQL', 'Redis', 'Entity Framework Core', 'JWT Authentication', 'GCP', 'RabbitMQ (Producer)'],
      features: [
        'Dynamic Role-Based Access Control (RBAC)', 
        'Secure JWT Authentication and OAuth2 integration', 
        'Asynchronous task delegation via RabbitMQ',
        'High-performance data caching with Redis'
      ],
      repoLink: 'https://github.com/maulanasiddiq-andev/quiz-api',
      // documentationLink: 'https://documenter.getpostman.com/view/22489595/2sA35J5285'
    },
    {
      title: 'Everyday Quiz - Worker Service',
      description: 'A background consumer service designed for asynchronous processing to offload heavy tasks from the Main API, ensuring high system availability and responsiveness.',
      techStack: ['.NET Core', 'RabbitMQ (Consumer)', 'GCP'],
      features: [
        'Asynchronous OTP email processing via message broker', 
        'Real-time push notification delivery upon quiz completion'
      ],
      repoLink: 'https://github.com/maulanasiddiq-andev/quiz-api-worker',
    }
  ];

  experiences = [
    {
      company: 'inovasy.com',
      title: 'Software Engineer Intern',
      date: 'Mar 2024 - May 2025',
      accomplishments: [
        'Integrated WhatsApp API to enhance employee–customer communication',
        'Developed a Task Management module to monitor employee daily task completion',
        'Redesigned application UI using Angular 15 and Bootstrap to improve usability and interface consistency'
      ]
    }
  ];

  education = [
    {
      degree: 'Bachelor of Arabic Literature',
      university: 'LIPIA Jakarta',
      major: 'Arabic Language and Literature',
      date: 'Jan 2023 - Dec 2026 (expected)'
    }
  ];

  // Helper for progress bar
  getProficiencyArray(level: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < level);
  }
}
