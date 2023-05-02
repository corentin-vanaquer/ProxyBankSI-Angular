import { Component, OnInit } from '@angular/core';
import { ListClientService } from '../services/list-client.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map, tap } from 'rxjs';
import { Client } from '../models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  clientForm!: FormGroup;
  clientPriview$!: Observable<Client>;

  constructor(private formBuilder: FormBuilder,
              private listClientService: ListClientService,
              private router: Router) {}
ngOnInit(): void {
  this.clientForm = this.formBuilder.group({
    firstname:[null, Validators.required, Validators],
    name:[null, Validators.required],
    address:[null, Validators.required],
    zipcode:[null, Validators.required],
    city:[null, Validators.required],
    phone:[null, Validators.required]
  },
  {
    updateOn : 'blur'
  });

this.clientPriview$ = this.clientForm.valueChanges.pipe(map(formValue =>({
  ...formValue,
  id:0
  }))
  );

}
  onSubmitForm():void{
  this.listClientService.addClient(this.clientForm.value).pipe(
    tap(() => this.router.navigateByUrl(''))).subscribe()

  }

  return(){
    this.router.navigateByUrl(``);
  }
}


/*   onSubmit(newClient){
    console.log(newClient);

    this.CliSer.addClient(newClient);
    this.router.navigateByUrl('/client');
} */
