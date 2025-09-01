// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
  let result = "";
  let words = str.toLowerCase().split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let letters = word.split("");

    if (i > 0) {
      letters[0] = letters[0].toUpperCase();
    }
    result += letters.join("");
  }
  return result;
};
