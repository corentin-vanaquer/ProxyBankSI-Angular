import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { Router } from '@angular/router';
import { ListAccountService } from '../services/list-account.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  constructor(private router: Router, private accountService : ListAccountService){}
  @Input() cliSelected: Client;
  allAccounts;

ngOnInit(): void {
  if(this.cliSelected) {
    this.accountService.getAllAccounts(this.cliSelected.id).subscribe(accounts => {
      this.allAccounts = accounts;
    });

  }
}

onUpdateClient(){
  this.router.navigateByUrl('/edit');
}

onManageAccount(){
  const clientId = this.cliSelected.id;
  const clientIdString = clientId.toString();
  this.router.navigateByUrl(`/account/${clientIdString}`);
}

}
