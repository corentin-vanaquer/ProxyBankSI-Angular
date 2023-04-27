import { Component, EventEmitter, Output } from '@angular/core';
import { Client } from '../models/client';
import { ListClientService } from '../services/list-client.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  allClient: Client[];
  @Output() clientToAccueil = new EventEmitter();

  constructor( private cliSer : ListClientService ){}

  ngOnInit() {
    this.getClients();
  }

  sendClientToAccueil(cli) {
    this.clientToAccueil.emit(cli);
  }

  getClients():void {
    this.allClient = this.cliSer.getAllClients();
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
