const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var n=data;
  var a=[];
  for(var i=1;i<=n;i++)
  {
    if(n%i===0)
    {
      if(i%2!=0)
      {
        a.push(i);
      }
    }
  }
  console.log(a.join(" "));
});
