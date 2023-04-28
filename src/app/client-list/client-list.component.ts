import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../models/client';
import { ListClientService } from '../services/list-candidat.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  allClient: Client[];
  @Output() clientToAccueil = new EventEmitter();

  constructor( private cliSer : ListClientService ){}

  ngOnInit() {
    this.cliSer.getAllClientsUrl().subscribe({
      next: (result: Client[]) => {
        this.allClient = result;
        console.log(result);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  sendClientToAccueil(cli) {
    this.clientToAccueil.emit(cli);
  }
}
/*ngOnInit() {
  this.candSer.getAllCandidatsAPI().subscribe({
    next: (result: Candidat[]) => {
      this.allCandidats = result;
    },
    error: (err) => {
      console.log(err);
    },
  });
}*/
