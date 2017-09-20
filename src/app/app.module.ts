import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './comoponents/dashboard/dashboard.component';
import { ClientsComponent } from './comoponents/clients/clients.component';
import { ClientDetailsComponent } from './comoponents/client-details/client-details.component';
import { AddClientComponent } from './comoponents/add-client/add-client.component';
import { EditClientComponent } from './comoponents/edit-client/edit-client.component';
import { NavbarComponent } from './comoponents/navbar/navbar.component';
import { SidebarComponent } from './comoponents/sidebar/sidebar.component';
import { LoginComponent } from './comoponents/login/login.component';
import { RegisterComponent } from './comoponents/register/register.component';
import { SettingsComponent } from './comoponents/settings/settings.component';
import { PageNotFoundComponent } from './comoponents/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
