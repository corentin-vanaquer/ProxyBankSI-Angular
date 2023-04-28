import { Component, Input } from '@angular/core';
import { Client } from '../models/client';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent {
  @Input() cliSelected: Client;  
}
