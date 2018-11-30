import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AppEvent } from '../../events-interface';
import { AppState } from '../../app.reducers';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, first, map, takeUntil } from 'rxjs/operators';
import { EventsState } from '../events.reducers';
import { LoadEventsDetails, LoadEventsDetailsSuccess } from '../events.actions';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit, OnDestroy {

  details$: Observable<AppEvent>;
  error$: Observable<string>;
  private destroyed$: Subject<boolean> = new Subject();

  constructor(private store: Store<AppState>,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      filter((params: Params) => params && params.id),
      first(),
      map((params: Params) => params.id),
      takeUntil(this.destroyed$)
    ).subscribe((id: number) => {
      console.log('dispath');
      this.store.dispatch(new LoadEventsDetails(id));
    });

    this.details$ = this.store.pipe(
      select('eventsState'),
      map((state: EventsState) => state && state.details)
    );
    this.error$ = this.store.pipe(
      select('eventsState'),
      map((state: EventsState) => state && state.details && state.details.errors)
    );
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

}
