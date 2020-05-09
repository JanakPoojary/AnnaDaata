import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
add():void{
  alert("Thankyou for donating");
}
}
