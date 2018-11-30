import { StoreModule } from '@ngrx/store';

import {
  MatButtonModule, MatCardModule, MatCheckboxModule,
  MatIconModule, MatMenuModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    ListItemComponent
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
    MatProgressSpinnerModule
  ],
  exports: [ListItemComponent]
})

export class EventsSharedModule {
}
