import { Component, OnInit } from '@angular/core';

import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  date:Date = new Date();

  cartelera:any;
  populares:any;
  popularesNinos:any;

  constructor(
    private _ps:PeliculasService
  )  {

      this._ps.getPopulares()
          .subscribe( data => this.populares = data );

      this._ps.getPopularesNinos()
          .subscribe( data => this.popularesNinos = data );

      // this._ps.buscarPelicula('wall-e')
      //     .subscribe( data => console.log(data));


      this._ps.getCartelera()
          .subscribe( data => this.cartelera = data );
      
   }

  ngOnInit() {
        
  }

  

  // getDate() {
  //   let number:number = this.date.setDate( this.date.getDate() + 30 );
    
  //   let date:Date = new Date(number+30);

  //   let finishDate:string = date.toLocaleString().substr(0,9);

  //   return finishDate
  // }

}
