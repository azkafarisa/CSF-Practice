// Palindrome
// Do research for what it is. Then make a function that will return true or false to check if they are palindrome.
// Test sample:
// Radar                 # --> palindrome
// Malam                 # --> palindrome
// Kasur ini rusak       # --> palindrome
// Ibu Ratna antar ubi   # --> palindrome

// Malas                 # --> not palindrome
// Makan nasi goreng     # --> not palindrome
// Balonku ada lima      # --> not palindrome

function isPalindrome(word) {
  let wordArr = word.toLowerCase().split("");
  let length = word.length - 1;
  for (let i = 0; i < word.length / 2; i++) {
    if (wordArr[i] === wordArr[length]) {
      if (i == length) {
        console.log("palindrome");
        break;
      }
      length = length - 1;
    } else {
      console.log("not palindrome");
      break;
    }
  }
}

isPalindrome(`Makan nasi goreng`);
