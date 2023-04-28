import { Component } from '@angular/core';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {

  ListAccount = {
    compte1: {
      id: 1,
      accountNumber: "0123456789",
      solde: 1000.50,
      rate: 20
    },
    compte2: {
      id: 2,
      accountNumber: "9876543210",
      solde: 2500.00,
      threshold: 5000
    },
    compte3: {
      id: 3,
      accountNumber: "5555555555",
      solde: 500.00,
      rate: 10
    },
  };

  accountList = Object.values(this.ListAccount);
}
