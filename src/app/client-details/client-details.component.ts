import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../models/client';
import { Router } from '@angular/router';
import { ListAccountService } from '../services/list-account.service';
import { ListClientService } from '../services/list-client.service';
<<<<<<< HEAD
=======
import { catchError, throwError, tap, Observable } from 'rxjs';
>>>>>>> 7fa3fa027f05d41e3a56d450462c527117cb11fd

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
<<<<<<< HEAD
  //public cliId: number;
=======
  constructor(private router: Router, private accountService: ListAccountService, private clientService: ListClientService) { }
>>>>>>> 7fa3fa027f05d41e3a56d450462c527117cb11fd
  @Input() cliSelected: Client;
  constructor(private router: Router, private accountService : ListAccountService, private cliSer: ListClientService ){}
 
  
  selectedClient: Client;
  allAccounts;
<<<<<<< HEAD
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

=======
  allclients: Observable<Client[]>;

  ngOnInit(): void {
    if (this.cliSelected) {
      this.accountService.getAllAccounts(this.cliSelected.id).subscribe(accounts => {
        this.allAccounts = accounts;
      });
    }
    this.getClients();
  }

  onUpdateClient() {
    const clientData = JSON.stringify(this.cliSelected);
    this.router.navigate(['/edit'], { state: { clientData: clientData } });
  }


  onManageAccount() {
    const clientId = this.cliSelected.id;
    const clientIdString = clientId.toString();
    this.router.navigateByUrl(`/account/${clientIdString}`);
  }
  deleteClient(clientId: number): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
        this.clientService.deleteClientUrl(clientId)
            .subscribe(client => { this.getClients() })
        location.reload();
    }
}

  getClients() {
    this.allclients = this.clientService.getAllClientsUrl();
  }
}
>>>>>>> 7fa3fa027f05d41e3a56d450462c527117cb11fd
