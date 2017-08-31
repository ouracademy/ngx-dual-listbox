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
    <ngx-dual-listbox [sourceList]="sourceItems" [key]="'id'" [(selectedList)]="selecteds">
        <ng-template #templateItem let-item="data">
            <p>{{item.name}}
                <a (click)="doAny(item)"></a>
            </p>
        </ng-template>
    </ngx-dual-listbox>
    </div>
    <p>List of items selecteds</p>
    <div *ngFor="let item of selecteds">
        {{item.name}}
    </div>
</div>
  `
})
export class DemoComponent {
  sourceItems: any[] = [
    { id: 1, name: 'Movie 1', url: '' },
    { id: 2, name: 'Movie 2', url: '' },
    { id: 3, name: 'Movie 3', url: '' },
    { id: 4, name: 'Movie 4', url: '' },
    { id: 5, name: 'Movie 5', url: '' }
  ];
  selecteds: any[] = [{ id: 1, name: 'Movie 1', url: '' }];
  doAny(selected: any) {
    console.log('do any');
  }
}
