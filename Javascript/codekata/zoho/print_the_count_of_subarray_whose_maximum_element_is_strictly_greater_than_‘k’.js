const readline=require('readline');
const inp=readline.createInterface({
  input:process.stdin
});
var user=[];
inp.on("line",(data)=>{
  user.push(data)
});
inp.on("close",()=>{
var a=user[0].split(" ");
var b=user[1].split(" ");
var N=parseInt(a[0]);
var K=parseInt(a[1]);
var t=[];var res=[];
for(var i=0;i<b.length;i++)
{
  for(var j=i;j<b.length;j++)
  {
    for(var k=i;k<=j;k++)
    {
      t.push(parseInt(b[k]));
    }
    res.push(t);
    t=[];
  }
}
//console.log(res);
var count=0;
for(var l=0;l<res.length;l++)
{
    var m=Math.max.apply(null,res[l]);
    if(m>K)
    {
        count=count+1;
    }
}
console.log(count);
});
