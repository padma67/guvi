const readline = require ('readline');
const inp=readline.createInterface({
  input:process.stdin
});
const m=[];
inp.on("line",(data)=>{
  m.push(data);
});
inp.on("close",()=>{
  var a=m[0].split(" ")
  var b=a[0];
  var c=a[1];
      if(b.length>c.length)
      {
        console.log(b);
      }
      else if(b.length==c.length)
      {
        console.log(b);
      }
  else
  {
    console.log(c);
  }

});
