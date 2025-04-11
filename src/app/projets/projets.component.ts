import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projets',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projets.component.html',
  styleUrl: './projets.component.css'
})
export class ProjectsComponent {
  projects = this.ProjectService.getProjects();
  
  constructor(private ProjectService: 'projectsService') { }
  
  ngOnInit(): void {
    // Initialisation si nécessaire
  }
}


