import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListAccountService } from '../services/list-account.service';
import { tap } from 'rxjs/operators';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

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

  patterns = {
    onlyNumbers: '[0-9]+'
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private accountService: ListAccountService
  ) {}

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
