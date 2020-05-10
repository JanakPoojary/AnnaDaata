import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DonationComponent } from './donation/donation.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'donation', component: DonationComponent },
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path:'*',redirectTo:'error',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
