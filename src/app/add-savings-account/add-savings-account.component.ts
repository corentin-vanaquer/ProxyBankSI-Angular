import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-savings-account',
  templateUrl: './add-savings-account.component.html',
  styleUrls: ['./add-savings-account.component.css']
})
export class AddSavingsAccountComponent {

  savingsAccountToCreate = {
    accountNumber: '',
    solde: '',
    rate: ''
  };

  constructor(private router: Router){}

  return(){
    this.router.navigateByUrl('/account');
  }

}
