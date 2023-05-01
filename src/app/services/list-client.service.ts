import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../models/client';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListClientService {
   private ListClient: Client[] = [
 /*    new Client(1, 'bart', 'simpson', "ici", "35000", "rennes", " 0889"),
    new Client(2, 'homer', 'simpson', "ici", "35000", "rennes", " 0889"),
    new Client(3, 'marge', 'simpson', "ici", "35000", "rennes", " 0889"),
    new Client(4, 'Cedric', 'Le vrai', "ici", "35000", "rennes", " 0889"), */
  ];


  getAllClients() {
    return this.ListClient;
  }

  constructor(private http: HttpClient) { }
  //ListClient : Client[] =[];
  private url = "http://localhost:8080/clients"


  getAllClientsUrl(): Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }

  getClientById(id:number){
    return this.ListClient.find((element) => element.id == id);
  }


  getClientByIdUrl(id): Observable<Client>{
    return this.http.get<Client>(`${this.url}/${id}`);
  }

  // Add a new client
  addClient(formValue:{firstname:string, name:string, adress:string, zipcode:string, city:string, phone:string}): Observable<Client>{

      return this.getAllClientsUrl().pipe(
        map(ListClient =>[...ListClient].sort((a,b) => a.id - b.id)),
        map(sortedClient => sortedClient[sortedClient.length - 1]),
        map(previousClient => ({
          ...formValue,
          id: previousClient.id + 1
        })),
        switchMap(newClient => this.http.post<Client>('http://localhost:8080/clients',newClient))
      )
  }

  updateClient(updateCli){
    let i = this.ListClient.indexOf(updateCli);
    this.ListClient[i] = updateCli;
  }

  updateClientUrl(updateCli){
    return this.http.put(`${this.url}/${updateCli.id}`, updateCli);
  }

  deleteClientUrl(clientId: number): Observable<number>{
    let httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json');
    let options={
      headers: httpheaders
    };

    return this.http.delete<number>(this.url+"/"+clientId);
  }

}
