import { Component } from '@angular/core';
import { ListAccountService } from '../services/list-account.service';

@Component({
  selector: 'app-home-advisor-account-list',
  templateUrl: './home-advisor-account-list.component.html',
  styleUrls: ['./home-advisor-account-list.component.css']
})
export class HomeAdvisorAccountListComponent {

  accountArray: any = [];
  selectedAccount;

  constructor(private accountService:ListAccountService){}

  ngOnInit(){
    this.accountService.getAllAccounts().subscribe({
      next: (accounts: any[]) => {
        this.accountArray = accounts;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  fetchSelectedAccount(account){
    this.selectedAccount = account;
  }

}
