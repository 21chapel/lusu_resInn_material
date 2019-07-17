import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



import { EventsComponent } from './events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsRoutingModule } from './events-routing.module';

@NgModule({
  declarations: [
    EventsComponent, EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  exports: [ EventsComponent ]
})
export class EventsModule { }
