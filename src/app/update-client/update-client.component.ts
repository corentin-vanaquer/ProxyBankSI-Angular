import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListClientService } from '../services/list-client.service';
import { Client } from '../models/client';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent {
  //@Input() cliSelected: Client;
  client: Client;
  clientToUpdate;
  constructor(
    private actRoute: ActivatedRoute,
    private cliSer: ListClientService,
    private router: Router
  ){}

  ngOnInit() {
  /*    this.cliSer
     .getClientByIdUrl(this.actRoute.snapshot.paramMap.get('id')).subscribe({
      next : (response) => {
        this.clientToUpdate = response;
      },
      error: (err) => {
        console.log(err);
      },
    });  */

/*     this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.client = this.cliSer.getClientByIdUrl(p.get('id'));
      }
    })
     */
 /*    const clientId = this.actRoute.snapshot.paramMap('id');
    console.log(clientId); */
    //this.client = this.cliSer.getClientByIdUrl('id');
     
  }
   

   onUpdateClient(){

   this.cliSer.updateClientUrl(this.client).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('');
      },
      error: (err) => {
        console.log(err);
      },
   });
 
  }
}
