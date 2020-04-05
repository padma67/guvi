const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var S=data.split("");
  var s=S.sort();
  console.log(s.join(""));
});
