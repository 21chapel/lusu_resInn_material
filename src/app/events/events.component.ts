import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  monday = [];
  tuesday = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getEvents('Monday')
      .subscribe(e => {
        this.monday = e;
      });

    this.dataService.getEvents('Tuesday')
      .subscribe(e => {
        this.tuesday = e;
      });

  }



}
