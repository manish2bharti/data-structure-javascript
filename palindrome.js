function isPalindrome(word){
   var i,wLength = word.length-1,wLengthToCompare = wLength/2;

   for (i = 0; i <= wLengthToCompare ; i++) {
     if (word.charAt(i) != word.charAt(wLength-i)) {
     		console.log(false)
        return false;
     }
   }
   console.log(true)
   return true;
} 
