const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var a=m[0];
  var b=m[1].split(" ");
  var c=[];
  for(var i=0;i<b.length;i++)
  {
   c.push(parseInt(b[i]));
   if(i==b.length-1){
       break;
   }
   else{
   b[i+1]=parseInt(b[i])+parseInt(b[i+1]);
   }
  }
  console.log(c.join(" "));
  
});
