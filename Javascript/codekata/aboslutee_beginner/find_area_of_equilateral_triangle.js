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
  var Area = (Math.sqrt(3)/ 4)*(a* a)
  console.log(Area.toFixed(2));
});
