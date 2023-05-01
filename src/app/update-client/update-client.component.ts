import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListClientService } from '../services/list-client.service';
import { Client } from '../models/client';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


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
