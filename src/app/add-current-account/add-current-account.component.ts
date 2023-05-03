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

/**
 * This function creates a current account for a specific client and assigns it to them.
 * 
 * @param formValue The form data required to create the account.
 * 
 * @returns Nothing.
 */
createCurrentAccount(formValue) {
  // Get the client ID from the route.
  const clientId = this.route.snapshot.paramMap.get('id');

  // Create the current account using the accountService.
  // The subscribe method is used to wait for the server response.
  this.accountService.createCurrentAccountService(formValue).subscribe(
    (response) => {
      // Get the ID of the created account.
      const accountId = response.id;
      const clientIdNum = Number.parseInt(clientId);

      // Create the request to assign the current account to the client.
      const request = {
        clientId: clientIdNum,
        accountId: accountId
      };

      // Assign the current account to the client using the accountService.
      // The subscribe method is used to wait for the server response.
      this.accountService
        .assignCurrentAccountToClient(request)
        .subscribe(() => {
          // Show a confirmation alert.
          alert('The account was created successfully and assigned to the client.');
          // Redirect to the client's account page.
          this.router.navigate([`/account/${clientId}`]);
        });
    }
  );
}

}
