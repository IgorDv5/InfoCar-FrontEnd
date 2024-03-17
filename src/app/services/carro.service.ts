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

  findAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(`${API_CONFIG.baseUrl}/carros`);
  }
}
