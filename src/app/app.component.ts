import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Ev } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events: Ev;

  constructor(private db: AngularFireDatabase) {
    db.list('/events').valueChanges().subscribe(e => {
      this.events = e;
      console.log(e);
    });
   }

}
