import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAdvisorClientListComponent } from './home-advisor-client-list/home-advisor-client-list.component';
import { HomeAdvisorAccountListComponent } from './home-advisor-account-list/home-advisor-account-list.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientListItemComponent } from './client-list-item/client-list-item.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountListItemComponent } from './account-list-item/account-list-item.component';
import { APP_ROUTING } from './app.routing';
import { UpdateClientComponent } from './update-client/update-client.component';
import { AddClientComponent } from './add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfosComponent } from './infos/infos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAdvisorClientListComponent,
    ClientListComponent,
    ClientListItemComponent,
    ClientDetailsComponent,
    HomeAdvisorAccountListComponent,
    AccountListComponent,
    AccountListItemComponent,
    AccountDetailsComponent,
    UpdateClientComponent,
    AddClientComponent,
    InfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    APP_ROUTING,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 