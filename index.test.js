import { sayHello, sum, chengeObj, testReturn } from './index';

describe('テストの練習', () => {
  test('あいさつのテスト', () => {
    expect(sayHello()).toBe('hello');
  });

  // test の代わりに it でもOK
  it('計算のテスト', () => {
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
});

describe('真偽値系統のテスト', () => {
  /* いろいろある */
  test('nullの場合', () => {
    expect(testReturn(null)).toBeNull(); // null である
  });
  test('undefinedの場合', () => {
    expect(testReturn()).toBeUndefined(); // undefined である
  });
  test('文字列の場合(undefinedではない判定)', () => {
    expect(testReturn('hey yo')).toBeDefined(); // undefined ではない
  });
  test('空の配列(trueと判定されるもの)', () => {
    expect(testReturn([])).toBeTruthy(); // true と判定されるもの
  });
  test('空の文字列', () => {
    expect(testReturn('')).not.toBeTruthy(); // false と判定されるもの
  });
  test('数字の0', () => {
    expect(testReturn(0)).toBeFalsy(); // false と判定されるもの
  });
});
