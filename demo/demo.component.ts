import { Component } from '@angular/core';

@Component({
  selector: 'ngx-demo-app',
  styles: [
    `.sample-dual-listbox{
       width: 600px;
       margin: auto;
    }`
  ],
  template: `
    <div class="container">
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
    </div>
  `
})
export class DemoComponent {
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
