import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-info',
  templateUrl: './pelicula-info.component.html',
  styles: []
})
export class PeliculaInfoComponent implements OnInit {

  detallePelicula:any;

  img:string = "http://image.tmdb.org/t/p/w600/";

  constructor(
    private activatedRoute:ActivatedRoute,
    private _ps:PeliculasService,
    private router:Router
  ) { }

  ngOnInit() {

    this.activatedRoute.params
        .map(parametros => parametros['id'])
        .subscribe( id => {
          
          this._ps.getDetallePelicula(id) 
              .subscribe(data => this.detallePelicula = data)

        })
  }

}
