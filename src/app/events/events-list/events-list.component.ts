import {Component, OnInit} from '@angular/core';
import {AppEvent} from '../../events-interface';
import {Observable} from 'rxjs';
import {AppState} from '../../app.reducers';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadEventsList} from '../events.actions';
import {map} from 'rxjs/operators';
import {EventsState} from '../events.reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  list$: Observable<AppEvent[]>;


  constructor(private store: Store<AppState>,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadEventsList());

    this.list$ = this.store.select('eventsState').pipe(
      map((state: EventsState) => state && state.list));
  }

  onNavigateToDetails(id: number): void {
    if (id) {
      this.router.navigate([`../details/${id}`], {relativeTo: this.route});
    }
  }

}
