const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var stack= new Array();
  stack=m[0].split(" ");
  var s=[];
  for(i=stack.length-1;i>=0;i--)
  {
    s.push(stack[i]);
  }
  console.log(s.join(" "));
  
});
