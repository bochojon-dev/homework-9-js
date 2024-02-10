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

// // String13

// function calc(str) {
//     return eval(str);
//   }
//   +console.log(calc('7+3-2'));

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

// // STRING16

// let s1 = "Hello World";
// let c = "o";
// let s2 = "123";
// function insertStr(s1, c, s2) {
//   let result = "";
//   for (let char of s1) {
//     if (char === c) {
//       result += s2;
//     }
//     result += char;
//   }
//   return result;
// }
// let result = insertStr(s1, c, s2);
// console.log(`Natija: ${result}`);

// // STRING17

// let s1 = "ababab";
// let s2 = "ab";
// function countO(s1, s2) {
//     let count = 0;
//     let i = -1;
//     while ((i = s1.indexOf(s2, i + 1)) !== -1) {
//         count++;
//     }
//     return count;
// }
// let result = countO(s1, s2);
// console.log(`s2 s1 ning ichida ${result} marta takrorlanadi.`);

// // STRING18

// let s1 = "Hello World";
// let s2 = "lo";
// function removeFirst(s1, s2) {
//     let i = s1.indexOf(s2);
//     if (i !== -1) {
//         return s1.substring(0, i) + s1.substring(i + s2.length);
//     } else {
//         return s1;
//     }
// }
// let result = removeFirst(s1, s2);
// console.log(`Natija: ${result}`);

// // STRING19
// let s1 = "ababab";
// let s2 = "ab";
// function removeOccurrences(s1, s2) {
//     let result = s21;
//     while (result.includes(s2)) {
//         result = result.replace(s2, '');
//     }
//     return result;
// }
// let result = removeOccurrences(s1, s2);
// console.log(`Natija: ${result}`);

// // STRING20

// let s1 = "Hello World";
// let s2 = "lo";
// let s3 = "123";
// function replaceFirst(s1, s2, s3) {
//   let i = s1.indexOf(s2);
//   if (i !== -1) {
//     return s1.substring(0, i) + s3 + s1.substring(index + s2.length);
//   } else {
//     return s1;
//   }
// }
// let result = replaceFirst(s1, s2, s3);
// console.log(`Natija: ${result}`);

// // String21

// let s1 = "Hello World";
// let s2 = "o";
// let s3 = "123";
// function replaceLast(s1, s2, s3) {
//     let i = s1.lastIndexOf(s2);
//     if (i !== -1) {
//         return s1.substring(0, i) + s3 + s1.substring(i + s2.length);
//     } else {
//         return s1;
//     }
// }
// let result = replaceLast(s1, s2, s3);
// console.log(`Natija: ${result}`);

// // STRING22

// let inputStr = "Maqsadjon is the best Developer";
// function findFirstLastWords(inputStr) {
//     let words = inputStr.split(' ');
//     let firstWord = words[0];
//     let lastWord = words[words.length - 1];
//     return {
//         firstWord: firstWord,
//         firstWord: lastWord
//     };
// }
// let result = findFirstLastWords(inputStr);
// console.log(`Birinchi so'z: ${result.firstWord}`);
// console.log(`Oxirgi so'z: ${result.lastWord}`);

// // STRING23

// let inputStr = "Anavi Ananas Antiqa ekan";
// function findWords(inputStr) {
//   let words = inputStr.split(" ");
//   let resultWords = words.filter(
//     (word) => (word.match(/A/g) || []).length === 2
//   );
//   return resultWords;
// }
// let result = findWords(inputStr);
// console.log(`2 ta 'A' harfi bor so'zlar: ${result}`);

// // STRING24

// let inputStr = "Maqsadjon is the best Developer";
// function getMaxOfString(str) {
//   let words = str.split(" ");
//   let maxLength = 0;
//   let maxWord = "";
//   for (let word of words) {
//     if (word.length > maxLength) {
//       maxLength = word.length;
//       maxWord = word;
//     }
//   }
//   return maxWord;
// }
// let result = getMaxOfString(inputStr);
// console.log(`Eng uzun so'z: ${result}`);

// // STRING25

// let inputString = "Dunyo seni tog'angmas";
// function separateWords(str) {
//   let words = str.split(" ");
//   let result = words.join(".");
//   return result;
// }
// let result = separateWords(inputString);
// console.log(`so'zlarni nuqta bilan ajratilgani: ${result}`);

// // STRING26

// let inputString = "dunyo meni ham tog'am emas";
// function upperCase(str) {
//     let words = str.split(' ');
//     let resultWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
//     let result = resultWords.join(' ');
//     return result;
// }
// let result = upperCase(inputString);
// console.log(`So'zlarni bosh harf bilan yozilgani: ${result}`);

// // STRING27

// let inputStr = `o'zbekiston "buyuk" davlat! o'zbekistonni alishmasman, boshqa jahonga o'zbekiston tengdur o'zbekistonga?`;
// let belgi;
// let str = 0;
// function countMarks(str) {
//   let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
//   for (i = 0; i <= marks.length; i++) {
//     if (belgi == marks[i]) {
//       str++;
//       return str;
//     }
//   }
// }
// console.log(`Stringdagi tinish belgilari soni: ${str}`);

// STRING28

// function getFileName(path) {
//   let firstIndex = path.lastIndexOf('/');
//   let lastIndex = path.lastIndexOf('.');
//   return path.slice(firstIndex + 1, lastIndex);
// }
// console.log(getFileName('D:/Qudrat_c++/books/My_book.exe'));

// // STRING29

// function getFileName(path) {
//   let name = path.slice(path.lastIndexOf(".") + 1);
//   return name;
// }
// console.log(getFileName("D:/Qudrat_c++/books/My_book.exe"));

// ARROW FUNCTION DA ISHLANGANI

// const getFileName = (path) => path.slice(path.lastIndexOf('.') + 1);

// console.log(getFileName('D:/Qudrat_c++/books/My_book.exe'));

// //STRING30

// function getLastFolderName(path) {
//   let lastIndex = path.lastIndexOf('/');
//   let firstIndex = path.slice(0, lastIndex).lastIndexOf('/');
//   return path.slice(firstIndex + 1, lastIndex);
// }
// console.log(getLastFolderName('D:/Qudrat_c++/books/My_book.exe'));
