import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';



import { CityComponent } from './city.component';
import { CityRoutingModule } from './city-routing.module';


@NgModule({
  declarations: [
    CityComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,

  ],
  providers: [],
  exports: [ ]
})
export class EventsModule { }
