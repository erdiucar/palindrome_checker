// Is string Alpha Numeric
function isAlphaNumeric(str) {
  /*

    ^                Start of string
    [ a - z0 - 9 ]   a or b or c or ...z or 0 or 1 or ... 9
    +                one or more times(change to * to allow empty string)
    $                end of string
    /i               case-insensitive

  */

  return str.length === 1 && (/^[a-z0-9]+$/i).test(str);
}

// Palindrome checker function
function palindrome(str) {
  // Create an empyt string
  let changedStr = '';

  // Add the alpha numeric characters to changedStr variable
  for (let i = 0; i < str.length; i += 1) {
    const element = str[i];

    // Change the char to lower case
    if (isAlphaNumeric(element)) {
      changedStr += element.toLowerCase();
    }
  }

  // Reverse the changed string
  const reversedStr = changedStr
    .split('')
    .reverse()
    .join('');

  // Check normal and reversed string for equality. If they are equal, return true
  if (changedStr === reversedStr) {
    return true;
  }

  return false;
}

// Try it
console.log(palindrome('HAH'));
