import { isOdd, isEven } from '../src/main';

describe('isOdd test zero', () => {
  test('0 should be false', () => {
    expect(isOdd(0)).toBe(false)
  });
});


describe('isOdd test negative', () => {
  test('-1 should be true', () => {
    expect(isOdd(-1)).toBe(true)
  });

  test('-3 should be true', () => {
    expect(isOdd(-3)).toBe(true)
  });

  test('-5 should be true', () => {
    expect(isOdd(-5)).toBe(true)
  });

  test('-7 should be true', () => {
    expect(isOdd(-7)).toBe(true)
  });

  test('-2 should be false', () => {
    expect(isOdd(-2)).toBe(false)
  });

  test('-4 should be false', () => {
    expect(isOdd(-4)).toBe(false)
  });

  test('-6 should be false', () => {
    expect(isOdd(-6)).toBe(false)
  });

  test('-8 should be false', () => {
    expect(isOdd(-8)).toBe(false)
  });
});

describe('isOdd test positive', () => {

  test('1 should be true', () => {
    expect(isOdd(1)).toBe(true)
  });

  test('3 should be true', () => {
    expect(isOdd(3)).toBe(true)
  });

  test('5 should be true', () => {
    expect(isOdd(5)).toBe(true)
  });

  test('7 should be true', () => {
    expect(isOdd(7)).toBe(true)
  });


  test('2 should be false', () => {
    expect(isOdd(2)).toBe(false)
  });

  test('4 should be false', () => {
    expect(isOdd(4)).toBe(false)
  });

  test('6 should be false', () => {
    expect(isOdd(6)).toBe(false)
  });

  test('8 should be false', () => {
    expect(isOdd(8)).toBe(false)
  });
});

describe('isEven test zero', () => {
  test('0 should be true', () => {
    expect(isEven(0)).toBe(true)
  });
});

describe('isEven test negative', () => {
  test('-2 should be true', () => {
    expect(isEven(-2)).toBe(true)
  });

  test('-4 should be true', () => {
    expect(isEven(-4)).toBe(true)
  });

  test('-6 should be true', () => {
    expect(isEven(-6)).toBe(true)
  });

  test('-8 should be true', () => {
    expect(isEven(-8)).toBe(true)
  });

  test('-1 should be false', () => {
    expect(isEven(-1)).toBe(false)
  });

  test('-3 should be false', () => {
    expect(isEven(-3)).toBe(false)
  });

  test('-5 should be false', () => {
    expect(isEven(-5)).toBe(false)
  });

  test('-7 should be false', () => {
    expect(isEven(-7)).toBe(false)
  });
});

describe('isEven test positive', () => {
  test('2 should be true', () => {
    expect(isEven(2)).toBe(true)
  });

  test('4 should be true', () => {
    expect(isEven(4)).toBe(true)
  });

  test('6 should be true', () => {
    expect(isEven(6)).toBe(true)
  });

  test('8 should be true', () => {
    expect(isEven(8)).toBe(true)
  });

  
  test('1 should be false', () => {
    expect(isEven(1)).toBe(false)
  });

  test('3 should be false', () => {
    expect(isEven(3)).toBe(false)
  });

  test('5 should be false', () => {
    expect(isEven(5)).toBe(false)
  });

  test('7 should be false', () => {
    expect(isEven(7)).toBe(false)
  });
});