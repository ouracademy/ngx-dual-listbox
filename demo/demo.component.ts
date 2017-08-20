import { Component } from '@angular/core';

@Component({
  selector: 'ngx-demo-app',
  template: `
    <div class="container">
    <p>Custom template</p>
    <ngx-dual-listbox [sourceList]="sourceItems" [selectedList]="selecteds" (selectedsChange)="doAny($event)">
        <ng-template #templateItem let-item="data">
            <p>{{item.name}} - hola
                <a (click)="go(item.url)"></a>
            </p>
        </ng-template>
    </ngx-dual-listbox>

    <p>List of items selecteds</p>
    <div *ngFor="let item of selecteds">
        {{item.name}}
    </div>
</div>
  `
})
export class DemoComponent {
  sourceItems: any[] = [
    { name: 'Movie 1', url: '' },
    { name: 'Movie 2', url: '' },
    { name: 'Movie 3', url: '' },
    { name: 'Movie 4', url: '' },
    { name: 'Movie 5', url: '' }
  ];
  selecteds: any[] = [{ name: 'Movie 1', url: '' }];
  doAny(selecteds: any[]) {
    this.selecteds = selecteds;
  }

  go(url: any) {}
}
