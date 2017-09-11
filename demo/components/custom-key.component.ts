import { Component } from '@angular/core';

@Component({
  selector: 'ngx-custom-key',
  template: `
    <h2>Custom key</h2>
    <p>With custom key (like mongo '_id') and
    default template (show the item's name)</p>
    <div class="sample-dual-listbox">
      <ngx-dual-listbox [items]="items" key="_id" [(selectedItems)]="selectedItems">
      </ngx-dual-listbox>
    </div>
    <h3>List of items selectedItems</h3>
    <div *ngFor="let item of selectedItems">
        {{item | json}}
    </div>
    `
})
export class CustomKeyDemoComponent {
  items: Movie[] = [
    { _id: 1, name: 'Movie 1', url: '' },
    { _id: 2, name: 'Movie 2', url: '' },
    { _id: 3, name: 'Movie 3', url: '' },
    { _id: 4, name: 'Movie 4', url: '' },
    { _id: 5, name: 'Movie 5', url: '' }
  ];

  selectedItems: Movie[] = [{ _id: 1, name: 'Movie 1', url: '' }];
}

interface Movie {
  _id: number;
  name: string;
  url: string;
}
