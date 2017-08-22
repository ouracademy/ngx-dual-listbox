import difference from 'lodash.difference';
export class TransferenceHandler {
  stateChoosed: Map<number, any[]> = new Map();
  stateOfList: Map<number, any[]> = new Map();
  constructor() {
    this.stateChoosed.set(1, []);
    this.stateChoosed.set(2, []);
    this.stateOfList.set(1, []);
    this.stateOfList.set(2, []);
  }
  add(item: any, type: number) {
    this.stateChoosed.get(type).push(item);
  }
  private getChoosedItemsFrom(type: number) {
    return this.stateChoosed.get(type);
  }
  private getStateItemsFrom(type: number) {
    return this.stateOfList.get(type);
  }
  private cleanChoosedItemsFrom(type: number) {
    this.stateChoosed.set(type, []);
  }
  private deleteItemsFrom(items: any[], containerId: number) {
    this.stateOfList.get(containerId);
  }
  private addItensFor() {}
  transfer(fromId: number, toId: number) {
    const payload = this.getChoosedItemsFrom(fromId);
    this.deleteItemsFrom(payload, fromId);
    this.stateOfList.set(
      fromId,
      difference(
        this.getStateItemsFrom(fromId),
        this.getChoosedItemsFrom(fromId)
      )
    );
    this.stateOfList.get(toId).push(payload);
    this.cleanChoosedItemsFrom(fromId);
  }
}
