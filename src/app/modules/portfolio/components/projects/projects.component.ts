import { Component, signal } from '@angular/core';

//Interfaces
import { IProjects } from '../interfaces/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/vfull.png',
      alt: "Projeto Vida Fullstack",
      title: "Vida Fullstack", //De acordo com o nosso projeto
      width: "100px",
      height: "51px",
      description: "<p>Explore o fascinante mundo do Desenvolvimento Web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, Javascript, Node.Js e Typescript.</p> <p>Desvendando os segredos por trás da contrução de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de Javascript e Typescript.</p>",
      links: [
        {
          name: "Conheça o Blog",
          href: "https://vidafullstack.com.br",
        }
      ]
    }
  ])
}
