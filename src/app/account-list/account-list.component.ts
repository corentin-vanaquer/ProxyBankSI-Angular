import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListAccountService } from '../services/list-account.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {

  @Input() allAccounts : any = [];
  @Output() accountToHome = new EventEmitter();

  constructor(private accountService: ListAccountService, private router: Router, private route: ActivatedRoute) {

  }


ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const clientId = params.get('id');
      const clientIdNum = Number.parseInt(clientId);
      this.accountService.getAllAccounts(clientIdNum).subscribe(accounts => {
        this.allAccounts = accounts;
      });
    });
  }

  sendAccountToHome(account){
    this.accountToHome.emit(account);
  }

  addNewCurrentAccount(): void {
    const clientId = this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl(`/add-current-account/${clientId}`);
   }

   addNewSavingsAccount(): void {
    const clientId = this.route.snapshot.paramMap.get('id');
    this.router.navigateByUrl(`/add-savings-account/${clientId}`);
   }
}
