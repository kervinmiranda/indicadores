import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Values } from '../classes/values';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {
  public values: Array<Values> = [];
  private names:string[] = ['bitcoin', 'dolar', 'dolar_intercambio', 'euro', 'ipc', 'imacec', 'ivp', 'libra_cobre', 'tasa_desempleo', 'tpm', 'uf', 'utm'];

  constructor(private http: HttpClient) { }
  
  getValues () {
    const url = environment.idicatorsUrl.endpoint;
    this.http.get<any>(url).subscribe(
      data => {
      this.names.forEach(name=> {
        const datos:Values = data[name];
        this.values.push(datos);
      });        
      }, 
      error => {
        console.error('Cant read data');
        throw new Error(error);
      },
      () => {
        
      }
    );
    console.log(this.values);
  }

}
