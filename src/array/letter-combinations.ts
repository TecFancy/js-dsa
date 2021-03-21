/**
 * 电话号码的字母组合
 * @copyright https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */

export const letterCombinations = (input: string): string[] => {
  let result: string[] = [];

  if (!input || typeof input !== 'string') return result;
  if (input === '0' || input === '1') return result;

  // 建立电话号码键盘映射
  const map = [
    '0',
    '1',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  // 把输入的字符串按单字符分隔变成数组，如：'234' => ['2', '3', '4']
  const inputArr: number[] = input.split('').map(item => parseInt(item, 10));

  // 保存键盘映射后的字母内容，如：'23' => ['abc', 'def']
  const code: string[] = [];
  inputArr.forEach(item => {
    if (map[item]) {
      code.push(map[item]);
    }
  });

  // 当输入一个数字字符串时，将映射后的数组元素按照单字母分隔开来，如：'2' => ['a', 'b', 'c']
  if (inputArr.length === 1) {
    result = code[0].split('');
  }

  // 递归组合运算
  if (inputArr.length > 1) {
    const comb = (arr: (string | string[])[]) => {
      const tmp = [];
      for (let i = 0, il = arr[0].length; i < il; i++) {
        for (let j = 0, jl = arr[1].length; j < jl; j++) {
          tmp.push(`${arr[0][i]}${arr[1][j]}`);
        }
      }
      arr.splice(0, 2, tmp);
      if (arr.length > 1) comb(arr);
      return tmp;
    };
    result = comb(code);
  }

  return result;
};
