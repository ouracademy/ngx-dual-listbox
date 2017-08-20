import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef
} from '@angular/core';
import { TransferenceHandler } from '../../model/transference';

@Component({
  selector: 'ngx-dual-listbox',
  template: `<div class="content">
  <div>
    <div *ngFor="let item of availableList" (click)="chooseItem(item,1)">
      <div *ngIf="templateItem;else noTemplate">
        <ng-container [ngTemplateOutlet]="templateItem" [ngOutletContext]="{ data: item }">
        </ng-container>
      </div>
    </div>
  </div>
  <div>
    <button class="btn" (click)="transferTo(1,2)">Pasar a seleccionados</button>
    <button class="btn" (click)="transferTo(2,1)">Pasar a candidatos</button>
  </div>
  <div>
    <div *ngFor="let item of selectedList" (click)="chooseItem(item,2)">
      <div *ngIf="templateItem;else noTemplate">
        <ng-container [ngTemplateOutlet]="templateItem" [ngOutletContext]="{ data: item }">
        </ng-container>
      </div>
    </div>
  </div>
</div>
<div #noTemplate>
  {{item.name}}
</div>`
})
export class NgxDualListboxComponent implements OnInit {
  static DEFAULT_MESSAGES = {
    add: 'Add',
    remove: 'Remove',
    all: 'All',
    none: 'None'
  };
  projectTitle: string = 'Library ui abput selection';
  @Input() key = 'id';
  @Input() display = 'name';
  @Input() enablefilter = false;
  @Input() enableSort = false;
  @Input() messages: any = NgxDualListboxComponent.DEFAULT_MESSAGES;
  @Input() sourceList: any[];
  @Input() selectedList: any[];
  @Output() selectedsChange = new EventEmitter();
  @ContentChild('templateItem') templateItem: TemplateRef<any>;
  choosedHandler: TransferenceHandler;

  availableList: any[] = [];
  constructor() {
    this.choosedHandler = new TransferenceHandler();
  }
  ngOnInit() {}
  initializeLists() {}
  chooseItem(item: any, container: number) {
    this.choosedHandler.add(item, container);
  }
  transferTo(sourceId: number, targetId: number) {}
}
