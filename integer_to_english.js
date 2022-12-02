/*Input: num = 123
Output: "One Hundred Twenty Three"
Example 2:

Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/

let nums = {
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
};
let tens = {
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eighteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Forty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
};
let biggers = {
  1: "Hundred",
  2: "Thousand",
  3: "Million",
  4: "Billion",
};

function three(num) {
  num = String(num).split("");
  let grouped = [];
  // if the input num is 3 digit - (123)
  if (num.length === 3) {
    grouped.push(num);
  }
  // anything greater than 100s range - from thousands
  if (num.length > 3) {
    while (num.length > 2) {
      let temp = num.splice(num.length - 3, num.length);
      grouped.unshift(temp);
    }

    if (num.length && num.length <= 2) {
      grouped.unshift(num);
    }
  }
  return grouped;
}

// get the double digits

function tenWords(num1, num2) {
  let words = "";
  let joined = num1 + num2;
  if (Number(joined) < 9) {
    words += nums[num2];
  } else {
    //doible digit
    if (tens[joined]) {
      words += tens[joined];
    } else {
      let remainder = Number(joined) % 10;
      words += tens[String(Number(joined) - remainder)];
      if (remainder) {
        words += " " + nums[remainder];
      }
    }
  }

  return words;
}
// console.log(tenWords("2", "3"))
// console.log(tenWords("2", "0"))
// console.log(tenWords("4", "3"))
// console.log(tenWords("0", "3"))
//console.log(tenWords("1", "2"))

function numberToWords(num) {
  let grouped = three(num);
  let words = "";

  while (grouped.length > 1) {
    let subWord = "";

    if (grouped[0].length === 3) {
      subWord += `${nums[grouped[0][0]]} hundred ${
        biggers[grouped.length]
      } ${tenWords(grouped[0][1], grouped[0][2])}`;
    } else if (grouped[0].length === 2) {
      subWord += `${tenWords(grouped[0][0], grouped[0][1])} ${
        biggers[grouped.length]
      }`;
    } else {
      subWord += `${nums[grouped[0][0]]} ${biggers[grouped.length]}`;
    }

    words += subWord;
    grouped.shift();
  }
  // remaining hundred range
  if (grouped[0].length === 3) {
    words += ` ${nums[grouped[0][0]]} hundred  ${tenWords(
      grouped[0][1],
      grouped[0][2]
    )}`;
  } else {
    words += tenWords(grouped[0][0], grouped[0][1]);
  }

  return words;
}

console.log(numberToWords(623456));
console.log(numberToWords(12456));
console.log(numberToWords(123));
console.log(numberToWords(1234));
console.log(numberToWords(12345));
