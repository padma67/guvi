const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
word=data.split("");

function encodeWord(word) {
  // Variables that data gets stored into.
  let currentLetter, lastLetter, currentCount
  
  // We end up appending everything to this string.
  let output = ''
  
  for (let i = 0; i < word.length; i++) {
    // Initial character case.
    if (typeof lastLetter === 'undefined') {
      lastLetter = word[i];
      currentCount = 1;
      
      continue;
    }
    
    /* If the current character isn't the last character, 
      then we know it's a new word and we should start over.
    */
    if (word[i] !== lastLetter) {
      // Appends the character count and the last character to the output string.
      output += lastLetter + currentCount;
      lastLetter = word[i];
      currentCount = 1;
      
      //continue
      continue;
    }

    currentCount++;
  }
  
  // Returns the output, and the last character.
  console.log(output + (lastLetter + currentCount))
  return (output + (lastLetter + currentCount))
  
}

encodeWord(word)
});
