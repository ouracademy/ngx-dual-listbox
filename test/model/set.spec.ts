import { expect } from 'chai';
import { belongs, difference } from '../../src/model/set';

describe('set operations', () => {
  const set = [{ key: 4 }, { key: 5 }, { key: 7 }];
  describe('belongs', () => {
    it('should be true that 4 is member of [4,5,7]', () => {
      expect(belongs({ key: 4 }, set, 'key')).to.be.true;
    });
    it('should be true that 12 is not  member of [4,5,7]', () => {
      expect(belongs({ key: 12 }, set, 'key')).to.be.false;
    });
  });
  describe('difference', () => {
    it('should be true that [4,5,7] - [4,5] is [7] ', () => {
      expect(difference(set, [{ key: 4 }, { key: 5 }], 'key')).to.deep.equal([
        { key: 7 }
      ]);
    });
    it('should be true that [4,5,7] - [4,5,7] is []', () => {
      expect(difference(set, set, 'key')).to.deep.equal([]);
    });
  });
});
