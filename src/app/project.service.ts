import { Injectable } from '@angular/core';


interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      title: 'Projet 1',
      description: 'Description du premier projet',
      image: 'assets/project1.jpg',
      technologies: ['Angular', 'TypeScript'],
      githubLink: 'https://github.com'
    },
    {
      title: 'Projet 2',
      description: 'Description du deuxième projet',
      image: 'assets/project2.jpg',
      technologies: ['HTML', 'CSS']
    }
  ];

  getProjects() {
    return this.projects;
  }
}
