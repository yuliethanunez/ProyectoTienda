import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { ServiceService } from '../Service/service.service';
import { Catalogo } from '../Modelo/Catalogo';

@Component({
  selector: 'ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {

  catalogo:Catalogo;
  constructor(private location:Location, 
    private router:Router, private service:ServiceService) { } /*para hacer que se devuelva a la pagina anterior, se crea esta variable y se importa la libreria y se crea el metodo goBack*/

  ngOnInit(): void {
    this.verMas();
  }

  goBack():void{
    this.location.back();
  }

  verMas(){
    let id=localStorage.getItem("idProducto");
    this.service.getCatalogoId(+id)
    .subscribe(data=>{
      this.catalogo=data;
      console.log(data);
    })
  }

}
