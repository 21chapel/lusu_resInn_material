import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { TestComponent } from '../test/test.component';

const routes: Routes = [
  { path: 'events', pathMatch: 'full', component: EventsComponent },
  { path: 'events/:city', pathMatch: 'full', component: EventsComponent },
  { path: 'events/:city/:id', pathMatch: 'full', component: EventDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
