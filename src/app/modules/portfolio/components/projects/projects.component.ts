import { Component, inject, signal } from '@angular/core';

//Interfaces
import { IProjects } from '../interfaces/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../enum/EDialogPanelClass.enum';

//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
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
    },
  ])

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
