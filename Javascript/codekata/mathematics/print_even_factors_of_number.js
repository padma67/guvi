//Given a number N, print the even factors of N.If the even factor does not exists for N print '-1'.
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  var s="";
  var a=data;
  var count=0;
  for(i=2;i<=a;i++)
  {
    if(a%i===0)
    {
      if(i%2===0){
        count=count+1;
        
      s+=i+" ";
      }
    }
  }
  if(count>0)
  {
  console.log(s);
  }
  else{
    console.log("-1");
  }
});
      
