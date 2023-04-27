import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListClientService {
  private ListClient: Client[] = [
    new Client(1, 'bart', 'simpson', "ici", "35000", "rennes", " 0889"),
    new Client(2, 'homer', 'simpson', "ici", "35000", "rennes", " 0889"),
    new Client(3, 'marge', 'simpson', "ici", "35000", "rennes", " 0889"),
    new Client(4, 'Cedric', 'Le vrai', "ici", "35000", "rennes", " 0889"),
  ];

  getAllClients() {
    return this.ListClient;
  }

  private url = "http://localhost:8080/clients"
  constructor(private http: HttpClient) { }

  getAllClientsUrl(): Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }
}
