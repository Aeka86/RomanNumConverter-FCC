function convertToRoman(num) {
  if (num > 10000) {
    return 'Number too large';
}
  let roman = '';

  roman += 'M'.repeat(Math.floor(num / 1000)); num %= 1000;
  roman += 'CM'.repeat(Math.floor(num / 900)); num %= 900;
  roman += 'D'.repeat(Math.floor(num / 500)); num %= 500;
  roman += 'CD'.repeat(Math.floor(num / 400)); num %= 400;
  roman += 'C'.repeat(Math.floor(num / 100)); num %= 100;
  roman += 'XC'.repeat(Math.floor(num / 90)); num %= 90;
  roman += 'L'.repeat(Math.floor(num / 50)); num %= 50;
  roman += 'XL'.repeat(Math.floor(num / 40)); num %= 40;
  roman += 'X'.repeat(Math.floor(num / 10)); num %= 10;
  roman += 'IX'.repeat(Math.floor(num / 9)); num %= 9;
  roman += 'V'.repeat(Math.floor(num / 5)); num %= 5;
  roman += 'IV'.repeat(Math.floor(num / 4)); num %= 4;
  roman += 'I'.repeat(num);

  return roman;
}

function convertNumber() {
  let inputNumber = document.getElementById('inputNumber').value;
  let result = convertToRoman(Number(inputNumber));
  document.getElementById('result').innerText = result;
}
