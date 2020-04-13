const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var s=[];
  var a=parseInt(data);
  var count=0;
  for(i=2;i<=a;i++)
  {
    if(a%i===0)
    {
      if(i%2===0){
        count=count+1;
        
      s.push(i);
      }
    }
  }
  if(count===0)
  {
  console.log("-1");
  }
  else{
    console.log(s.join(" "));
  }
});
      
