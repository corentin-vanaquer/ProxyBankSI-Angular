import { Component } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListClientService } from '../services/list-client.service';

@Component({
  selector: 'app-client-infos',
  templateUrl: './client-infos.component.html',
  styleUrls: ['./client-infos.component.css']
})
export class ClientInfosComponent {
 id; 
 clientInfos: Client;

 constructor(
      private activatedRoute: ActivatedRoute,
      private router : Router,
      private cliSer: ListClientService
 ){}

 ngOnInit() {

  this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.cliSer.getClientByIdUrl(p.get('myid')).subscribe({
          next:(response: Client) => {
            this.clientInfos = response;
          }
        })
      }

  })
 }
}
