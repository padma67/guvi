const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var s=data.split(" ");
  var S1=s[0];
  var S2=s[1];
  var d="";
  var ml=parseInt(s[0])*parseInt(s[1]);
  d+=ml;
  console.log(d);
});
  
