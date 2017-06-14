import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
  }

  buscarPelicula( termino:string  ) {
    if (termino.length === 0) {
      return;
    }
    this.router.navigate( ['/buscar',termino]);
  }

}
