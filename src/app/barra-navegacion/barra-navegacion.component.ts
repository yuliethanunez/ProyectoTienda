import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ServiceService } from '../Service/service.service';
import { CatalogoComponent } from '../catalogo/catalogo.component';

@Component({
  selector: 'barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  constructor(private servicioBarra: ServiceService) { }

  ngOnInit(): void {
  }

  onLogout(): void{
    this.servicioBarra.logout();
  }
 
 

}
