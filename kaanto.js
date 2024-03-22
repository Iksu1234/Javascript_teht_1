function CheckPalidrome() {
  //add readline-sync
  var input = require("readline-sync");

  //ask user for a word to check
  let word = input.question("Input a word: ");

  //check for empty string
  if (word === "") {
    return false;
  }

  //create an array from the word
  const wordArray = Array.from(word);

  //create a new array from the first array inverted
  const wordArray2 = [];
  for (let i = wordArray.length - 1; i > -1; i--) {
    const char = wordArray[i];
    wordArray2.push(char);
  }

  //check if the arrays are identical
  let bool = true;
  for (let i = 0; i < wordArray.length; i++) {
    const char1 = wordArray[i];
    const char2 = wordArray2[i];
    if (char1 != char2) {
      bool = false;
      return false;
    }
  }

  //returns true if the word was a palidrome
  if (bool == true) {
    return true;
  }
}
console.log(CheckPalidrome());
