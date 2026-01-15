function capitalize(str) {
    if (str.length === 0) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1);
}
function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }
    return result;
}
function countVowels(str) {
    let count=0;
    let vowels="aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
module.exports = {
    capitalize,
    reverseString,
    countVowels
};
