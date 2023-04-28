import { Component, EventEmitter, Output } from '@angular/core';
import { ListAccountService } from '../services/list-account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {

  allAccounts : any = [];
  @Output() accountToHome = new EventEmitter();

  constructor(private accountService : ListAccountService){}

  ngOnInit(){
    this.accountService.getAllAccounts().subscribe({
      next:(result: any) => {
        this.allAccounts = result;
        console.log(`Δ result:`, result);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  sendAccountToHome(account){
    this.accountToHome.emit(account);
  }
}
