import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  constructor(private router: Router){}
  @Input() cliSelected: Client; 

ngOnInit(): void {
  
}

onUpdateClient(){
  this.router.navigateByUrl('/edit');
}
}
