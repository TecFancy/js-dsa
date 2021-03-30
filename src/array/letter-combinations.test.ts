import {
  letterCombinations1,
  letterCombinations2,
} from './letter-combinations';

const result1 = ['a', 'b', 'c'];
const result2 = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
const result3 = [
  'adg',
  'adh',
  'adi',
  'aeg',
  'aeh',
  'aei',
  'afg',
  'afh',
  'afi',
  'bdg',
  'bdh',
  'bdi',
  'beg',
  'beh',
  'bei',
  'bfg',
  'bfh',
  'bfi',
  'cdg',
  'cdh',
  'cdi',
  'ceg',
  'ceh',
  'cei',
  'cfg',
  'cfh',
  'cfi',
];

describe('电话号码的字母组合', () => {
  test('输入空字符串', () => {
    expect(letterCombinations1('')).toEqual([]);
    expect(letterCombinations2('')).toEqual([]);
  });

  test('输入 `2`', () => {
    expect(letterCombinations1('2')).toEqual(result1);
    expect(letterCombinations2('2')).toEqual(result1);
  });

  test('输入 `23`', () => {
    expect(letterCombinations1('23')).toEqual(result2);
    expect(letterCombinations2('23')).toEqual(result2);
  });

  test('输入 `234`', () => {
    expect(letterCombinations1('234')).toEqual(result3);
    expect(letterCombinations2('234')).toEqual(result3);
  });
});
