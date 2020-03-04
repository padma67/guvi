const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var A=(m[0].split(" "));
  var P=A[0];
  var T=A[1];
  var R=A[2];
  var SI=((P*T*R)/100);
  console.log(SI.toFixed(2));
});
  
