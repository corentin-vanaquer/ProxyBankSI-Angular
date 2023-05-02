import { RouterModule, Routes } from "@angular/router";
import { HomeAdvisorClientListComponent } from "./home-advisor-client-list/home-advisor-client-list.component";
import { HomeAdvisorAccountListComponent } from "./home-advisor-account-list/home-advisor-account-list.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { UpdateClientComponent } from "./update-client/update-client.component";
import { AddCurrentAccountComponent } from "./add-current-account/add-current-account.component";
import { AddSavingsAccountComponent } from "./add-savings-account/add-savings-account.component";
import { ClientDetailsComponent } from "./client-details/client-details.component";
import { InfosComponent } from "./infos/infos.component";
import { ClientInfosComponent } from "./client-infos/client-infos.component";

const myRoutes : Routes = [
  {path:'', component: HomeAdvisorClientListComponent},
  {path: 'add', component: AddClientComponent},
  { path: 'edit', component: UpdateClientComponent },
  {path:'account/:id', component: HomeAdvisorAccountListComponent},
  {path:'add-current-account/:id', component: AddCurrentAccountComponent},
  {path:'add-savings-account/:id', component: AddSavingsAccountComponent},
];

export const APP_ROUTING = RouterModule.forRoot(myRoutes);
