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

/**
 * This function sends a POST request to the server to create a new current account using the provided form data.
 * 
 * @param formValue The form data required to create the account.
 * 
 * @returns An observable that emits a response containing the ID of the newly created account.
 */
createCurrentAccountService(formValue) {
  // Send a POST request to the server to create a new current account using the provided form data.
  // The response from the server is an observable that emits the ID of the newly created account.
  return this.http.post<CurrentAccount>(this.urlCreateCurrentAccount, formValue);
}


  createSavingAccountService(formValue){
    return this.http.post<SavingAccount>(this.urlCreateSavingsAccount, formValue);
  }

/**
 * This function sends a POST request to the server to assign the specified current account to a client.
 * 
 * @param request An object containing the client ID and the account ID to be assigned.
 * 
 * @returns An observable that emits a response containing the ID of the assigned account.
 */
assignCurrentAccountToClient(request) {
  // Send a POST request to the server to assign the specified current account to a client.
  // The response from the server is an observable that emits the ID of the assigned account.
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
