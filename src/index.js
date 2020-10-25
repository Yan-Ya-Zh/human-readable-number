module.exports = function toReadable (number) {
  if(number === 0)
  return 'zero';

const numeral = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine'
];

const secondTenth = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];

const tenths = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
];

const numberStr = number.toString().split('').reverse();
let result = '';

if(number > 99)
  result += `${numeral[numberStr[2]]} hundred`;

if(numberStr[1] === '1')
  result += ` ${secondTenth[numberStr[0]]}`;
else if(!numberStr[1] || numberStr[1] === '0')
  result += ` ${numeral[numberStr[0]]}`;
else
  result += ` ${tenths[numberStr[1]]} ${numeral[numberStr[0]]}`;

return result.trim();
}
