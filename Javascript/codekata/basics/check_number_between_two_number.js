const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var A= parseInt(m[0].split(" "));
  var g=m[1].split(" ");
  var C=parseInt(g[0]);
  var S=parseInt(g[1]);
  if(A>C && A<S)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
});
