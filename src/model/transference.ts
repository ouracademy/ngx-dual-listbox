import { difference } from './set';

export class TransferenceHandler {
  key: string;
  stateChoosed: Map<number, any[]> = new Map();
  stateOfList: Map<number, any[]> = new Map();

  initialize(sourceList: any[], selectedList: any[], key: string) {
    this.key = key;
    this.stateOfList.set(1, difference(sourceList, selectedList, this.key));
    this.stateOfList.set(2, selectedList);
    this.stateChoosed.set(1, []);
    this.stateChoosed.set(2, []);
  }

  add(item: any, type: number) {
    const arr: any[] = this.stateChoosed.get(type) || [];
    arr.push(item);
  }

  private getChoosedItemsFrom(type: number) {
    return this.stateChoosed.get(type) || [];
  }

  private getStateItemsFrom(type: number) {
    return this.stateOfList.get(type) || [];
  }

  private cleanChoosedItemsFrom(type: number) {
    this.stateChoosed.set(type, []);
  }

  private deleteItemsFrom(items: any[], containerId: number) {
    this.stateOfList.get(containerId);
  }

  transfer(fromId: number, toId: number) {
    const payload = this.getChoosedItemsFrom(fromId);
    this.stateOfList.set(
      fromId,
      difference(this.getStateItemsFrom(fromId), payload, this.key)
    );
    this.stateOfList.set(toId, [...this.getStateItemsFrom(toId), ...payload]);
    this.cleanChoosedItemsFrom(fromId);
  }

  isChoosed(item: any, idContainer: number) {
    return !!this.getChoosedItemsFrom(idContainer).find(
      i => i[this.key] === item[this.key]
    );
  }
}
