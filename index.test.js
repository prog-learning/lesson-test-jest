import { sayHello, sum } from './index';

test('あいさつのテスト', () => {
  expect(sayHello()).toBe('hello');
});

test('計算のテスト', () => {
  expect(sum(1, 2)).toBe(3);
});

test('計算のテスト 失敗', () => {
  expect(sum('123', 2)).not.toBe(125);
});
