const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var A=data.split("");
  var c=0;
  for(i=0;i<A.length;i+=2){
    c=A[i];
    A[i]=A[i+1];
    A[i+1]=c;
  }
  var B=A.join("");
  console.log(B);
});
    
