/*Given a number N, Print sum of every didgit to the power of the weight of corresponding digit(Explanation :
If the input is 12345 and then output calculated as (1^0)+(2^1)+(3^2)+(4^3)+(5^4)).*/
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var n=data.split("");
  var sum=0;
  for(i=0;i<n.length;i++){
      sum+=Math.pow(n[i],i)
  }
  console.log(sum);
});
      
