/*Given an arraylist A of string type which has name#mark1#mark2#mark3 format. 
Retrieve the name of the student who has scored max marks(total of three).*/
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
 var a=m[0].split("#");
 var n1=a[0];
 var b=m[1].split("#");
 var n2=b[0];
 var sum1=parseInt(a[1])+parseInt(a[2])+parseInt(a[3]);
 var sum2=parseInt(b[1])+parseInt(b[2])+parseInt(b[3]);
  if(sum1>sum2){
      console.log(n1);
  } 
  else{
      console.log(n2);
  }
});
