const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var A=m[1].split(" ");
  for(var i=0;i<A.length;i++)
  {
    for(var j=i+1;j<A.length;j++)
    {
      if(A[i]<A[j])
      {
        var temp=A[i];
        A[i]=A[j];
        A[j]=temp;
      }
    }
  }
  console.log(A.join(""));
});
  
