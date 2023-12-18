import { Component } from '@angular/core';

@Component({
  selector: 'app-estudios',
  standalone: true,
  imports: [],
  templateUrl: './estudios.component.html',
  styleUrl: './estudios.component.css'
})
export class EstudiosComponent {
  Titulo = "Estudios";

  Titulo_U = "Universidades";
  Colegio = "Colegio";
  Idiomas = "Idiomas";
  Herramientas_de_software = "Herramientas de software";
}
