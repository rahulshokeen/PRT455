import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ViewMnemonicsItem {
  name: string;
  id: number;
  description: string;
  rating: number;
  
}

// TODO: replace this with real data from your application
const MNEMONICS_DATA: ViewMnemonicsItem[] = [
  {id: 1, name: 'Organic Stuff For You', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 2, name: 'Helium', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 3, name: 'Lithium', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 4, name: 'Beryllium', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 5, name: 'Boron', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 6, name: 'Carbon', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 7, name: 'Nitrogen', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 8, name: 'Oxygen', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 9, name: 'Fluorine', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 10, name: 'Neon', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 11, name: 'Sodium', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 12, name: 'Magnesium', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 13, name: 'Aluminum', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 14, name: 'Silicon', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 15, name: 'Phosphorus', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 16, name: 'Sulfur', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 17, name: 'Chlorine', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 18, name: 'Argon', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 19, name: 'Potassium', description: 'Yes you get only organic stuff', rating: 1.5},
  {id: 20, name: 'Calcium', description: 'Yes you get only organic stuff', rating: 1.5},
];

/**
 * Data source for the ViewMnemonics view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ViewMnemonicsDataSource extends DataSource<ViewMnemonicsItem> {
  data: ViewMnemonicsItem[] = MNEMONICS_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ViewMnemonicsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ViewMnemonicsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ViewMnemonicsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'rating': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
