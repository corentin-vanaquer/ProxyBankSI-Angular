import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../models/client';
import { ListClientService } from '../services/list-client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  @Input() allClient: Client[];
  @Output() clientToAccueil = new EventEmitter();
  //router: any;

  constructor( private cliSer : ListClientService, private router: Router ){}

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

  onAddNewClient(): void {
   this.router.navigateByUrl('/add');
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
