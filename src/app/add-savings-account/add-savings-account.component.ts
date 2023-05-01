import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListAccountService } from '../services/list-account.service';

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

  constructor(private router: Router, private route: ActivatedRoute, private accountService:ListAccountService){}

  return(){
    const clientId = this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl(`/account/${clientId}`);
  }

  createSavingAccount(formValue) {
    const clientId = this.route.snapshot.paramMap.get('id');

    this.accountService.createSavingAccountService(formValue).subscribe(
      (response) => {

        const accountId = response.id;
        const clientIdNum = Number.parseInt(clientId);

        const request = {
          clientId: clientIdNum,
          accountId: accountId
        };

        this.accountService
          .assignSavingAccountToClient(request)
          .subscribe(() => {
          alert('Le compte a été créé avec succès');
          this.router.navigate([`/account/${clientId}`]);
      });
      }
    );
  }
}
