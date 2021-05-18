//Anagrams are words that have the same characters in the same quantity. 
//This means that two strings are anagrams if we can rearrange one to get the other.
// Solution 1:
function isAnagram(word1, word2) {
  if (typeof word1 !== 'string' || typeof word2 !== 'string') {
    throw new Error('isAnagram requires two strings to be passed.')
  }

  var normalizedWord1 = word1.replace(/[^A-Za-z]+/g, '').toLowerCase();
  var normalizedWord2 = word2.replace(/[^A-Za-z]+/g, '').toLowerCase();

  var counts = [];
  var word1Length = normalizedWord1.length;
  var word2Length = normalizedWord2.length

  if (word1Length !== word2Length) {
    console.log(false); 
    return false; 
  }

  for (var i = 0; i < word1Length; i++) {
    var index = normalizedWord1.charCodeAt(i)-97;
    counts[index] = (counts[index] || 0) + 1;
  }

  for (var i = 0; i < word2Length; i++) {
    var index = normalizedWord2.charCodeAt(i)-97;
    if (!counts[index]) { return false; }
    else { counts[index]--; }
  }
	
  console.log(true);
  return true;
}

isAnagram('listen man', 'silent nam')
/////////////////////////////////////////////
// Solution 2:

function anagrams(stringA, stringB) {
  /*First, we remove any non-alphabet character using regex and convert       
  convert the strings to lowercase. */
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase()
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

  return sortString(stringA) === sortString(stringB)
}

/*This function sorts the strings*/ 
function sortString(string) {
  return string.split('').sort().join('');
}
