import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Usuario} from '../Modelo/Usuario';
import { Catalogo } from '../Modelo/Catalogo';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
		
  constructor(private http:HttpClient, private router:Router) { }

  Url='http://localhost:8080/api';
  listaCarritoCompras = [];
  

  getUsuario(usuario:string){
    return this.http.post<Usuario>(this.Url+"/listarUsuario/usuario",usuario); 
 }

  getCatalogo(){
    return this.http.get<Catalogo[]>(this.Url+"/listarCatalogo");
  }

  
  getCatalogoId(id:number){
    return this.http.get<Catalogo>(this.Url+"/listarCatalogo/"+id);
  }

  getActualizarCatalogo(catalogo: Catalogo){
    return this.http.put<Catalogo>(this.Url+"/actualizarCatalogo/"+catalogo.id,catalogo);
  }

  agregarCarrito(producto){
    this.listaCarritoCompras.push(producto);
  }

  limpiarCarrito(){
    this.listaCarritoCompras = [];
  }

  logout(){
    this.router.navigate(["login"]);
  }
 


}
