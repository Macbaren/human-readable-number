module.exports = function toReadable (n) {
    if (!Number.isInteger(n) || n < 0) return '';
  if (n === 0) return 'zero';
  const before20 = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const dozens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const hu = n.toString().slice(-3);
  const th = Math.floor(n / 1000);

  const toStrHun = (num) => {
    return num.toString().length < 3
      ? ''
      : +num.toString().slice(-3)[0] !== 0
      ? before20[num.toString().slice(-3)[0]] + ' hundred'
      : '';
  };

  const toStrDoz = (num) => {
    const toDoz = +num.toString().slice(-2);
    if (toDoz === 0) return '';
    else if (toDoz < 20) return before20[toDoz];
    else {
      if (toDoz % 10 === 0) return dozens[toDoz / 10];
      else return dozens[Math.floor(toDoz / 10)] + ' ' + before20[toDoz % 10];
    }
  };

  const toStrTh = (num) =>
    num ? (toStrHun(num) + ' ' + toStrDoz(num)).trim() + ' thousand' : '';
  return (
    toStrTh(th) +
    ' ' +
    (toStrHun(hu) + ' ' + toStrDoz(hu)).trim()
  ).trim();
}
