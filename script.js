function convertToRoman(num) {
  const romanNumerals = {
    100000: "C̅",
    90000: "X̅C̅",
    50000: "L̅",
    40000: "X̅L̅",
    10000: "X̅",
    9000: "I̅X̅",
    5000: "V̅",
    4000: "I̅V̅",
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let result = "";
  for (let value in romanNumerals) {
    while (num >= value) {
      result += romanNumerals[value];
      num -= value;
    }
  }

  return result;
}

// Example usage:
const input = 798;
const romanNumeral = convertToRoman(input);
console.log(romanNumeral); // Output: "DCCXCVIII"
