import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
  	console.log(args);
  	// let before = args[0] || '';  on verifie si la clé du tableau existe
  	let taux = args[0] || 20;
  	let r = value + ((value * taux)/100);
    return r.toFixed(2).replace('.', ',') ;
  }

}
