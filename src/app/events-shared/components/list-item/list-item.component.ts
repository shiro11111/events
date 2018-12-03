import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() dueOn: Date;
  @Input() shortDescription: string;
  @Input() content: string;
  @Input() thumbnail: string;

  @Output() navigateToDetails = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  // onNavigateToDetails(id: number): void {
  //   this.navigateToDetails.emit(id);
  // }

}
