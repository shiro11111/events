import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsRoutingModule } from './events.routing.module';
import { EventsSharedModule } from '../events-shared/events-shared.module';

@NgModule({
  declarations: [
    EventsListComponent,
    EventsDetailsComponent
  ],
  imports: [
    CommonModule,
    StoreDevtoolsModule,
    StoreModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    EventsRoutingModule,
    EventsSharedModule
  ]
})
export class EventsModule { }
