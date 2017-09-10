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
    <p>Custom template</p>
    <div class="sample-dual-listbox">
    <ngx-dual-listbox [items]="items" [(selectedItems)]="selectedItems">
        <ng-template #templateItem let-item="data">
            <p>{{item.name}}</p>
        </ng-template>
    </ngx-dual-listbox>
    </div>
    <p>List of items selectedItems</p>
    <div *ngFor="let item of selectedItems">
        {{item.name}}
    </div>
</div>
  `
})
export class DemoComponent {
  items: any[] = [
    { id: 1, name: 'Movie 1', url: '' },
    { id: 2, name: 'Movie 2', url: '' },
    { id: 3, name: 'Movie 3', url: '' },
    { id: 4, name: 'Movie 4', url: '' },
    { id: 5, name: 'Movie 5', url: '' }
  ];

  selectedItems: any[] = [{ id: 1, name: 'Movie 1', url: '' }];
}
