import { sayHello, sum, chengeObj, testReturn } from './index';

describe('テストの練習', () => {
  test('あいさつのテスト', () => {
    expect(sayHello()).toBe('hello');
  });

  /* ネストが可能 */
  describe('計算のテスト', () => {
    test('計算のテスト', () => {
      expect(sum(1, 2)).toBe(3);
    });

    test('計算のテスト 失敗', () => {
      expect(sum('123', 2)).not.toBe(125);
    });
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

/* describe.each() でテストの引数をまとめる */
// 公式引用: https://jestjs.io/ja/docs/api#describeeachtablename-fn-timeout
describe.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected);
  });
});

// オブジェクトの場合
describe.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])('.add($a, $b)', ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected);
  });
});
