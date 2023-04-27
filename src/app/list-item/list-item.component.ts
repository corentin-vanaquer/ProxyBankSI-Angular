import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {
  @Input() oneClient: Client;
  @Output() clientToList = new EventEmitter();

  sendClientToList() {
    this.clientToList.emit(this.oneClient);
  }

  constructor(){}
  ngOnInit(){}

}
