import { average } from '../utils';

describe('utils test', () => {
  describe('average test', () => {
    test('should return average number', () => {
      expect(average([1, 2, 3, 4, 5])).toBe(3);
      expect(average([1.1, 2.2, 3.3, 4.4, 5.5])).toBeCloseTo(3.3, 0.0001);
    });
  });
});
