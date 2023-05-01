import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListClientService } from '../services/list-client.service';
import { ClientListComponent } from '../client-list/client-list.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit{
 selectedClient;
 clientInfos!: Client;
 clientInfos$!: Observable<Client>
  constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private cliSer: ListClientService,    
  ){}

 ngOnInit(){
   /*   const clientId = this.activatedRoute.params['id'];
    this.clientInfos$ = this.cliSer.getClientByIdUrl(clientId);  */

/* /* 
  this.activatedRoute.paramMap.subscribe({
      next:(p: ParamMap) =>{
        this.clientInfos = this.cliSer.getClientById(p.get('id')); */
        
/*         .subscribe({
          next:(response: Client) =>{
            this.cliInfos = response;
            console.log(this.id);
          },
          error:(err) =>{
            console.log(err.error['message'],err['status']); */
          
          }

  recupererSelectedCli(client){
    this.selectedClient = client;
  }
        
}

