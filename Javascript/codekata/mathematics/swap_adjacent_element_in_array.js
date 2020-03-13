const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var a=m[0].split(" ");
  var A=m[1].split(" ");
  var b=0;
  var s="";
  for(i=0;i<A.length-1;i=i+2)
  {
      b=A[i];
      A[i]=A[i+1];
      A[i+1]=b;
  }
  for(i=0;i<A.length;i=i+2)
  {
    s+=A[i]+" ";
  }
  console.log(s);
});
      
