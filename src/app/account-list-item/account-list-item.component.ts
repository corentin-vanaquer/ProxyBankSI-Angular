import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account-list-item',
  templateUrl: './account-list-item.component.html',
  styleUrls: ['./account-list-item.component.css']
})
export class AccountListItemComponent {

  @Input() account: any;
  

  constructor(){}
  ngOnInit(){}
}
