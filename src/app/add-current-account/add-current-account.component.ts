import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-current-account',
  templateUrl: './add-current-account.component.html',
  styleUrls: ['./add-current-account.component.css']
})
export class AddCurrentAccountComponent {

  currentAccountToCreate = {
    accountNumber: '',
    solde: '',
    threshold: ''
  };

  constructor(private router: Router){}

  return(){
    this.router.navigateByUrl('/account');
  }
}
