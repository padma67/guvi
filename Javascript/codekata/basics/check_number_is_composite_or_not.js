const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var A=parseInt(data);
  var count=0;
    for(j=1;j<=A;j++)
    {
      if(A%j==0)
      {
        count=count+1;
      }
    }
    if(count==2)
    {
      console.log("no");
    }
    else
    {
      console.log("yes");
    }
});
      
