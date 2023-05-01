import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ListAccountService } from '../services/list-account.service';
import { ListClientService } from '../services/list-client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  constructor(private router: Router, private accountService: ListAccountService, private clientService: ListClientService) { }

  @Input() cliSelected: Client;

  @Input() accountSelected;
  allAccounts;
  option = "historical";

  ngOnInit(): void {
    if (this.cliSelected) {
      this.accountService.getAllAccounts(this.cliSelected.id).subscribe(accounts => {
        this.allAccounts = accounts;
      });
    }
  }
  /*deleteAccount(accountId) {
    this.accountService.deleteCurrentAccount(accountId)
      .subscribe(() => { this.allAccounts() });
    this.accountService.deleteSavingsAccount(accountId)
      .subscribe(() => { this.allAccounts() });
    location.reload();

  }*/


}
