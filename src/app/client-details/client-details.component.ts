import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../models/client';
import { Router } from '@angular/router';
import { ListAccountService } from '../services/list-account.service';
import { ListClientService } from '../services/list-client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  //public cliId: number;
  @Input() cliSelected: Client;
  constructor(private router: Router, private accountService : ListAccountService, private cliSer: ListClientService ){}
 
  
  selectedClient: Client;
  allAccounts;
  allClients;
ngOnInit(): void {
  if(this.cliSelected) {
    this.accountService.getAllAccounts(this.cliSelected.id).subscribe(accounts => {
      this.allAccounts = accounts;
    });
    this.cliSer.getAllClientsId(this.cliSelected.id).subscribe(clients => {
      this.allClients = clients;
    })
  }
}

recupererSelectedClient(cliSelected){
  this.selectedClient = cliSelected;
 }

onUpdateClient(){
  const clientId = this.cliSelected.id;
  const clientIdString = clientId.toString();
  console.log(`Δ Δ ClientDetailsComponent Δ onManageAccount Δ clientIdString:`, clientIdString);
  console.log(this.cliSelected.name);
  this.router.navigateByUrl(`/myid/${clientIdString}`);
}

onManageAccount(){
  const clientId = this.cliSelected.id;
  const clientIdString = clientId.toString();
  console.log(`Δ Δ ClientDetailsComponent Δ onManageAccount Δ clientIdString:`, clientIdString);
  this.router.navigateByUrl(`/account/${clientIdString}`);
}

}

