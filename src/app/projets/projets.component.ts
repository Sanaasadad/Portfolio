import { Component } from '@angular/core';

@Component({
  selector: 'app-projet',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent {
  
  projets = [
    {
      titre: "Mon premier projet",
      description: "Un site web simple créé avec HTML/CSS",
      image: "assets/projet1.jpg",
      technologies: ["HTML", "CSS"],
      lienGithub: "https://github.com"
    },
    {
      titre: "Projet Angular", 
      description: "Mon premier essai avec Angular",
      image: "assets/projet2.jpg",
      technologies: ["Angular", "TypeScript"],
      lienDemo: "https://mon-site.com"
    }
  ];
}