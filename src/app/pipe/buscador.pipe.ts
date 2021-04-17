import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultBuscador =[];
    for(const productos of value){
      if(productos.nombre.toLowerCase().indexOf(arg.toLowerCase())> -1){
        resultBuscador.push(productos);
      };
    };
    return resultBuscador;
  }

}
