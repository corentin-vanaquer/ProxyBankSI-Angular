import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { Router } from '@angular/router';
import { ListAccountService } from '../services/list-account.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  constructor(private router: Router, private accountService : ListAccountService){}
  @Input() cliSelected: Client; 

ngOnInit(): void {
  
}

onUpdateClient(){
  this.router.navigateByUrl('/edit');
}

onManageAccount(){
  this.accountService.getAllAccounts(this.cliSelected.id).subscribe(account => {
    this.router.navigateByUrl('account',{state : {accounts : account}} );
  })
}
}
