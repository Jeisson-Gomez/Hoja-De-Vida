import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Componentes
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { ExperienciasComponent } from './Componentes/experiencias/experiencias.component';
import { HomeComponent } from './Componentes/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ContactoComponent,
    EstudiosComponent,
    ExperienciasComponent,
    HomeComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jeisson Alonso Gómez Herrera';
  Profecion = 'Ingeniero de Software';
  Repositorio = "https://github.com/Jeisson-Gomez"
}
