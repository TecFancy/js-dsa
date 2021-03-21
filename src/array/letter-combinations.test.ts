import { letterCombinations } from './letter-combinations';

describe('电话号码的字母组合', () => {
  test('输入空字符串', () => {
    expect(letterCombinations('')).toEqual([]);
  });

  test('输入 `2`', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c']);
  });

  test('输入 `23`', () => {
    expect(letterCombinations('23')).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
  });

  test('输入 `234`', () => {
    expect(letterCombinations('234')).toEqual([
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
    ]);
  });
});
