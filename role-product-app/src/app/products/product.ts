import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Product {
  private baseUrl = 'http://localhost:8000/api/products'; 

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createProduct(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, data);
  }

  updateProduct(id: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, data);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/delete/${id}`, {});
  }

  // testing global handling 
  getBrokenProductList(): Observable<any> {
    return this.http.get('http://localhost:8000/api/products/this-endpoint-does-not-exist');
  }
}
