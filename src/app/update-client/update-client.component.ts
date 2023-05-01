import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListClientService } from '../services/list-client.service';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent {
  clientData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    if (history.state && history.state.clientData) {
      this.clientData = JSON.parse(history.state.clientData);
    }
  }
}
