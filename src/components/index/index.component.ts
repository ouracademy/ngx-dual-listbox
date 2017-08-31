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
      <div *ngFor="let item of _availableList" [ngClass]="{ choosed:isChoosed(item,1) }" (click)="chooseItem(item,1)">
        <div *ngIf="templateItem;else noTemplate">
          <ng-container [ngTemplateOutlet]="templateItem" [ngOutletContext]="{ data: item }">
          </ng-container>
        </div>
        <ng-template #noTemplate>
            {{item.name}}
        </ng-template>
      </div>
    </div>
    <div class="container-buttons">
       <div class="" (click)="transferTo(1,2)">
       <div *ngIf="templateArrowRight;else arrowRigth">
          <ng-container [ngTemplateOutlet]="templateArrowRight">
          </ng-container>
       </div>
      <ng-template #arrowRigth class="btn-arrow">
      <div class="btn-arrow">
        Seleccionar
        </div>
      </ng-template>
    </div>
    <div class="" (click)="transferTo(2,1)">
        <div *ngIf="templateArrowLeft;else arrowLeft">
          <ng-container [ngTemplateOutlet]="templateArrowLeft">
          </ng-container>
        </div>
         <ng-template #arrowLeft>
         <div class="btn-arrow">
           Regresar
           </div>
         </ng-template>
    </div>
  </div>
    <div class="container-items" [style.minHeight]="minHeight">
      <div *ngFor="let item of _selectedList" [ngClass]="{ choosed:isChoosed(item,2) }"  (click)="chooseItem(item,2)">
        <div *ngIf="templateItem;else noTemplate2">
          <ng-container [ngTemplateOutlet]="templateItem" [ngOutletContext]="{ data: item }">
          </ng-container>
        </div>
        <ng-template #noTemplate2>
            {{item.name}}
        </ng-template>
      </div>
    </div>
</div>`
})
export class NgxDualListboxComponent implements OnInit {
  projectTitle: string = 'Library ui abput selection';
  @Input() key = 'id';
  @Input() minHeight = '200px';
  @Input() display = 'name';
  @Input() enablefilter = false;
  @Input() enableSort = false;
  @Input() sourceList: any[];
  @Input() selectedList: any[];
  @Output() selectedListChange = new EventEmitter<any[]>();
  @ContentChild('templateItem') templateItem: TemplateRef<any>;
  @ContentChild('templateArrowLeft') templateArrowLeft: TemplateRef<any>;
  @ContentChild('templateArrowRight') templateArrowRight: TemplateRef<any>;
  transferenceHandler: TransferenceHandler;
  constructor() {
    this.transferenceHandler = new TransferenceHandler();
  }
  ngOnInit() {
    this.transferenceHandler.initialize(
      this.sourceList,
      this.selectedList,
      this.key
    );
  }

  chooseItem(item: any, container: number) {
    this.transferenceHandler.add(item, container);
  }
  transferTo(sourceId: number, targetId: number) {
    this.transferenceHandler.transfer(sourceId, targetId);
    this.selectedListChange.emit(this._selectedList);
  }
  get _availableList() {
    return this.transferenceHandler.stateOfList.get(1);
  }
  get _selectedList() {
    return this.transferenceHandler.stateOfList.get(2);
  }
  isChoosed(item: any, idContainer: number) {
    return this.transferenceHandler.isChoosed(item, idContainer);
  }
}
