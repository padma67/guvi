const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
 var a=[];
  var b=[];
  for(i=1;i<m.length;i++)
  {
    b=m[i].split(" ");
    for(j=0;j<b.length;j++)
    {
      a.push(parseInt(b[j]));
    }
    b=[];
  }
  for(i=0;i<a.length;i++)
  {
    for(j=i+1;j<a.length;j++)
    {
      if(a[i]>a[j]){
        var temp=a[i];
        a[i]=a[j];
        a[j]=temp;
      }
    }
  }
 console.log(a.join(" "));
});
  
