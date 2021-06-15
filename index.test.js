import { sayHello, sum, chengeObj, testReturn } from './index';

test('あいさつのテスト', () => {
  expect(sayHello()).toBe('hello');
});

test('計算のテスト', () => {
  expect(sum(1, 2)).toBe(3);
});

test('計算のテスト 失敗', () => {
  expect(sum('123', 2)).not.toBe(125);
});

test('結果がオブジェクトのテスト', () => {
  // console.log(chengeObj(['apple', 'banana']));
  expect(chengeObj(['apple', 'banana'])).toEqual({ apple: 'apple', banana: 'banana' });
  expect(chengeObj(['apple', 'banana'])).not.toBe({ apple: 'apple', banana: 'banana' }); // ≠ の判定になるので注意
});

test('真偽値系統のテスト', () => {
  /* いろいろある */
  expect(testReturn(null)).toBeNull(); // null である
  expect(testReturn()).toBeUndefined(); // undefined である
  expect(testReturn('hey yo')).toBeDefined(); // undefined ではない
  expect(testReturn([])).toBeTruthy(); // true と判定されるもの
  expect(testReturn('')).not.toBeTruthy(); // false と判定されるもの
  expect(testReturn(0)).toBeFalsy(); // false と判定されるもの
});
