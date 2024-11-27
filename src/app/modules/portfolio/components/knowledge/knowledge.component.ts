import { Component, signal } from '@angular/core';

//Interface
import { IKnowledge } from '../interfaces/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento HTML 5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento CSS 3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento Javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento Angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone de conhecimento Node JS',
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Icone de conhecimento SASS',
    }

  ])
}
