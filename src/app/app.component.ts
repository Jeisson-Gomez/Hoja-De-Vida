import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Componentes
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { HomeComponent } from './Componentes/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    EstudiosComponent,
    HomeComponent,
    RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jeisson Alonso Gómez Herrera';
  Profecion = 'Ingeniero de Software';
}
