import { Routes } from '@angular/router';

//componentes
import { EstudiosComponent } from './Componentes/estudios/estudios.component';
import { HomeComponent } from './Componentes/home/home.component';

export const routes: Routes = [
    { path: 'Home', component: HomeComponent },
    { path: 'Estudios', component: EstudiosComponent },
];
