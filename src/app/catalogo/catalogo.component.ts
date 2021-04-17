  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup } from '@angular/forms';
  import { Router } from '@angular/router';
  import {Catalogo} from 'src/app/Modelo/Catalogo';
import Swal from 'sweetalert2';
  import { ServiceService } from '../Service/service.service';


@Component({
  selector: 'catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  
  constructor(private servicioCatalogo:ServiceService, private router:Router) { }

  buscadorProductos='';
  
   productos=[];
   lista=[];
   formAgregarProducto:FormGroup;
  public totalUnidades:number=0;
   
  
  ngOnInit(): void {
    this.formAgregarProducto = new FormGroup({
      "cantidadVendida" : new FormControl('0'),
    });
    
    
    this.servicioCatalogo.getCatalogo()
    .subscribe(data=>{
      this.productos=data;
    });
  }


  detalleProducto(producto){
    localStorage.setItem("idProducto",producto.toString());
    this.router.navigate(["verProducto"]);
  }

  public addProducto(producto){
   
    console.log(producto);
    console.log("Cantidad a vender: " + this.formAgregarProducto.value.cantidadVendida);
    producto["cantidadVendida"]= this.formAgregarProducto.value.cantidadVendida;
    producto["subtotal"]= this.formAgregarProducto.value.cantidadVendida* producto["precio"];
  
    this.servicioCatalogo.agregarCarrito(producto);
      
    this.totalUnidades= this.totalUnidades + this.formAgregarProducto.value.cantidadVendida;
    Swal.fire("","Producto añadido exitosamente",'success')
 
  }

}
