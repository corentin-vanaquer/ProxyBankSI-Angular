import { RouterModule, Routes } from "@angular/router";
import { HomeAdvisorClientListComponent } from "./home-advisor-client-list/home-advisor-client-list.component";
import { HomeAdvisorAccountListComponent } from "./home-advisor-account-list/home-advisor-account-list.component";
import { AddClientComponent } from "./add-client/add-client.component";
import { UpdateClientComponent } from "./update-client/update-client.component";
import { AddCurrentAccountComponent } from "./add-current-account/add-current-account.component";
import { AddSavingsAccountComponent } from "./add-savings-account/add-savings-account.component";

const myRoutes : Routes = [
  {path:'', component: HomeAdvisorClientListComponent},
  {path: 'add', component: AddClientComponent},
  {path:'edit', component: UpdateClientComponent},
  {path:'account', component: HomeAdvisorAccountListComponent},
  {path:'add-current-account', component: AddCurrentAccountComponent},
  {path:'add-savings-account', component: AddSavingsAccountComponent},
];

export const APP_ROUTING = RouterModule.forRoot(myRoutes);
