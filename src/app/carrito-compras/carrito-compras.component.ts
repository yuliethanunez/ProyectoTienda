import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogo } from '../Modelo/Catalogo';
import {Location} from '@angular/common';
import { ServiceService } from '../Service/service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  productosC=[];

  totalPrecio:number= 0;
  totalCantidades: number=0;

  constructor(private router:Router, private service:ServiceService, private location:Location) { }
  

  ngOnInit(): void {
   this.carritoCompra();
     
    console.log(this.service.listaCarritoCompras);
  }

  goBack():void{
    this.location.back();
  }

  carritoCompra(){
    this.productosC=this.service.listaCarritoCompras;
    
    for(let i=0; i< this.productosC.length; i++){
      this.totalPrecio = this.totalPrecio + this.productosC[i]["subtotal"];
    }

  }

  actualizarCatalogo(){
    let id=localStorage.getItem("idProducto");
    let carrito = new Catalogo;

    for(let i=0; i<this.productosC.length; i++){
      let nuevaCantidadDisp= this.productosC[i]["unidades_disponibles"] - this.productosC[i]["cantidadVendida"];  
      this.productosC[i]["unidades_disponibles"] = nuevaCantidadDisp;
      this.service.getActualizarCatalogo(this.productosC[i]).subscribe();
    }

    Swal.fire("Pago realizado exitosamente.","Gracias por preferirnos",'success');

    this.service.limpiarCarrito();
    this.router.navigate(["catalogo"]);
    
  }

}
