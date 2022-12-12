import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsUrl: string = "/api/products";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, this.httpOptions);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + '/' + id);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(this.productsUrl + '/' + id, product, this.httpOptions);
  }

  deleteProduct(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = this.productsUrl + '/' + id;
    return this.http.delete<Product>(url);
  }

}
