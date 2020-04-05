const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var b=data.split("");
  var c=[];
  for(i=0;i<b.length;i++)
  {
    var count=1
    for(j=i+1;j<b.length;j++)
    {
      if(b[i]==b[j])
      {
       count=count+1;
      }
    }
    c.push(count);
  }
  console.log(Math.max.apply(null,c));
});
