import { Component } from '@angular/core';
@Component({
  selector: 'contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  Titulo = "Contacto";

  Nombre = 'Jeisson Alonso Gomez Herrera';
  Edad = 34;
  Correo = 'jeypitbullz4@gmail,com'
  Telefono = 3125129787;
  url = "https://github.com/Jeisson-Gomez"
}
