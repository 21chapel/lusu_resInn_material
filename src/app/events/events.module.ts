import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsComponent } from './events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [
    EventsComponent, EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  providers: [],
  exports: [ EventsComponent ]
})
export class EventsModule { }
