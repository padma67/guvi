const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var b=[];
  var c=0;
  var d=0;
  var e=0;
  for(i=2;i<=data;i++)
  { 
    var count=0;
    for(j=1;j<=i;j++)
    {
      if(i%j==0)
      {
        count=count+1;
      }
    }
    if(count==2)
    {
      b.push(i);
    }
  }
  for(i=0;i<b.length;i++)
  {
    for(j=i+1;j<b.length;j++)
    {
      if(b[i]*b[j]==data)
      {
        d=b[i];
        e=b[j];
        c=c+1;
        break;
      }
    }
  }

  if(c==1){
  console.log(e,d);
    }
  else
  {
    console.log("-1");
  }
});
