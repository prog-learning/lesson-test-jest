import { sayHello, sum, chengeObj } from './index';

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
  expect(chengeObj(['apple', 'banana'])).toEqual({
    apple: 'apple',
    banana: 'banana',
  });
  expect(chengeObj(['apple', 'banana'])).not.toBe({
    apple: 'apple',
    banana: 'banana',
  }); // ≠ の判定になるので注意
});

test('等価に関する検証', () => {
  expect(['apple', 'banana']).toBe(['apple', 'banana']); // failed
  expect(['apple', 'banana']).toEqual(['apple', 'banana']);
  expect({ fruit: 'apple' }).toBe({ fruit: 'apple' }); // failed
  expect({ fruit: 'apple' }).toEqual({ fruit: 'apple' });
});

test('真偽値系統のテスト', () => {
  /* いろいろある */
  expect(null).toBeNull(); // null である
  expect().toBeUndefined(); // undefined である
  expect('hey yo').toBeDefined(); // undefined ではない
  expect([]).toBeTruthy(); // true と判定されるもの
  expect('').not.toBeTruthy(); // false と判定されるもの
  expect(0).toBeFalsy(); // false と判定されるもの
});
