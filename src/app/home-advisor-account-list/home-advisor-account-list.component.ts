import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-advisor-account-list',
  templateUrl: './home-advisor-account-list.component.html',
  styleUrls: ['./home-advisor-account-list.component.css']
})
export class HomeAdvisorAccountListComponent implements OnInit {

  accountArray: any = [];
  selectedAccount;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

  }

  fetchSelectedAccount(account) {
    this.selectedAccount = account;
  }

}
