import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListAccountService } from '../services/list-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {

  @Input() allAccounts : any = [];
  @Output() accountToHome = new EventEmitter();

  constructor(private accountService : ListAccountService, private router : Router){}

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

  addNewCurrentAccount(): void {
    this.router.navigateByUrl('/add-current-account');
   }

   addNewSavingsAccount(): void {
    this.router.navigateByUrl('/add-savings-account');
   }
}
