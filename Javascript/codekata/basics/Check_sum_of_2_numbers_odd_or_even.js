const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var A= m[0].split(" ");
  var C=parseInt(A[0]);
  var S=parseInt(A[1]);
  var d=C+S;
  if(d%2==0)
  {
    console.log("even");
  }
  else
  {
    console.log("odd");
  }
});
