import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { Router } from '@angular/router';
import { ListAccountService } from '../services/list-account.service';
import { ListClientService } from '../services/list-client.service';
import { catchError, throwError, tap, Observable } from 'rxjs';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  constructor(private router: Router, private accountService: ListAccountService, private clientService: ListClientService) { }
  @Input() cliSelected: Client;
  allAccounts;
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
    this.router.navigateByUrl('/edit');
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
