const stringUtils=require('./stringUtils');
let text="javascript";
console.log("Original String:",text);
console.log("Capitalized:",stringUtils.capitalize(text));
console.log("Reversed:",stringUtils.reverseString(text));
console.log("Vowel Count:",stringUtils.countVowels(text));
