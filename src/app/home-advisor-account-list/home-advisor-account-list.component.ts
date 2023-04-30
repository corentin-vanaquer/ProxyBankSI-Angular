import { Component } from '@angular/core';
import { ListAccountService } from '../services/list-account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-advisor-account-list',
  templateUrl: './home-advisor-account-list.component.html',
  styleUrls: ['./home-advisor-account-list.component.css']
})
export class HomeAdvisorAccountListComponent {

  accountArray: any = [];
  selectedAccount;

  constructor(private accountService:ListAccountService, private route: ActivatedRoute){}

  ngOnInit(){
   this.route.paramMap.subscribe(param => {
    this.accountArray = history.state.account;
   });
  }

  fetchSelectedAccount(account){
    this.selectedAccount = account;
  }

}
