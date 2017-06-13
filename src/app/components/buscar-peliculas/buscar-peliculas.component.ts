import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-peliculas',
  templateUrl: './buscar-peliculas.component.html',
  styles: []
})
export class BuscarPeliculasComponent implements OnInit {

  img:string = "http://image.tmdb.org/t/p/w600/";

  peliculas:any[];

  constructor(
    private activatedRoute:ActivatedRoute,
    private _ps:PeliculasService,
    private router:Router
  ) { }

  ngOnInit() {

    this.activatedRoute.params
        .map(parametros => parametros['texto'])
        .subscribe( texto => {
          
          this._ps.buscarPelicula(texto) 
              .subscribe(data => {
                this.peliculas = data

                console.log(this.peliculas);
              })

        })
  }

  buscarPelicula( termino:string  ) {
    this.router.navigate( ['/buscar',termino]);
  }

}


