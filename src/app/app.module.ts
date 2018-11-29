import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { EventsEffects } from './events/events.effects';
import { EventsService } from './events/events.service';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      EventsEffects
    ]),
    MatButtonModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
