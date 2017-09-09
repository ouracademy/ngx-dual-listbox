interface ListSelection {
  select(item: any): void;

  selectAll(): void;

  unselect(item: any): void;

  isSelected(item: any): boolean;

  selectedItems(): any[];

  totalItems(): any[];
}
