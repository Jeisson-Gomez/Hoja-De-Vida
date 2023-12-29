import { Routes } from '@angular/router';

//componentes
import { ContactoComponent } from './Componentes/contacto/contacto.component';
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { ExperienciasComponent } from './Componentes/experiencias/experiencias.component';
import { HomeComponent } from './Componentes/home/home.component';
import { SkillsComponent } from './Componentes/skills/skills.component';

export const routes: Routes = [
    { path: 'Contacto', component: ContactoComponent},
    { path: 'Estudios', component: EstudiosComponent },
    { path: "Experiencias", component: ExperienciasComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'Skills', component: SkillsComponent}
];
