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

  private url = "http://localhost:8080/clients"
  constructor(private http: HttpClient) { }

  getAllClients() {
    return this.ListClient;
  }

  getAllClientsUrl(): Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }
}

/*import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ListCandidatsService {
  private ListCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 50, 'chef de projet', 'homer.jpg'),
    new Candidat(3, 'marge', 'simpson', 43, 'directrice', 'marge.jpeg'),
    new Candidat(4, 'Cedric', 'Le vrai', 43, 'ingénieur'),
  ];
  link = 'http://localhost:3000/cv/persons';

  getAllCandidats() {
    return this.ListCandidats;
  }

  getAllCandidatsAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }

  getCandidatById(id) {
    return this.ListCandidats.find((element) => element._id == id);
  }

  getCandidatByIdAPI(id): Observable<Candidat> {
    return this.http.get<Candidat>(`${this.link}/${id}`);
  }

  deleteCandidat(cand) {
    let i = this.ListCandidats.indexOf(cand);
    this.ListCandidats.splice(i, 1);
  }

  deleteCandidatAPI(cand) {
    return this.http.delete(`${this.link}/${cand._id}`);
  }

  addCandidat(newCand) {
    newCand._id = this.ListCandidats[this.ListCandidats.length - 1]._id + 1;
    this.ListCandidats.push(newCand);
  }

  addCandidatAPI(newCand) {
    return this.http.post(this.link, newCand);
  }

  updateCandidat(uCand) {
    let i = this.ListCandidats.indexOf(uCand);
    this.ListCandidats[i] = uCand;
  }

  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/${uCand._id}`, uCand);
  }

  constructor(private http: HttpClient) {}*/
