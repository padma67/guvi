const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var s="";
  for (i=1;i<=data;i++){
    s+=(i*9)+" ";
  }
  console.log(s);
});
