import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../models/client';
import { ListClientService } from '../services/list-client.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() allClient: Client[];
  @Output() clientToAccueil = new EventEmitter();

  constructor( private cliSer : ListClientService ){}

  ngOnInit() {
    this.cliSer.getAllClientsUrl().subscribe({
      next: (result: Client[]) => {
        this.allClient = result;
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
