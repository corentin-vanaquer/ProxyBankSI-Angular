import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListClientService } from '../services/list-client.service';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent {
  clientToUpdate;
  constructor(
    private actRoute: ActivatedRoute,
    private cliSer: ListClientService,
    private router: Router
  ){}

  ngOnInit() {
/*     this.cliSer.getClientById(this.actRoute.snapshot.paramMap.get('id')).subscribe({
      next : (response) => {
        this.clientToUpdate = response;
      },
      error: (err) => {
        console.log(err);
      },
    }); */
      
  }

   onUpdateClient(){
    this.cliSer.updateClientUrl(this.clientToUpdate).subscribe({
      next : (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/:id/edit');
      },
      error:(err) => {
        console.log(err);
      },
    });
  
  }
}
