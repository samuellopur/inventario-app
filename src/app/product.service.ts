import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlBase = "http://localhost:8080/inventario-app/productos";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.urlBase);
  }

  addProduct(product:Product): Observable<Object>{
    return this.httpClient.post(this.urlBase, product);
  }

  getProductById(id:number){
    return this.httpClient.get<Product>(`${this.urlBase}/${id}`);
  }

  editProduct(id: number, product: Product): Observable<Object>{
    return this.httpClient.put(`${this.urlBase}/${id}`, product);

  }
}
