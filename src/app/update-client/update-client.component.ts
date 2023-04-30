import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListClientService } from '../services/list-client.service';
import { Client } from '../models/client';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent {
  id;
  clientToUpdate : Client;
  constructor(
    private actRoute: ActivatedRoute,
    private cliSer: ListClientService,
    private router: Router
  ){}

  ngOnInit() {
 /*     this.cliSer
     .getClientByIdUrl(this.actRoute.snapshot.paramMap.get('id')).subscribe({
      next : (response) => {
        this.clientToUpdate = response;
      },
      error: (err) => {
        console.log(err);
      },
    });  */

    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.clientToUpdate = this.cliSer.getClientById(p.get('id'));
      }
    })
       

   /*   this.clientToUpdate = this.cliSer.getClientById(this.actRoute.snapshot.paramMap.get('id'));  */
    
     //this.clientToUpdate = 
  }

   onUpdateClient(){
    this.cliSer.updateClientUrl(this.clientToUpdate).subscribe({
      next : (response) => {
        alert(response['message']);
        this.router.navigateByUrl('');
      },
      error:(err) => {
        console.log(err);
      },
    });
  
  }
}
