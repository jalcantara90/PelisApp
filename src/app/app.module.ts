import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculaInfoComponent } from './components/pelicula-info/pelicula-info.component';

//services

import { PeliculasService } from './services/peliculas.service';

//routes

import { APPROUTING } from './app.routes';
import { BuscarPeliculasComponent } from './components/buscar-peliculas/buscar-peliculas.component';

//pipes
import { CortarDescPipe } from './pipes/cortar-desc.pipe';
import { SinfotoPipe } from './pipes/sinfoto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PeliculaInfoComponent,
    BuscarPeliculasComponent,
    CortarDescPipe,
    SinfotoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    APPROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
