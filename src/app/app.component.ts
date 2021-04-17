import { Component } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CatalogoComponent} from './catalogo/catalogo.component';
import {BarraNavegacionComponent} from './barra-navegacion/barra-navegacion.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tienda';

  public ocultar = true;
 

  
}
