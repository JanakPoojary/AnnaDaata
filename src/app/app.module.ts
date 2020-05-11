import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule} from '@angular/fire/database'
import { environment } from '../environments/environment'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DonationComponent } from './donation/donation.component';
import { DonersComponent } from './doners/doners.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DonationComponent,
    DonersComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
