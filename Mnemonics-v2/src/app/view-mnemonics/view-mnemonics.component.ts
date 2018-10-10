import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ViewMnemonicsDataSource } from './view-mnemonics-datasource';

@Component({
  selector: 'app-view-mnemonics',
  templateUrl: './view-mnemonics.component.html',
  styleUrls: ['./view-mnemonics.component.css']
})
export class ViewMnemonicsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ViewMnemonicsDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description'];

  ngOnInit() {
    this.dataSource = new ViewMnemonicsDataSource(this.paginator, this.sort);
  }
}
