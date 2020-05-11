import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items:Observable<any[]>;

  constructor(public db: AngularFireDatabase) { 
    this.items= db.list('users').valueChanges();
  }

  ngOnInit(): void {
  }

}
