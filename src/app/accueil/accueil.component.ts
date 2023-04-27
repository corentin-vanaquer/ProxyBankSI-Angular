import { Component } from '@angular/core';
import { Client } from '../models/client';
import { ListClientService } from '../services/list-candidat.service';

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

  recupererSelectedCli(cli) {
    this.selectedClient = cli;
  }
}
