const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var a=m[0].split(" ");
  var L=parseInt(a[0]);
  var R=parseInt(a[1]);
  var sum=0
    for(i=L;i<=R;i++)
    {
      if(i%2!==0){
        sum=sum+i;
      }
    }
      console.log(sum);
});
