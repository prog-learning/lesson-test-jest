export const sayHello = () => 'hello';

export const sum = (a, b) => a + b;

export const chengeObj = (array) => {
  const obj = {};
  array.map((item) => {
    obj[item] = item;
  });
  return obj;
};

export const testReturn = (expect) => expect;
