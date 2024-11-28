import { Component, signal } from '@angular/core';

//Interfaces
import { IExperiences } from '../interfaces/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Front-end Especialista",
        p: "ZUP | Set 2020 - Atualmente"
      },
      text: "<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando HTML5, CSS3, Javascript, Typescript, Angular, Angular Material e NgRx, e Back-end, onde o NodeJs é aplicado em Provas de Conceito, caso necessário </p> <p>Além disso, minha experiência abrange a integração de Micro Serviços, Docker, GitLab, Jira e Scrum. Atualmente, enfrento o desafio significativo de contruibuir para o desenvolvimento do Open Finance do Banco Itaú, alcançando sucesso ao implementar a ferramenta em conformidade com os marcos regulatórios.</p> <p>Destaco também a criação de componentes altamente reutilizáveis e personalizáveis no front-end, utilizando o ANGULAR, como parte do nosso compromisso com a eficiência e a qualidade do código.</p>"
    },
    {
      summary: {
        strong: "Front-end Especialista",
        p: "ZUP | Set 2020 - Atualmente"
      },
      text: "<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando HTML5, CSS3, Javascript, Typescript, Angular, Angular Material e NgRx, e Back-end, onde o NodeJs é aplicado em Provas de Conceito, caso necessário </p> <p>Além disso, minha experiência abrange a integração de Micro Serviços, Docker, GitLab, Jira e Scrum. Atualmente, enfrento o desafio significativo de contruibuir para o desenvolvimento do Open Finance do Banco Itaú, alcançando sucesso ao implementar a ferramenta em conformidade com os marcos regulatórios.</p> <p>Destaco também a criação de componentes altamente reutilizáveis e personalizáveis no front-end, utilizando o ANGULAR, como parte do nosso compromisso com a eficiência e a qualidade do código.</p>"
    },
    {
      summary: {
        strong: "Front-end Especialista",
        p: "ZUP | Set 2020 - Atualmente"
      },
      text: "<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando HTML5, CSS3, Javascript, Typescript, Angular, Angular Material e NgRx, e Back-end, onde o NodeJs é aplicado em Provas de Conceito, caso necessário </p> <p>Além disso, minha experiência abrange a integração de Micro Serviços, Docker, GitLab, Jira e Scrum. Atualmente, enfrento o desafio significativo de contruibuir para o desenvolvimento do Open Finance do Banco Itaú, alcançando sucesso ao implementar a ferramenta em conformidade com os marcos regulatórios.</p> <p>Destaco também a criação de componentes altamente reutilizáveis e personalizáveis no front-end, utilizando o ANGULAR, como parte do nosso compromisso com a eficiência e a qualidade do código.</p>"
    },
    {
      summary: {
        strong: "Front-end Especialista",
        p: "ZUP | Set 2020 - Atualmente"
      },
      text: "<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando HTML5, CSS3, Javascript, Typescript, Angular, Angular Material e NgRx, e Back-end, onde o NodeJs é aplicado em Provas de Conceito, caso necessário </p> <p>Além disso, minha experiência abrange a integração de Micro Serviços, Docker, GitLab, Jira e Scrum. Atualmente, enfrento o desafio significativo de contruibuir para o desenvolvimento do Open Finance do Banco Itaú, alcançando sucesso ao implementar a ferramenta em conformidade com os marcos regulatórios.</p> <p>Destaco também a criação de componentes altamente reutilizáveis e personalizáveis no front-end, utilizando o ANGULAR, como parte do nosso compromisso com a eficiência e a qualidade do código.</p>"
    },
    {
      summary: {
        strong: "Front-end Especialista",
        p: "ZUP | Set 2020 - Atualmente"
      },
      text: "<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando HTML5, CSS3, Javascript, Typescript, Angular, Angular Material e NgRx, e Back-end, onde o NodeJs é aplicado em Provas de Conceito, caso necessário </p> <p>Além disso, minha experiência abrange a integração de Micro Serviços, Docker, GitLab, Jira e Scrum. Atualmente, enfrento o desafio significativo de contruibuir para o desenvolvimento do Open Finance do Banco Itaú, alcançando sucesso ao implementar a ferramenta em conformidade com os marcos regulatórios.</p> <p>Destaco também a criação de componentes altamente reutilizáveis e personalizáveis no front-end, utilizando o ANGULAR, como parte do nosso compromisso com a eficiência e a qualidade do código.</p>"
    },
  ])
}
