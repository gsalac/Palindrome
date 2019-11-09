// The Palindrome Project
// Test the input of a user to see if it's a palindrome

const palindrome = str => {
    const regExp = /[^A-Za-z0-9]/g;
    const lowRegStr = str.toLowerCase().replace(regExp, '');
    const reverseStr = lowRegStr.split('').reverse().join('');

    if (lowRegStr === reverseStr) {
        alert("This is a Palindrome!")
    } else {
        alert("This is not a Palindrome!")
    }
}

const userStr = prompt("Please enter a word to check if it's a Palindrome.");

palindrome(userStr);