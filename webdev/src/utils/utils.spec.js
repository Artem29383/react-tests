import { trimString, removeObjPropImmutably, getIsValidNumber } from "./utils";

describe("trimString util", () => {
  it("Positive trimming cases", () => {
    expect(trimString('LongString', 5)).toBe('LongS...');
    expect(trimString('LongString', 1)).toBe('L...');
    expect(trimString('LongString', 20)).toBe('LongString');
    expect(trimString('      LongString', 20)).toBe('LongString');
    expect(trimString('    ', 4)).toBe('');
  });

  it("Negative trimming cases", () => {
    // expect(trimString(null, 4)).toBeNull();
    // expect(trimString(undefined, 4)).toBeUndefined();
  });
});

describe("getIsValidNumber util", () => {
  it("Positive checking cases", () => {
    const numbers = [1, 0, 0.5, '123', '321asd'];
    for (let i = 0; i<numbers.length; i++) {
      console.info(getIsValidNumber(numbers[i]))
      expect(getIsValidNumber(numbers[i])).toBeTruthy();
    }
  });

  it("Negative checking cases", () => {
    const numbers = ['asd321', 'qwe', Infinity, undefined, null, {}, []];
    for (let i = 0; i<numbers.length; i++) {
      console.info(getIsValidNumber(numbers[i]))
      expect(getIsValidNumber(numbers[i])).toBeFalsy();
    }
  });
});

describe("removeObjPropImmutably util", () => {
  it("Positive removing", () => {
    expect(removeObjPropImmutably({ a: 1, b: 1 }, 'b')).toMatchObject({ a: 1 })
    expect(removeObjPropImmutably({ a: () => {}, b: 1 }, 'a')).toMatchObject({ b: 1 })
  });

  it("Negative checking cases", () => {
  });
});