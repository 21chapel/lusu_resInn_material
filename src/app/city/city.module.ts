import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CityComponent } from './city.component';
import { CityRoutingModule } from './city-routing.module';

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    CityComponent
  ],
  imports: [
    CommonModule,
    CityRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  exports: [ CityComponent ]
})
export class CityModule { }
