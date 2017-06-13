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

  imgGrande:string = "http://image.tmdb.org/t/p/w600/";
  imgPeq:string = "http://image.tmdb.org/t/p/w500/";

  constructor(
    private _ps:PeliculasService
  )  {

      let initDate = this.date.toLocaleString().substr(0,9);

      this._ps.getPopulares()
          .subscribe( data => console.log(data) );

      this._ps.buscarPelicula('wall-e')
          .subscribe( data => console.log(data));


      this._ps.getCartelera( initDate, this.getDate())
          .subscribe( data => {

            this.cartelera = data;
            console.log(this.cartelera);

            return this.cartelera;
        });
      
      
   }

  ngOnInit() {
        
  }

  

  getDate() {
    let number:number = this.date.setDate( this.date.getDate() + 30 );
    
    let date:Date = new Date(number+30);

    let finishDate:string = date.toLocaleString().substr(0,9);

    return finishDate
  }

}
