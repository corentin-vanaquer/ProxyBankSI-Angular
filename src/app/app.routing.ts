import { RouterModule, Routes } from "@angular/router";
import { HomeAdvisorClientListComponent } from "./home-advisor-client-list/home-advisor-client-list.component";
import { HomeAdvisorAccountListComponent } from "./home-advisor-account-list/home-advisor-account-list.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { UpdateClientComponent } from "./update-client/update-client.component";
import { AddCurrentAccountComponent } from "./add-current-account/add-current-account.component";
import { AddSavingsAccountComponent } from "./add-savings-account/add-savings-account.component";
import { ClientDetailsComponent } from "./client-details/client-details.component";
import { InfosComponent } from "./infos/infos.component";

const myRoutes : Routes = [
<<<<<<< HEAD
   {path:'', component: HomeAdvisorClientListComponent}, 
    { 
    path: ':id',component: InfosComponent,
    children: [
      {path:'edit', component: UpdateClientComponent},
    ],
   },
  {path: 'add', component: AddClientComponent}, 
  {path:'account', component: HomeAdvisorAccountListComponent},
=======
  {path:'', component: HomeAdvisorClientListComponent},
  {path: 'add', component: AddClientComponent},
  {path:'edit', component: UpdateClientComponent},
  {path:'account/:id', component: HomeAdvisorAccountListComponent},
>>>>>>> 5daccbc549805ea2ccd67bb3855e52d2fee51fd3
  {path:'add-current-account', component: AddCurrentAccountComponent},
  {path:'add-savings-account', component: AddSavingsAccountComponent},
];

export const APP_ROUTING = RouterModule.forRoot(myRoutes);
