import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, ObservableInput } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    // private productsUrl = 'api/products/products.json';
    // constructor(private http: HttpClient) {}
    // getProducts(): Observable<any[]> {
    //     return this.http.get<any[]>(this.productsUrl).pipe(
    //         tap(data => console.log('All: ', JSON.stringify(data))),
    //         catchError(this.handleError)
    //     );
    // }

    // handleError(err: HttpErrorResponse): ObservableInput<any> {
    //     return {} as ObservableInput<any>;
    // }
    getData(): any[] {
        return [
          {
            id: 'trj-cdr',
            name: 'Tarjetas de crédito',
            description: 'Tarjeta de consumo bajo la modalidad de crédito.',
            logo: 'https://www.visa.gd/dam/VCOM/regional/lac/ENG/Default/Pay%20With%20Visa/Find%20a%20Card/Credit%20Cards/Classic/visaclassiccredit-400x225.jpg',
          },
          {
            id: 'trj-cdr',
            name: 'Tarjetas de débito',
            description: 'Tarjeta de consumo bajo la modalidad de débito de la cuenta.',
            logo: 'https://www.visa.gd/dam/VCOM/regional/lac/ENG/Default/Pay%20With%20Visa/Find%20a%20Card/Credit%20Cards/Classic/visaclassiccredit-400x225.jpg',
          },
        ];
      }
};