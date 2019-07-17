import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  monday = [];
  tuesday = [];

  city: string;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.city = this.route.snapshot.paramMap.get('city');

    this.dataService.getEvents('Monday', this.city)
      .subscribe(e => {
        this.monday = e;
        console.log(e);
      });

    this.dataService.getEvents('Tuesday', this.city)
      .subscribe(e => {
        this.tuesday = e;
      });

  }

  onSelect(m) {
    this.router.navigate(['/events', m.city, m.id]);
  }

}
