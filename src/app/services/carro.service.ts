import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Carro> {
    return this.http.get<Carro>(`${API_CONFIG.baseUrl}/carros/${id}`);
  }

  findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${API_CONFIG.baseUrl}/carros`);
  }

  create(carro: Carro): Observable<Carro> {
    return this.http.post<Carro>(`${API_CONFIG.baseUrl}/carros`,carro);
  }

  update(carro: Carro): Observable<Carro>{
    return this.http.put<Carro>(`${API_CONFIG.baseUrl}/carros/${carro.id}`, carro);
  }

  delete(id: any): Observable<Carro> {
    return this.http.delete<Carro>(`${API_CONFIG.baseUrl}/carros/${id}`);
  }

}
