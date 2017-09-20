import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// Components Imports
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

// Service Imports
import { ClientService } from './services/client.service';


const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyB5_WLW0Rf4Pg-FU8XwJsgjlyF9V6uZnZc",
  authDomain: "clients-database-30a1e.firebaseapp.com",
  databaseURL: "https://clients-database-30a1e.firebaseio.com",
  storageBucket: "clients-database-30a1e.appspot.com",
  messagingSenderId: "245311431618"
}

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
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
