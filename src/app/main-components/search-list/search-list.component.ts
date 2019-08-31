import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  @Output() selectedList = new EventEmitter();
  @Input() lists: any;

  constructor() { }

  ngOnInit() {
  }
  public onClickList(list:any) {
    this.selectedList.emit(list);
  }
}
