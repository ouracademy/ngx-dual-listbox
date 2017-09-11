import { Component } from '@angular/core';

@Component({
  selector: 'ngx-custom-template',
  styles: [
    ` 
    .custom-item {
      list-style: none;
    }

    /* Sounds like bootstrap? */
    .custom-badge {
      display: inline-block;
      min-width: 10px;
      padding: 3px 7px;
      font-size: 12px;
      font-weight: 700;
      line-height: 1;
      color: #fff;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      background-color: #777;
      border-radius: 10px;
    }    
  `
  ],
  template: `
    <h2>Custom template</h2>
    <div class="sample-dual-listbox">
      <ngx-dual-listbox class="list-group" [items]="items" [(selectedItems)]="selectedItems">
        <ng-template #templateItem let-item="data">
          <li class="custom-item">
            <span class="custom-badge">{{item.badge}}</span>
            {{item.text}}
          </li>
        </ng-template>
      </ngx-dual-listbox>
    </div>
    <h3>List of items selectedItems</h3>
    <div *ngFor="let item of selectedItems">
        {{item | json}}
    </div>
    `
})
export class CustomTemplateComponent {
  items: MenuItem[] = [
    { id: 1, text: 'News', badge: 5 },
    { id: 2, text: 'Comments', badge: 10 },
    { id: 3, text: 'Updates', badge: 2 }
  ];

  selectedItems: MenuItem[] = [{ id: 1, text: 'News', badge: 5 }];
}

interface MenuItem {
  id: number;
  text: string;
  badge: number;
}
