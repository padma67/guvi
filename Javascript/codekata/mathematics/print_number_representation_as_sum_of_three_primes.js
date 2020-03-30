const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
inp.on("line",(data)=>{
  var count=0;
  var b=[];
  var d=0;
  var e=0;
  var h=0;
  for(var i=2;i<=data;i++)
  { 
    var not=1;
    for(var j=2;j<=i;j++)
    {
      if(i%j===0 && j!==i)
      {
        not=0;
      }
    }
    if(not===1)
    {
      b.push(i);
    }
  }
  for(var k=0;k<b.length;k++)
  {
    for(var l=k+1;l<b.length;l++)
    {
      for(var x=l+1;x<b.length;x++)
      {
        if(parseInt(b[k])+parseInt(b[l])+parseInt(b[x])===data)
        {
          d=b[k];
          e=b[l];
           h=b[x];
          count=1;
          break;
        } 
      }  
      
    }
 }

  
  console.log(d);
});
