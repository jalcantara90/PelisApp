import { Injectable } from '@angular/core';

import { Jsonp } from "@angular/http";
import 'rxjs/Rx'; // Map

@Injectable()
export class PeliculasService {

  private apikey:string = "aee62a8d004e2e1e587ac4f54a8da3a9";
  private urlMoviedb:string = "https://api.themoviedb.org/3";

  peliculas:any = [];

  constructor( private jsonp:Jsonp ) { }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    
    return this.jsonp.get( url )
                .map( res=> res.json().results);
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
                .map( res=> {

                  this.peliculas = res.json().results;
                  return  res.json().results
                });
  }

  getCartelera() {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate ( hasta.getDate() + 30);

    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() }-${ desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() }-${ hasta.getDate() }`;

    let url = `${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeStr }&primary_release_date.lte=${ hastaStr }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ) 
                .map( res => {
              return res.json().results;
          });
  }

  getDetallePelicula( id:number ){
    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url ) 
                .map( res => {
              return res.json();
          });
  }

  getPopularesNinos(){

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    
    return this.jsonp.get( url )
                .map( res=>  res.json().results );
  }
  
}
