/*You are given with an array. For each element present in the array your task is to print the next smallest than that number. 
If it is not smallest print -1*/
const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var a=m[1].split(" ");
  var b=[];
  var count=0;
  for(i=0;i<a.length;i++)
  {
    count=0;
    for(j=i+1;j<a.length;j++)
    {
      if(parseInt(a[i])>parseInt(a[j]))
      {
        b.push(a[j]);
        count+=1;
        break;
      }
    }
    if(count==0)
    {
      b.push(-1);
    }
  }
  console.log(b.join(" "));
});
  
