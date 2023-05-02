import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListAccountService } from '../services/list-account.service';
import { tap } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

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

  soldeNoWhiteSpace = /^\S*$/;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accountService: ListAccountService
  ) {}

    soldeFromControl = new FormControl('', [
     Validators.required,
     Validators.min(0),
     Validators.pattern(this.soldeNoWhiteSpace)
  ]);

  return() {
    const clientId = this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl(`/account/${clientId}`);
  }

  createCurrentAccount(formValue) {
    const clientId = this.route.snapshot.paramMap.get('id');

    this.accountService.createCurrentAccountService(formValue).subscribe(
      (response) => {
        const accountId = response.id;
        const clientIdNum = Number.parseInt(clientId);

        const request = {
          clientId: clientIdNum,
          accountId: accountId
        };

        this.accountService
          .assignCurrentAccountToClient(request)
          .subscribe(() => {
            alert('Le compte a été créé avec succès');
            this.router.navigate([`/account/${clientId}`]);
          });
      }
    );
  }
}
