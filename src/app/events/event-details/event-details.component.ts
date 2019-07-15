import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/core/data.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getEvent(id).subscribe( e => {
      this.event = e;
      console.log(e);
    });
  }

}
