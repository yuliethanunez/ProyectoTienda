import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { LoginComponent} from './login/login.component'

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'login'
  },
  {path:'catalogo', component:CatalogoComponent},
  {path:'verProducto', component:VerProductoComponent},
  {path:'carritoCompras', component:CarritoComprasComponent},
  {path:'barraNavegacion', component:BarraNavegacionComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
