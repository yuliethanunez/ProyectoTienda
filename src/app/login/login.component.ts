import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  formLogin : FormGroup;

  constructor(private router:Router, private servicioUsuario:ServiceService) { }
 usuario: '';
 clave: '';
 usuSer=[];

  public isError = false;
  

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      usuario: new FormControl(),
      clave: new FormControl()
    });
    
  }

  Login(){
        if(this.formLogin.value.usuario==null || this.formLogin.value.usuario== ""){
          alert("El usuario esta vacio");
        }else{
          if(this.formLogin.value.clave==null || this.formLogin.value.clave== ""){
            alert("La contraseña esta vacia")
          }else{      
              this.servicioUsuario.getUsuario(this.formLogin.value.usuario)
              .subscribe(data=>{
                console.log("entro al servicio");
                console.log(data["clave"]);
              
                if(data["usuario"]== this.formLogin.value.usuario && data["clave"] == this.formLogin.value.clave){
                  this.router.navigate(["catalogo"]);
                }else{
                  this.isError = true;
                  setTimeout(()=>{
                    this.isError= false;
              
                  }, 4000);
                }
              });
          } 
        }

  }

}
