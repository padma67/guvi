/*you are given with array of numbers.you have to find whether array is beautiful or not. 
A beautiful array is an array whose sum of all numbers is divisible by 2, 3 and 5*/
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
    var a=m[1].split(" ");
    var sum=0;
    for(i=0;i<a.length;i++){
        sum+=parseInt(a[i]);
    }
    if(sum%2===0 && sum%3===0 && sum%5===0 ){
        console.log(1);
    }
    else{
        console.log(0,sum);
    }
});
