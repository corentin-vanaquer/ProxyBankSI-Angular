import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { Router } from '@angular/router';
import { ListClientService } from '../services/list-client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  //public cliId: number;
  constructor(private router: Router, private cliSer: ListClientService ){}
  @Input() cliSelected: Client; 

ngOnInit(): void {
  
}

/* onViewClient(){
  this.router.navigateByUrl(`/${this.cliSelected.id}`);
  this.cliId= this.cliSelected.id;
} */
}

