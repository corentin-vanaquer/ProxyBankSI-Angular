import { Component } from '@angular/core';
import { Client } from '../models/client';
import { ListClientService } from '../services/list-candidat.service';

@Component({
  selector: 'app-home-advisor-client-list',
  templateUrl: './home-advisor-client-list.component.html',
  styleUrls: ['./home-advisor-client-list.component.css']
})
export class HomeAdvisorClientListComponent {
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
