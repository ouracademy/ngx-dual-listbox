import { expect } from 'chai';
import {
  ListSelection,
  ListSelectionImpl
} from '../../src/model/list-selection';

describe('list selection', () => {
  const aList = new ListSelectionImpl([1, 2, 3, 4, 5]);

  describe('select', () => {
    it('should contains 0 selected items', () => {
      expect(aList.selectedItems).to.have.lengthOf(0);
    });
    it('should be selected 8 when is selected', () => {
      aList.select(8);
      expect(aList.isSelected(8)).to.equals(true);
      expect(aList.selectedItems).to.include(8);

      aList.unselect(8);
      expect(aList.isSelected(8)).to.equals(false);
      expect(aList.selectedItems).to.not.include(8);
    });
  });
  describe('unselect', () => {
    it(`should throw an error when it's not selected`, () => {
      expect(() => aList.unselect(12)).to.throw(
        'Cannot unselect an item that is not selected'
      );
    });
  });
  describe('selectAll', () => {
    it('should include all elements', () => {
      aList.selectAll();
      expect(aList.selectedItems).to.be.deep.equals(aList.totalItems);
    });
  });
});
