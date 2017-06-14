import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PeliculaInfoComponent } from './components/pelicula-info/pelicula-info.component';
import { BuscarPeliculasComponent } from './components/buscar-peliculas/buscar-peliculas.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'info/:id/:pag', component: PeliculaInfoComponent },
    { path: 'info/:id/:pag/:busqueda', component: PeliculaInfoComponent },
    { path: 'buscar', component: BuscarPeliculasComponent },
    { path: 'buscar/:texto', component: BuscarPeliculasComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(routes);