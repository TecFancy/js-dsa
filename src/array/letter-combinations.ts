/**
 * 电话号码的字母组合
 * @see https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 */

export const letterCombinations1 = (input: string): string[] => {
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

  // 如果只给了一个按键，直接把按键内容取出来并按单个字符分组就可以了（LeetCode测试用例）
  if (input.length < 2) return map[parseInt(input, 10)].split('');

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
  const comb = (arr: (string | string[])[]) => {
    const tmp = [];
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, tmp);
    if (arr.length > 1) comb(arr);
    else return tmp;
    return arr[0];
  };

  return comb(code) as string[];
};

export const letterCombinations2 = (input: string): string[] => {
  const len: number = input.length;
  if (!len) return [];

  const queue: string[] = [''];
  const map: string[] = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];

  for (let index = 0; index < len; index++) {
    const length: number = queue.length;
    const mappedValue: string = map[parseInt(input[index], 10)]; // e.g. 'abc' or 'def' or ...
    for (let i = 0; i < length; i++) {
      const cur = queue.shift();
      for (const c of mappedValue) {
        queue.push(cur + c);
      }
    }
  }

  return queue;
};
