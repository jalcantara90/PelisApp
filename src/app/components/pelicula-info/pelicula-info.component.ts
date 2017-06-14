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
  regresarA:string = "";
  busqueda:string = "";

  constructor(
    private activatedRoute:ActivatedRoute,
    private _ps:PeliculasService,
    private router:Router
  ) { }

  ngOnInit() {

    this.activatedRoute.params
        .subscribe( parametros => {
          this.regresarA = parametros['pag'];

          if( parametros['busqueda'] ) {
            this.busqueda = parametros['busqueda'];
          }
          this._ps.getDetallePelicula(parametros['id']) 
              .subscribe(data => this.detallePelicula = data)

        })
  }

}
