import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { CurrentAccount } from '../models/CurrentAccount';
import { SavingAccount } from '../models/SavingAccounts';

@Injectable({
  providedIn: 'root'
})
export class ListAccountService {

  urlGetAccounts = `http://localhost:8080/advisors/client`;
  urlCreateCurrentAccount = `http://localhost:8080/currentAccounts`;
  urlCreateSavingsAccount = `http://localhost:8080/savingAccounts`;
  urlAssignCurrentAccount = `http://localhost:8080/currentAccounts/add-client-to-account`;
  urlAssignSavingAccount = `http://localhost:8080/savingAccounts/add-client-to-account`;

  constructor(private http: HttpClient) {}

  getAllAccounts(id:number): Observable<any[]>{
    return this.http.get<any[]>(`${this.urlGetAccounts}/${id}/accounts`);
  }

  createCurrentAccountService(formValue) {
    return this.http.post<CurrentAccount>(this.urlCreateCurrentAccount, formValue);
  }

  createSavingAccountService(formValue){
    return this.http.post<SavingAccount>(this.urlCreateSavingsAccount, formValue);
  }

  assignCurrentAccountToClient(request) {
    return this.http.post<CurrentAccount>(this.urlAssignCurrentAccount, request);
  }

  assignSavingAccountToClient(request) {
    return this.http.post<SavingAccount>(this.urlAssignSavingAccount, request);
  }

  /*deleteCurrentAccount(accountId: number){
    return this.http.delete(`${this.urlCreateCurrentAccount}/${accountId}`);
  }

  deleteSavingsAccount(accountId: number){
    return this.http.delete(`${this.urlCreateSavingsAccount}/${accountId}`);
  }*/
}
