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
  var b=[];
 for(i=a.length-1;i>=0;i--)
  {
    b.push(a.pop());
  }
  console.log(b.join(" "));
});
  
