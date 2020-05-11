import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
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
 items:Observable<any[]>;
  constructor(public db: AngularFireDatabase) { 
this.items= db.list('users').valueChanges();
  }

  ngOnInit(): void {
  }
add():void{
  this.db.list('users').push({name: this.name, address: this.address, email: this.emailid, contact:this.contact, type:this.type })
}
}
