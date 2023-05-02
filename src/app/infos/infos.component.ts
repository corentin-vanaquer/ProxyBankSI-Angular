import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../models/client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit{
  @Output() infosClientSelected = new EventEmitter();
/*  selectedClient;
 clientInfos!: Client;
 clientInfos$!: Observable<Client> */
// @Input ('cliSelected') public selectedClient;
 //@Input() cliSelected: Client;
//@Input() selectedClient: Client;
//@Input() allClients : any = [];
 //allClients: Client[];
 //@Output() clientToAccueil = new EventEmitter();
 
 
 constructor(
        private activatedRoute: ActivatedRoute){}

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
 /* if(this.cliSelected){
  this.cliSer.getAllClientsId(this.cliSelected.id).subscribe(clients => {
    this.allClients = clients;
  }) */

 }


}
/*   this.activatedRoute.paramMap.subscribe(params =>{
        const clientId = params['id'];
        const clientIdNum =Number.parseInt(clientId);
        this.cliSer.getAllClientsId(clientIdNum).subscribe
        (clients =>{
          this.cliSelected = clients;
        });

      });
            */ 
         /*  recupererSelectedCli(client){
            this.clientToAccueil.emit(client); */

           /*  sendClientToAccueil(cli){
              this.clientToAccueil.emit(cli);
            }
          } 
         */


