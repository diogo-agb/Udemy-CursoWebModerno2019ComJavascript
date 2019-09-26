
// function palindromo(text){    
//     return (
//         text.split('').reverse().join('') === text &&
//         text.length >= 1 &&
//         text.length <= 105 &&
//         try {
//             typeof text === 'string'
//         } catch(e){

//         }
        

//         text !== '' ?
//         console.log(true) : console.log(false)
//     )
// }


function testinput(re, str){
    var midstring;
    if (re.test(str)) {
      midstring = ' Contém ';
    } else {
      midstring = ' não contém ';
    }
    console.log(str + midstring + re.source);
  }
if (/^ *$/.test(value)) {
    //string contains 0+ spaces only
}




// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be
// checkPalindrome(inputString) = false;
// For inputString = "a", the output should be
// checkPalindrome(inputString) = true.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] string inputString

// A non-empty string consisting of lowercase characters.

// Guaranteed constraints:
// 1 ≤ inputString.length ≤ 105.

// [output] boolean

// true if inputString is a palindrome, false otherwise.