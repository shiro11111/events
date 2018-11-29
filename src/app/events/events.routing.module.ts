import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: EventsListComponent
  },
  {
    path: 'details/:id',
    component: EventsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EventsRoutingModule {}
