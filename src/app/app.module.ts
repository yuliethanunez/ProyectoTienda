import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { BuscadorPipe } from './pipe/buscador.pipe';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CatalogoComponent,
    BarraNavegacionComponent,
    BuscadorPipe,
    VerProductoComponent,
    CarritoComprasComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
