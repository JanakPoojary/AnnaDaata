import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doners',
  templateUrl: './doners.component.html',
  styleUrls: ['./doners.component.css']
})
export class DonersComponent implements OnInit {
  items:Observable<any[]>;

  constructor(public db: AngularFireDatabase) { 
    this.items= db.list('users').valueChanges();
  }

  ngOnInit(): void {
  }

}
