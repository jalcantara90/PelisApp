import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar-peliculas',
  templateUrl: './buscar-peliculas.component.html',
  styles: []
})
export class BuscarPeliculasComponent implements OnInit {

  peliculas:any[];
  buscar:string="";

  constructor(
    private activatedRoute:ActivatedRoute,
    private _ps:PeliculasService,
    private router:Router
  ) { }

  ngOnInit() {

    this.activatedRoute.params
        .subscribe( parametros => {

          if ( parametros['texto']) {
            this.buscar =  parametros['texto']
          }
          
          this._ps.buscarPelicula(parametros['texto']) 
              .subscribe(data => {
                this.peliculas = data

              })

        })
  }

  buscarPelicula() {

    if ( this.buscar.length == 0 ) {
      return;
    }
    this._ps.buscarPelicula(this.buscar).subscribe(
      
    );
    // this.router.navigate( ['/buscar',this.buscar]);
  }

}


