import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonationComponent } from './donation/donation.component';
import { DonersComponent } from './doners/doners.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'donation', component: DonationComponent },
  {path: 'doners', component:DonersComponent},
  {path: 'adminLogin', component: LoginComponent},
  {path: 'adminDashboard', component:DashboardComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'*',redirectTo:'error',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
