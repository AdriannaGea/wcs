import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cupcake } from '../models/cupcake.model';
import { Accessory } from '../models/accessory.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:4000/cupcakes';
  private accessoriesUrl = 'http://localhost:4000/accessories'

  constructor(private http: HttpClient) {}

  getCupcakes(): Observable<Cupcake[]> {
    return this.http.get<Cupcake[]>(this.apiUrl);
  }

  getAccessories(): Observable<Accessory[]> {
    return this.http.get<Accessory[]>(this.accessoriesUrl);
  }
}
