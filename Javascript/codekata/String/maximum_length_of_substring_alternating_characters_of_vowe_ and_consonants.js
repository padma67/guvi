const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var s=data;
  var v="aeiou";
  var count=0;
  for(var i=1;i<s.length;i+=2)
  {
    for(var j=0;j<v.length;j++)
    {
      if(s[i]==v[j])
      {
        count=count+2;
        break;
      }
    }
  }
  console.log(count)
});
