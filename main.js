// HOMEWORK //////////////////////////////////

// // String1

// let n = 5;
// function upperLetter(n) {
//   if (n < 1 || n > 26) {
//     return "N soni 1 dan 26 gacha bo'lishi kerak. Iltimos qaytadan urinib ko'ring";
//   }
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     let charCode = "A".charCodeAt(0) + i;
//     let letter = String.fromCharCode(charCode);
//     result += letter;
//   }
//   return result;
// }
// let resultStr = upperLetter(n);
// console.log("Dastlabki", n, "ta katta harflar: ", resultStr);

// // String2

// let inputChar = "7";
// function type(char) {
//   if (/^\d$/.test(char)) {
//     return "digit";
//   } else if (/^[a-zA-Z]$/.test(char)) {
//     return "lotin";
//   } else {
//     return "nol";
//   }
// }
// let result = type(inputChar);

// console.log(`Kiritilgan belgi "${inputChar}" turi: ${result}`);

// // String3

// let inputStr = "Maqsadjon";
// function charCode(str) {
//   let firstChar = str.charCodeAt(0);
//   let lastChar = str.charCodeAt(str.length - 1);
//   console.log(`Birinchi belgi "${str[0]}"ning UTF-16 kodi: ${firstChar}`);
//   console.log(
//     `Oxirgi belgi "${str[str.length - 1]}"ning UTF-16 kodi: ${lastChar}`
//   );
// }
// charCode(inputStr);

// // String4

// let n = 5;
// let Belgi = "M";
// function createStr(n, Belgi) {
//   if (n <= 0) {
//     console.log("n soni 0 dan katta bo'lishi kerak. Musbat son kiriting");
//     return;
//   }
//   let result = Belgi.repeat(n);
//   console.log(`Natija: ${result}`);
// }

// createStr(n, Belgi);

// // String5

// let inputStr = "Hello, World!";
// function reverseStr(inputStr) {
//   let reversedStr = inputStr.split("").reverse().join("");
//   console.log(`Teskarisi: ${reversedStr}`);
// }
// reverseStr(inputStr);

// // String6

// let inputStr = "Maqsadjon";
// let n = 3;
// function getStars(inputStr, n) {
//   let stars = "*".repeat(n);
//   let result = inputStr.split("").join(stars);
//   console.log(`Natija: ${result}`);
// }
// getStars(inputStr, n);

// // String7

// let inputStr = "Maqsadjon2005";
// function findNumber(inputStr) {
//   let numberSumm = 0;
//   for (let char of inputStr) {
//     if (!isNaN(char)) {
//       numberSumm++;
//     }
//   }
//   console.log(`Stringdagi raqamlar ${numberSumm} ta`);
// }
// findNumber(inputStr);

// // String8

// let inputStr = "Привет Maqsadjon";
// function countLetters(inputStr) {
//   let count = 0;
//   for (let char of inputStr) {
//     if ((char >= "a" && char <= "z") || (char >= "а" && char <= "я")) {
//       count++;
//     }
//   }
//   console.log(`Stringdagi kichik lotin va kirill harflarning umumiy soni: ${count}`);
// }
// countLetters(inputStr);

// // String9

// let inputStr = "Maqsadjon Developer";
// function lowerCase(inputStr) {
//   let convertedStr = "";
//   for (let char of inputStr) {
//     if (char >= "A" && char <= "Z") {
//       convertedStr += char.toLowerCase();
//     } else {
//       convertedStr += char;
//     }
//   }
//   console.log(`Natija: ${convertedStr}`);
// }
// lowerCase(inputStr);

// // Sring10

// let inputStr = "Najot Talim";
// function swapCase(inputStr) {
//   let swappStr = "";
//   for (let char of inputStr) {
//     if (char >= "A" && char <= "Z") {
//       swappStr += char.toLowerCase();
//     } else if (char >= "a" && char <= "z") {
//       swappStr += char.toUpperCase();
//     } else {
//       swappStr += char;
//     }
//   }
//   console.log(`Natija: ${swappStr}`);
// }
// swapCase(inputStr);

// // String11

// let inputStr1 = "123";
// let inputStr2 = "12.34";
// let inputStr3 = "abc123";
// function checkNumber(inputStr) {
//     if (isNaN(inputStr)) {
//         console.log("0");
//     } else if (inputStr.includes(".")) {
//         console.log("2");
//     } else {
//         console.log("1");
//     }
// }
// checkNumber(inputStr1); // Natija: 1
// checkNumber(inputStr2); // Natija: 2
// checkNumber(inputStr3); // Natija: 0

// // String12

// let n = 12345;
// function getInverseNumber(n) {
//   let invertedNumber = parseInt(n.toString().split("").reverse().join(""));
//   return invertedNumber;
// }
// let result = getInverseNumber(n);
// console.log(`Natija: ${result}`);

// String13

// let expression = "7+3-2";
// function arithmetic(expression) {
//   expression = expression.replace(/\s+/g, "");
//   let parts = expression.split("±");
//   let result = parseInt(parts[0]);
//   for (let i = 1; i < parts.length; i++) {
//     let operator = expression[2 * i - 1];
//     let operand = parseInt(parts[i]);
//     if (operator === "+") {
//       result += operand;
//     } else if (operator === "-") {
//       result -= operand;
//     }
//   }
//   return result;
// }
// let result = arithmetic(expression);
// console.log(`Ifoda qiymati: ${result}`);

// // String14

// let n1 = 6;
// let n2 = 5;
// let s1 = "Maqsadjon";
// let s2 = "Developer";
// function newString(n1, n2, s1, s2) {
//   let str1 = s1.substring(0, n1);
//   let str2 = s2.substring(s2.length - n2);
//   let result = str1 + str2;
//   return result;
// }
// let result = newString(n1, n2, s1, s2);
// console.log(`Natija: ${result}`);

// // String15

// let s = "Najot talim ";
// let c = "a";
// function doubleChar(s, c) {
//   let result = "";
//   for (let char of s) {
//     result += char;
//     if (char === c) {
//       result += char; // Har bir C belgisini ikki marta qo'shish
//     }
//   }
//   return result;
// }
// let result = doubleChar(s, c);
// console.log(`Natija: ${result}`);
