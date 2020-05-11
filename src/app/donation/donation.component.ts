import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  name:string;
  address:string;
  type:string;
  contact:number;
  emailid:string;
  desc:string;
  view:boolean=false;
  title:string="Show Form";
  date = new Date();
  constructor(public db: AngularFireDatabase,private router: Router) { 
  }

  ngOnInit(): void {
  }
  toggle(){
    if(this.view==false){
      this.view=true;
      this.title="Hide Form"
    }
    else{
      this.view=false;
      this.title="Show Form"
    }
  }
add():void{
  this.db.list('users').push({name: this.name, address: this.address, email: this.emailid, contact:this.contact, type:this.type, description:this.desc, date:this.date.toISOString() });
  this.router.navigate(['/doners']);
}
}
