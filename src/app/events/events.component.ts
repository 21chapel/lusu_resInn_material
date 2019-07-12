import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  monday = [];
  tuesday = [];

  id: string;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.dataService.getEvents('Monday', this.id)
      .subscribe(e => {
        this.monday = e;
        console.log(e);
      });

    this.dataService.getEvents('Tuesday', this.id)
      .subscribe(e => {
        this.tuesday = e;
      });

  }



}
