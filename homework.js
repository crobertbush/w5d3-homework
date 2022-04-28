//Sum Numbs in a Range
function sumNums(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;

    for(var i = min; i <= max; i++){
      temp += i;
    }
    return temp;
  }
  
  sumNums([5, 60]);

//igpay atinlay
function pigLanguage(str) {
    
    let consonantRegex = /^[^aeoiu]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay") : str.concat("way")
  
    }
    
    pigLanguage("aibohphobia");

//The Fibonacci Code
function fibCode(num) {
    
    var prevNum = 0;
    var currNum = 1;
    var result = 0;
  
    while(currNum <= num){
      if(currNum % 2 !== 0){
        result += currNum;
      }
      currNum += prevNum;
      prevNum = currNum - prevNum;
    }
  
    return result;
  
    }
    
    fibCode(50);







