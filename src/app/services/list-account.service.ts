import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListAccountService {

private url = `http://localhost:8080/advisors/client/402/accounts`

constructor(private http: HttpClient) {}

getAllAccounts(): Observable<any[]>{
  return this.http.get<any>(this.url);
}

}
