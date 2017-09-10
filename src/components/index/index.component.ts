import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  TemplateRef
} from '@angular/core';

import { ListSelection, ListSelectionImpl } from '../../model/list-selection';
import { difference } from '../../model/set';

@Component({
  selector: 'ngx-dual-listbox',
  styles: [
    `
    *{
        box-sizing: border-box;
    }
    .container-dualListBox{
        display: -webkit-box; 
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex; 
        display: flex;

        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
     }
     .container-dualListBox > div{
             height: 100%;
             max-height: 100%;
             display: flex;
             flex-direction: column;
             place-content: flex-start;
     }
     .container-items{
        align-items: flex-start;
        width:40%;
        border: 1px solid #ccc8c8;
     }
     .container-buttons{
        align-items: center;
        width:20%;
     }
     .btn-arrow{
           border: 1px solid #afa7a7;
           background: #9c9797;
           color: white;
           padding: 3px;
           margin: 5px;
           width:90px;
           text-align: center;
     }
     .choosed{
           width: 100%;
           background: #91949c;
           color: white;
     }`
  ],
  template: `
  <div class="container-dualListBox">
    <div class="container-items" [style.minHeight]="minHeight">
      <div *ngFor="let item of availableItems.totalItems" [ngClass]="{ choosed: availableItems.isSelected(item,1) }" (click)="availableItems.select(item)">
        <div *ngIf="templateItem;else noTemplateItem">
          <ng-container [ngTemplateOutlet]="templateItem" [ngOutletContext]="{ data: item }">
          </ng-container>
        </div>
      </div>
    </div>
    <div class="container-buttons">
       <div class="" (click)="transferTo(1,2)">
       <div *ngIf="templateArrowRight;else arrowRigth">
          <ng-container [ngTemplateOutlet]="templateArrowRight">
          </ng-container>
       </div>
      <ng-template #arrowRigth class="btn-arrow">
        <div class="btn-arrow">Seleccionar</div>
      </ng-template>
    </div>
    <div class="" (click)="transferTo(2,1)">
        <div *ngIf="templateArrowLeft;else arrowLeft">
          <ng-container [ngTemplateOutlet]="templateArrowLeft">
          </ng-container>
        </div>
        <ng-template #arrowLeft>
          <div class="btn-arrow">Regresar</div>
        </ng-template>
    </div>
  </div>
    <div class="container-items" [style.minHeight]="minHeight">
      <div *ngFor="let item of selectedItems.totalItems" [ngClass]="{ choosed: selectedItems.isSelected(item,2) }"  (click)="selectedItems.select(item)">
        <div *ngIf="templateItem;else noTemplateItem">
          <ng-container [ngTemplateOutlet]="templateItem" [ngOutletContext]="{ data: item }">
          </ng-container>
        </div>
      </div>
    </div>
  <ng-template #noTemplateItem>
    {{item.name}}
  </ng-template>
</div>`
})
export class NgxDualListboxComponent implements OnInit {
  @Input() key = 'id';
  @Input() items: any[];
  @Input('selectedItems') _selectedItems: any[];
  @Output() selectedItemsChange = new EventEmitter<any[]>();

  // TODO: add custom properties like, display name, enable filter, enable sort
  @Input() minHeight = '200px';

  @ContentChild('templateItem') templateItem: TemplateRef<any>;
  @ContentChild('templateArrowLeft') templateArrowLeft: TemplateRef<any>;
  @ContentChild('templateArrowRight') templateArrowRight: TemplateRef<any>;

  availableItems: ListSelection;
  selectedItems: ListSelection;

  ngOnInit() {
    this.availableItems = new ListSelectionImpl(
      difference(this.items, this._selectedItems, this.key)
    );
    this.selectedItems = new ListSelectionImpl(this._selectedItems);
  }

  transferTo(sourceId: number, targetId: number) {
    // TODO
    console.log(this.availableItems);
    console.log(this.selectedItems);

    const { from, to } = transfer(this.availableItems, this.selectedItems);
    console.log(from, to);

    this.selectedItemsChange.emit(this.selectedItems.totalItems);
  }
}

const transfer = (from: ListSelection, to: ListSelection) => {
  return {
    from: new ListSelectionImpl(
      from.totalItems.filter(x => !from.isSelected(x))
    ),
    to: new ListSelectionImpl([...from.selectedItems, ...to.totalItems])
  };
};
