import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../models/client';
import { ListClientService } from '../services/list-client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-advisor-client-list',
  templateUrl: './home-advisor-client-list.component.html',
  styleUrls: ['./home-advisor-client-list.component.css']
})
export class HomeAdvisorClientListComponent {
  
  tabClients: Client[] = [];
  //@Output() infosClientSelected = new EventEmitter();
  selectedClient: Client;
  
  constructor(private cliSer: ListClientService, private router: Router){}

  ngOnInit(){
    this.tabClients = this.cliSer.getAllClients();
  }

  //selectedCli: Client;
  recupererSelectedCli(cli) {
    this.selectedClient = cli;
  }
/*   recupererSelectedClient(cli) {
    this.infosClientSelected.emit(cli);
  } */


}
