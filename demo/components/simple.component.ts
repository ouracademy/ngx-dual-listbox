import { Component } from '@angular/core';

@Component({
  selector: 'ngx-simple-demo',
  template: `
    <h2>Simple demo</h2>
    <p>With default key (your object needs to have an 'id') and
    default template (show the item's name)</p>
    <div class="sample-dual-listbox">
      <ngx-dual-listbox [items]="items" [(selectedItems)]="selectedItems">
      </ngx-dual-listbox>
    </div>
    <h3>List of items selectedItems</h3>
    <div *ngFor="let item of selectedItems">
        {{item | json}}
    </div>
    `
})
export class SimpleDemoComponent {
  items: Movie[] = [
    { id: 1, name: 'Movie 1', url: '' },
    { id: 2, name: 'Movie 2', url: '' },
    { id: 3, name: 'Movie 3', url: '' },
    { id: 4, name: 'Movie 4', url: '' },
    { id: 5, name: 'Movie 5', url: '' }
  ];

  selectedItems: Movie[] = [{ id: 1, name: 'Movie 1', url: '' }];
}

interface Movie {
  id: number;
  name: string;
  url: string;
}
