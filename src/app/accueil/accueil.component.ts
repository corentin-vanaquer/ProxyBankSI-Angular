import { Component } from '@angular/core';
import { Client } from '../models/client';
import { ListClientService } from '../services/list-client.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  tabClients: Client[] = [];
  selectedClient: Client;

  constructor(private cliSer: ListClientService){}

  ngOnInit(){
    this.tabClients = this.cliSer.getAllClients();
  }

  //selectedCli: Client;
  recupererSelectedCli(cli) {
    this.selectedClient = cli;
  }
}
