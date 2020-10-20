import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Values } from '../classes/values';
import { HistoricalValues } from '../classes/historical-values';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {
  public values: Array<Values> = [];
  public historical:Array<HistoricalValues> = [];
  private names:string[] = ['bitcoin', 'dolar', 'dolar_intercambio', 'euro', 'ipc', 'imacec', 'ivp', 'libra_cobre', 'tasa_desempleo', 'tpm', 'uf', 'utm'];
  
  constructor(private http: HttpClient) { }
    
  getValues () {
    const url = environment.idicatorsUrl.endpoint;
    this.http.get<any>(url).subscribe(
      (data) => {
      this.values = [];
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
  }

  getIndicatorHistorical(value: string){
    const url = environment.idicatorsUrl.endpoint + "/" + value;
    return this.http.get<any>(url);
  }

}
