import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-list-item',
  templateUrl: './client-list-item.component.html',
  styleUrls: ['./client-list-item.component.css']
})
export class ClientListItemComponent {
  @Input() oneClient: Client;
  @Output() clientToList = new EventEmitter();

  sendClientToList() {
    this.clientToList.emit(this.oneClient);
  }

  constructor(){}
  ngOnInit(){}

}
