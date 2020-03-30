const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var a=parseInt(data);
  for(var i=a;i>0;i--)
  {
    s="";
    for(var j=1;j<=i;j++)
    {
      s+="1"+" ";
    }
    console.log(s);
  }
});
